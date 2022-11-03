// Copyright 2022 Harness Inc. All rights reserved.
// Use of this source code is governed by the Polyform Free Trial License
// that can be found in the LICENSE.md file for this repository.

package service

import (
	"context"

	"github.com/harness/gitness/gitrpc/internal/types"
)

// GitAdapter for accessing git commands from gitea.
type GitAdapter interface {
	InitRepository(ctx context.Context, path string, bare bool) error
	SetDefaultBranch(ctx context.Context, repoPath string, defaultBranch string, allowEmpty bool) error
	Clone(ctx context.Context, from, to string, opts types.CloneRepoOptions) error
	AddFiles(repoPath string, all bool, files ...string) error
	Commit(repoPath string, opts types.CommitChangesOptions) error
	Push(ctx context.Context, repoPath string, opts types.PushOptions) error
	GetTreeNode(ctx context.Context, repoPath string, ref string, treePath string) (*types.TreeNode, error)
	ListTreeNodes(ctx context.Context, repoPath string, ref string, treePath string,
		recursive bool, includeLatestCommit bool) ([]types.TreeNodeWithCommit, error)
	GetSubmodule(ctx context.Context, repoPath string, ref string, treePath string) (*types.Submodule, error)
	GetBlob(ctx context.Context, repoPath string, sha string, sizeLimit int64) (*types.Blob, error)
	WalkReferences(ctx context.Context, repoPath string, handler types.WalkReferencesHandler,
		opts *types.WalkReferencesOptions) error
	GetCommit(ctx context.Context, repoPath string, ref string) (*types.Commit, error)
	GetCommits(ctx context.Context, repoPath string, refs []string) ([]types.Commit, error)
	ListCommits(ctx context.Context, repoPath string, ref string, page int,
		pageSize int) ([]types.Commit, int64, error)
	GetLatestCommit(ctx context.Context, repoPath string, ref string, treePath string) (*types.Commit, error)
	GetAnnotatedTag(ctx context.Context, repoPath string, sha string) (*types.Tag, error)
	GetAnnotatedTags(ctx context.Context, repoPath string, shas []string) ([]types.Tag, error)
}