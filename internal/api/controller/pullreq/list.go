// Copyright 2022 Harness Inc. All rights reserved.
// Use of this source code is governed by the Polyform Free Trial License
// that can be found in the LICENSE.md file for this repository.

package pullreq

import (
	"context"
	"fmt"

	"github.com/harness/gitness/internal/auth"
	"github.com/harness/gitness/types"
	"github.com/harness/gitness/types/enum"
)

// List returns a list of pull requests from the provided repository.
func (c *Controller) List(
	ctx context.Context,
	session *auth.Session,
	repoRef string,
	filter *types.PullReqFilter,
) ([]*types.PullReq, int64, error) {
	repo, err := c.getRepoCheckAccess(ctx, session, repoRef, enum.PermissionRepoView)
	if err != nil {
		return nil, 0, fmt.Errorf("failed to check access to target repo: %w", err)
	}

	if filter.SourceRepoRef == repoRef {
		filter.SourceRepoID = repo.ID
	} else if filter.SourceRepoRef != "" {
		var sourceRepo *types.Repository
		sourceRepo, err = c.getRepoCheckAccess(ctx, session, filter.SourceRepoRef, enum.PermissionRepoView)
		if err != nil {
			return nil, 0, fmt.Errorf("failed to check access to source repo: %w", err)
		}
		filter.SourceRepoID = sourceRepo.ID
	}

	list, err := c.pullreqStore.List(ctx, repo.ID, filter)
	if err != nil {
		return nil, 0, fmt.Errorf("failed to list pull requests: %w", err)
	}

	if filter.Page == 1 && len(list) < filter.Size {
		return list, int64(len(list)), nil
	}

	count, err := c.pullreqStore.Count(ctx, repo.ID, filter)
	if err != nil {
		return nil, 0, fmt.Errorf("failed to count pull requests: %w", err)
	}

	return list, count, nil
}