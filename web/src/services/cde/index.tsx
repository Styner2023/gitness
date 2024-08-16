/* Generated by restful-react */

import React from 'react'
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react'

import { getConfig } from '../config'
export const SPEC_VERSION = '0.0.0'
export type EnumCodeRepoAccessType = 'private' | 'public'

export type EnumCodeRepoType = 'github' | 'gitlab' | 'harnessCode' | 'bitbucket' | 'unknown'

export type EnumGitspaceAccessType = 'jwt_token' | 'user_credentials' | 'ssh_key'

export type EnumGitspaceAccessTypeType2 = 'jwtToken' | 'password' | 'sshKey'

export type EnumGitspaceActionType = 'start' | 'stop'

export type EnumGitspaceCodeRepoType = 'github' | 'gitlab' | 'harness_code' | 'bitbucket' | 'unknown' | 'gitness'

export type EnumGitspaceEntityType = 'gitspaceConfig' | 'gitspaceInstance'

export type EnumGitspaceEventType =
  | 'gitspaceActionStart'
  | 'infraProvisioningStart'
  | 'infraProvisioningCompleted'
  | 'agentConnectStart'
  | 'agentConnectCompleted'
  | 'gitspaceActionStartCompleted'
  | 'gitspaceActionStop'
  | 'gitspaceActionStopCompleted'
  | 'infraUnprovisioningStart'
  | 'infraUnprovisioningCompleted'
  | 'infraProvisioningFailed'
  | 'agentGitspaceStateReportRunning'
  | 'agentGitspaceStateReportError'
  | 'agentGitspaceStateReportStopped'
  | 'agentGitspaceStateReportUnknown'

export type EnumGitspaceInstanceStateType =
  | 'running'
  | 'uninitialized'
  | 'unknown'
  | 'error'
  | 'deleted'
  | 'starting'
  | 'stopping'

export type EnumGitspaceStateType = 'running' | 'stopped' | 'error' | 'uninitialized' | 'starting' | 'stopping'

export type EnumGitspaceStateTypeType2 = 'running' | 'stopped' | 'error'

export type EnumIDEType = 'vs_code' | 'vs_code_web'

export type EnumIDETypeType2 = 'vsCode' | 'vsCodeWeb'

export type EnumInfraProviderType = 'docker' | 'harness_gcp' | 'harness_cloud'

export type EnumProviderType = 'harnessGCP' | 'k8s' | 'harnessOVHCloud' | 'docker'

export interface InfraproviderResourceInput {
  cpu?: string | null
  disk?: string | null
  gateway_host?: string | null
  gateway_port?: string | null
  identifier?: string
  infra_provider_type?: EnumInfraProviderType
  memory?: string | null
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  network?: string | null
  region?: string[] | null
  template_identifier?: string | null
}

export interface OpenapiCreateGitspaceRequest {
  branch?: string
  code_repo_ref?: string | null
  code_repo_type?: EnumGitspaceCodeRepoType
  code_repo_url?: string
  devcontainer_path?: string | null
  ide?: EnumIDEType
  identifier?: string
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  resource_identifier?: string
  resource_space_ref?: string
  space_ref?: string
  ssh_token_identifier?: string
}

export interface OpenapiCreateInfraProviderConfigRequest {
  identifier?: string
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  resources?: InfraproviderResourceInput[] | null
  space_ref?: string
  type?: EnumInfraProviderType
}

export interface OpenapiCreateInfraProviderResourceResponse {
  resources?: TypesInfraProviderResourceRequest[] | null
}

export interface OpenapiCreateInfraProviderResponse {
  created?: number
  id?: string
  metadata?: string
  name?: string
  space_path?: string
  type?: EnumProviderType
  updated?: number
}

export interface OpenapiCreateInfraProviderTemplateRequest {
  created?: number
  data?: string
  description?: string
  identifier?: string
  space_id?: number
  space_path?: string
  updated?: number
}

export interface OpenapiCreateInfraProviderTemplateResponse {
  created?: number
  data?: string
  description?: string
  identifier?: string
  space_id?: number
  space_path?: string
  updated?: number
}

export interface OpenapiGetCodeRepositoryRequest {
  connector_ref?: string
  url?: string
}

export interface OpenapiGetCodeRepositoryResponse {
  access_type?: EnumCodeRepoAccessType
  branch?: string
  repo_type?: EnumCodeRepoType
  url?: string
}

export interface OpenapiGetGitspaceResponse {
  access_key?: string
  access_type?: EnumGitspaceAccessTypeType2
  config?: TypesGitspaceConfigResponse
  created?: number
  id?: string
  last_used?: number
  machine_user?: string
  resource_usage?: string
  space_path?: string
  state?: EnumGitspaceStateTypeType2
  total_time_used?: number
  tracked_changes?: string
  updated?: number
  url?: string
}

export interface OpenapiGetTokenResponse {
  gitspace_token?: string
}

export interface OpenapiGitspaceActionRequest {
  action?: EnumGitspaceActionType
}

export type OpenapiListInfraProviderResourceResponse = TypesInfraProviderResourceResponse[] | null

export interface OpenapiLookupRepoGitspaceRequest {
  space_ref?: string
  url?: string
}

export interface OpenapiUpdateGitspaceRequest {
  branch?: string
  code_repo_id?: string
  code_repo_type?: EnumCodeRepoType
  code_repo_url?: string
  devcontainer_path?: string
  id?: string
  ide?: EnumIDETypeType2
  infra_provider_resource_id?: string
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  prebuild_repo_id?: string
}

export interface ScmCodeRepositoryResponse {
  branch?: string
  is_private?: boolean
  url?: string
}

export interface TypesGitspaceConfig {
  branch?: string
  code_repo_ref?: string | null
  code_repo_type?: EnumGitspaceCodeRepoType
  code_repo_url?: string
  created?: number
  devcontainer_path?: string | null
  ide?: EnumIDEType
  identifier?: string
  instance?: TypesGitspaceInstance
  name?: string
  resource_identifier?: string
  space_path?: string
  ssh_token_identifier?: string
  state?: EnumGitspaceStateType
  updated?: number
  user_id?: string
}

export interface TypesGitspaceConfigResponse {
  branch?: string
  code_repo_id?: string
  code_repo_type?: EnumCodeRepoType
  code_repo_url?: string
  created?: number
  devcontainer_path?: string
  id?: string
  ide?: EnumIDETypeType2
  infra_provider_resource_id?: string
  name?: string
  prebuild_repo_id?: string
  space_path?: string
  status_code?: string
  updated?: number
  user_id?: string
}

export interface TypesGitspaceEventResponse {
  created?: number
  entity_type?: EnumGitspaceEntityType
  entity_uid?: string
  event?: EnumGitspaceEventType
  event_time?: string
  message?: string
  timestamp?: number
}

export interface TypesGitspaceInstance {
  access_key?: string | null
  access_type?: EnumGitspaceAccessType
  created?: number
  identifier?: string
  last_used?: number
  machine_user?: string | null
  resource_usage?: string | null
  space_path?: string
  state?: EnumGitspaceInstanceStateType
  total_time_used?: number
  tracked_changes?: string | null
  updated?: number
  url?: string | null
}

export interface TypesInfraProviderConfig {
  created?: number
  identifier?: string
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  resources?: TypesInfraProviderResource[] | null
  space_path?: string
  type?: EnumInfraProviderType
  updated?: number
}

export interface TypesInfraProviderResource {
  config_identifier?: string
  cpu?: string | null
  created?: number
  disk?: string | null
  gateway_host?: string | null
  gateway_port?: string | null
  identifier?: string
  infra_provider_type?: EnumInfraProviderType
  memory?: string | null
  metadata?: {
    [key: string]: string
  } | null
  name?: string
  network?: string | null
  region?: string
  space_path?: string
  template_identifier?: string | null
  updated?: number
}

export interface TypesInfraProviderResourceRequest {
  cpu?: string
  disk?: string
  gateway_host?: string
  gateway_port?: string
  id?: string
  infra_provider_type?: EnumProviderType
  memory?: string
  name?: string
  network?: string
  opentofu_params?: {
    [key: string]: string
  } | null
  region?: string[] | null
  template_id?: string
}

export interface TypesInfraProviderResourceResponse {
  cpu?: string
  created?: number
  disk?: string
  gateway_host?: string
  gateway_port?: string
  id?: string
  infra_provider_config_id?: string
  infra_provider_type?: EnumProviderType
  memory?: string
  name?: string
  network?: string
  opentofu_params?: {
    [key: string]: string
  } | null
  region?: string
  space_path?: string
  template_id?: string
  updated?: number
}

export interface UsererrorError {
  message?: string
  values?: { [key: string]: any }
}

export interface ListGitspacesForAccountPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
}

export type ListGitspacesForAccountProps = Omit<
  GetProps<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>,
  'path'
> &
  ListGitspacesForAccountPathParams

/**
 * List gitspaces for account
 */
export const ListGitspacesForAccount = ({ accountIdentifier, ...props }: ListGitspacesForAccountProps) => (
  <Get<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>
    path={`/accounts/${accountIdentifier}/gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListGitspacesForAccountProps = Omit<
  UseGetProps<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>,
  'path'
> &
  ListGitspacesForAccountPathParams

/**
 * List gitspaces for account
 */
export const useListGitspacesForAccount = ({ accountIdentifier, ...props }: UseListGitspacesForAccountProps) =>
  useGet<OpenapiGetGitspaceResponse[], unknown, void, ListGitspacesForAccountPathParams>(
    (paramsInPath: ListGitspacesForAccountPathParams) => `/accounts/${paramsInPath.accountIdentifier}/gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier }, ...props }
  )

export interface ListInfraProviderResourcesForAccountPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * infra Provider Config Identifier.
   */
  infraprovider_identifier: string
}

export type ListInfraProviderResourcesForAccountProps = Omit<
  GetProps<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesForAccountPathParams>,
  'path'
> &
  ListInfraProviderResourcesForAccountPathParams

/**
 * List infraProvider Resources
 */
export const ListInfraProviderResourcesForAccount = ({
  accountIdentifier,
  infraprovider_identifier,
  ...props
}: ListInfraProviderResourcesForAccountProps) => (
  <Get<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesForAccountPathParams>
    path={`/accounts/${accountIdentifier}/infraproviders/${infraprovider_identifier}/resources`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListInfraProviderResourcesForAccountProps = Omit<
  UseGetProps<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesForAccountPathParams>,
  'path'
> &
  ListInfraProviderResourcesForAccountPathParams

/**
 * List infraProvider Resources
 */
export const useListInfraProviderResourcesForAccount = ({
  accountIdentifier,
  infraprovider_identifier,
  ...props
}: UseListInfraProviderResourcesForAccountProps) =>
  useGet<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesForAccountPathParams>(
    (paramsInPath: ListInfraProviderResourcesForAccountPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/infraproviders/${paramsInPath.infraprovider_identifier}/resources`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, infraprovider_identifier }, ...props }
  )

export interface GetCodeRepositoryPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type GetCodeRepositoryProps = Omit<
  MutateProps<
    OpenapiGetCodeRepositoryResponse,
    unknown,
    void,
    OpenapiGetCodeRepositoryRequest,
    GetCodeRepositoryPathParams
  >,
  'path' | 'verb'
> &
  GetCodeRepositoryPathParams

/**
 * Get Code Repository
 */
export const GetCodeRepository = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: GetCodeRepositoryProps) => (
  <Mutate<OpenapiGetCodeRepositoryResponse, unknown, void, OpenapiGetCodeRepositoryRequest, GetCodeRepositoryPathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/coderepository`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetCodeRepositoryProps = Omit<
  UseMutateProps<
    OpenapiGetCodeRepositoryResponse,
    unknown,
    void,
    OpenapiGetCodeRepositoryRequest,
    GetCodeRepositoryPathParams
  >,
  'path' | 'verb'
> &
  GetCodeRepositoryPathParams

/**
 * Get Code Repository
 */
export const useGetCodeRepository = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseGetCodeRepositoryProps) =>
  useMutate<
    OpenapiGetCodeRepositoryResponse,
    unknown,
    void,
    OpenapiGetCodeRepositoryRequest,
    GetCodeRepositoryPathParams
  >(
    'POST',
    (paramsInPath: GetCodeRepositoryPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/coderepository`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface ListGitspacesQueryParams {
  /**
   * The page to return.
   */
  page?: number
  /**
   * The maximum number of results to return.
   */
  limit?: number
}

export interface ListGitspacesPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type ListGitspacesProps = Omit<
  GetProps<TypesGitspaceConfig[], UsererrorError, ListGitspacesQueryParams, ListGitspacesPathParams>,
  'path'
> &
  ListGitspacesPathParams

/**
 * List gitspaces
 */
export const ListGitspaces = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: ListGitspacesProps) => (
  <Get<TypesGitspaceConfig[], UsererrorError, ListGitspacesQueryParams, ListGitspacesPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListGitspacesProps = Omit<
  UseGetProps<TypesGitspaceConfig[], UsererrorError, ListGitspacesQueryParams, ListGitspacesPathParams>,
  'path'
> &
  ListGitspacesPathParams

/**
 * List gitspaces
 */
export const useListGitspaces = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseListGitspacesProps) =>
  useGet<TypesGitspaceConfig[], UsererrorError, ListGitspacesQueryParams, ListGitspacesPathParams>(
    (paramsInPath: ListGitspacesPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface CreateGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type CreateGitspaceProps = Omit<
  MutateProps<TypesGitspaceConfig, UsererrorError, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>,
  'path' | 'verb'
> &
  CreateGitspacePathParams

/**
 * Create gitspace config
 */
export const CreateGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: CreateGitspaceProps) => (
  <Mutate<TypesGitspaceConfig, UsererrorError, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseCreateGitspaceProps = Omit<
  UseMutateProps<TypesGitspaceConfig, UsererrorError, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>,
  'path' | 'verb'
> &
  CreateGitspacePathParams

/**
 * Create gitspace config
 */
export const useCreateGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseCreateGitspaceProps) =>
  useMutate<TypesGitspaceConfig, UsererrorError, void, OpenapiCreateGitspaceRequest, CreateGitspacePathParams>(
    'POST',
    (paramsInPath: CreateGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface DeleteGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type DeleteGitspaceProps = Omit<
  MutateProps<void, UsererrorError, void, string, DeleteGitspacePathParams>,
  'path' | 'verb'
> &
  DeleteGitspacePathParams

/**
 * Delete gitspace config
 */
export const DeleteGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: DeleteGitspaceProps) => (
  <Mutate<void, UsererrorError, void, string, DeleteGitspacePathParams>
    verb="DELETE"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseDeleteGitspaceProps = Omit<
  UseMutateProps<void, UsererrorError, void, string, DeleteGitspacePathParams>,
  'path' | 'verb'
> &
  DeleteGitspacePathParams

/**
 * Delete gitspace config
 */
export const useDeleteGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseDeleteGitspaceProps) =>
  useMutate<void, UsererrorError, void, string, DeleteGitspacePathParams>(
    'DELETE',
    (paramsInPath: DeleteGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface FindGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspace_identifier: string
}

export type FindGitspaceProps = Omit<
  GetProps<TypesGitspaceConfig, UsererrorError, void, FindGitspacePathParams>,
  'path'
> &
  FindGitspacePathParams

/**
 * Get gitspace
 */
export const FindGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: FindGitspaceProps) => (
  <Get<TypesGitspaceConfig, UsererrorError, void, FindGitspacePathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspace_identifier}`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseFindGitspaceProps = Omit<
  UseGetProps<TypesGitspaceConfig, UsererrorError, void, FindGitspacePathParams>,
  'path'
> &
  FindGitspacePathParams

/**
 * Get gitspace
 */
export const useFindGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: UseFindGitspaceProps) =>
  useGet<TypesGitspaceConfig, UsererrorError, void, FindGitspacePathParams>(
    (paramsInPath: FindGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspace_identifier}`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspace_identifier },
      ...props
    }
  )

export interface UpdateGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspace_identifier: string
}

export type UpdateGitspaceProps = Omit<
  MutateProps<TypesGitspaceConfig, UsererrorError, void, OpenapiUpdateGitspaceRequest, UpdateGitspacePathParams>,
  'path' | 'verb'
> &
  UpdateGitspacePathParams

/**
 * Update gitspace config
 */
export const UpdateGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: UpdateGitspaceProps) => (
  <Mutate<TypesGitspaceConfig, UsererrorError, void, OpenapiUpdateGitspaceRequest, UpdateGitspacePathParams>
    verb="PUT"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspace_identifier}`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseUpdateGitspaceProps = Omit<
  UseMutateProps<TypesGitspaceConfig, UsererrorError, void, OpenapiUpdateGitspaceRequest, UpdateGitspacePathParams>,
  'path' | 'verb'
> &
  UpdateGitspacePathParams

/**
 * Update gitspace config
 */
export const useUpdateGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: UseUpdateGitspaceProps) =>
  useMutate<TypesGitspaceConfig, UsererrorError, void, OpenapiUpdateGitspaceRequest, UpdateGitspacePathParams>(
    'PUT',
    (paramsInPath: UpdateGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspace_identifier}`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspace_identifier },
      ...props
    }
  )

export interface GitspaceActionPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspace_identifier: string
}

export type GitspaceActionProps = Omit<
  MutateProps<TypesGitspaceConfig, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>,
  'path' | 'verb'
> &
  GitspaceActionPathParams

/**
 * Gitspace action
 */
export const GitspaceAction = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: GitspaceActionProps) => (
  <Mutate<TypesGitspaceConfig, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspace_identifier}/actions`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGitspaceActionProps = Omit<
  UseMutateProps<TypesGitspaceConfig, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>,
  'path' | 'verb'
> &
  GitspaceActionPathParams

/**
 * Gitspace action
 */
export const useGitspaceAction = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: UseGitspaceActionProps) =>
  useMutate<TypesGitspaceConfig, unknown, void, OpenapiGitspaceActionRequest, GitspaceActionPathParams>(
    'POST',
    (paramsInPath: GitspaceActionPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspace_identifier}/actions`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspace_identifier },
      ...props
    }
  )

export interface GetGitspaceEventsPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspace_identifier: string
}

export type GetGitspaceEventsProps = Omit<
  GetProps<TypesGitspaceEventResponse[], unknown, void, GetGitspaceEventsPathParams>,
  'path'
> &
  GetGitspaceEventsPathParams

/**
 * Get gitspace events
 */
export const GetGitspaceEvents = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: GetGitspaceEventsProps) => (
  <Get<TypesGitspaceEventResponse[], unknown, void, GetGitspaceEventsPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspace_identifier}/events`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetGitspaceEventsProps = Omit<
  UseGetProps<TypesGitspaceEventResponse[], unknown, void, GetGitspaceEventsPathParams>,
  'path'
> &
  GetGitspaceEventsPathParams

/**
 * Get gitspace events
 */
export const useGetGitspaceEvents = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: UseGetGitspaceEventsProps) =>
  useGet<TypesGitspaceEventResponse[], unknown, void, GetGitspaceEventsPathParams>(
    (paramsInPath: GetGitspaceEventsPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspace_identifier}/events`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspace_identifier },
      ...props
    }
  )

export interface GetGitspaceInstanceLogsPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspace_identifier: string
}

export type GetGitspaceInstanceLogsProps = Omit<
  GetProps<string, unknown, void, GetGitspaceInstanceLogsPathParams>,
  'path'
> &
  GetGitspaceInstanceLogsPathParams

/**
 * Get gitspace instance logs
 */
export const GetGitspaceInstanceLogs = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: GetGitspaceInstanceLogsProps) => (
  <Get<string, unknown, void, GetGitspaceInstanceLogsPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspace_identifier}/logs`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetGitspaceInstanceLogsProps = Omit<
  UseGetProps<string, unknown, void, GetGitspaceInstanceLogsPathParams>,
  'path'
> &
  GetGitspaceInstanceLogsPathParams

/**
 * Get gitspace instance logs
 */
export const useGetGitspaceInstanceLogs = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: UseGetGitspaceInstanceLogsProps) =>
  useGet<string, unknown, void, GetGitspaceInstanceLogsPathParams>(
    (paramsInPath: GetGitspaceInstanceLogsPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspace_identifier}/logs`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspace_identifier },
      ...props
    }
  )

export interface GetTokenPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * gitspace identifier.
   */
  gitspace_identifier: string
}

export type GetTokenProps = Omit<GetProps<OpenapiGetTokenResponse, unknown, void, GetTokenPathParams>, 'path'> &
  GetTokenPathParams

/**
 * Get gitspace token
 */
export const GetToken = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: GetTokenProps) => (
  <Get<OpenapiGetTokenResponse, unknown, void, GetTokenPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/${gitspace_identifier}/token`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetTokenProps = Omit<UseGetProps<OpenapiGetTokenResponse, unknown, void, GetTokenPathParams>, 'path'> &
  GetTokenPathParams

/**
 * Get gitspace token
 */
export const useGetToken = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  gitspace_identifier,
  ...props
}: UseGetTokenProps) =>
  useGet<OpenapiGetTokenResponse, unknown, void, GetTokenPathParams>(
    (paramsInPath: GetTokenPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/${paramsInPath.gitspace_identifier}/token`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, gitspace_identifier },
      ...props
    }
  )

export interface RepoLookupForGitspacePathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type RepoLookupForGitspaceProps = Omit<
  MutateProps<
    ScmCodeRepositoryResponse,
    UsererrorError,
    void,
    OpenapiLookupRepoGitspaceRequest,
    RepoLookupForGitspacePathParams
  >,
  'path' | 'verb'
> &
  RepoLookupForGitspacePathParams

/**
 * Validate git repo for gitspaces
 */
export const RepoLookupForGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: RepoLookupForGitspaceProps) => (
  <Mutate<
    ScmCodeRepositoryResponse,
    UsererrorError,
    void,
    OpenapiLookupRepoGitspaceRequest,
    RepoLookupForGitspacePathParams
  >
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/gitspaces/lookup-repo`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseRepoLookupForGitspaceProps = Omit<
  UseMutateProps<
    ScmCodeRepositoryResponse,
    UsererrorError,
    void,
    OpenapiLookupRepoGitspaceRequest,
    RepoLookupForGitspacePathParams
  >,
  'path' | 'verb'
> &
  RepoLookupForGitspacePathParams

/**
 * Validate git repo for gitspaces
 */
export const useRepoLookupForGitspace = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseRepoLookupForGitspaceProps) =>
  useMutate<
    ScmCodeRepositoryResponse,
    UsererrorError,
    void,
    OpenapiLookupRepoGitspaceRequest,
    RepoLookupForGitspacePathParams
  >(
    'POST',
    (paramsInPath: RepoLookupForGitspacePathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/gitspaces/lookup-repo`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface ListInfraProvidersPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type ListInfraProvidersProps = Omit<
  GetProps<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>,
  'path'
> &
  ListInfraProvidersPathParams

/**
 * List infraproviders
 */
export const ListInfraProviders = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: ListInfraProvidersProps) => (
  <Get<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListInfraProvidersProps = Omit<
  UseGetProps<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>,
  'path'
> &
  ListInfraProvidersPathParams

/**
 * List infraproviders
 */
export const useListInfraProviders = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseListInfraProvidersProps) =>
  useGet<OpenapiCreateInfraProviderResponse[], unknown, void, ListInfraProvidersPathParams>(
    (paramsInPath: ListInfraProvidersPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface CreateInfraProviderPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
}

export type CreateInfraProviderProps = Omit<
  MutateProps<
    TypesInfraProviderConfig,
    UsererrorError,
    void,
    OpenapiCreateInfraProviderConfigRequest,
    CreateInfraProviderPathParams
  >,
  'path' | 'verb'
> &
  CreateInfraProviderPathParams

/**
 * Create infraProvider config
 */
export const CreateInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: CreateInfraProviderProps) => (
  <Mutate<
    TypesInfraProviderConfig,
    UsererrorError,
    void,
    OpenapiCreateInfraProviderConfigRequest,
    CreateInfraProviderPathParams
  >
    verb="POST"
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseCreateInfraProviderProps = Omit<
  UseMutateProps<
    TypesInfraProviderConfig,
    UsererrorError,
    void,
    OpenapiCreateInfraProviderConfigRequest,
    CreateInfraProviderPathParams
  >,
  'path' | 'verb'
> &
  CreateInfraProviderPathParams

/**
 * Create infraProvider config
 */
export const useCreateInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  ...props
}: UseCreateInfraProviderProps) =>
  useMutate<
    TypesInfraProviderConfig,
    UsererrorError,
    void,
    OpenapiCreateInfraProviderConfigRequest,
    CreateInfraProviderPathParams
  >(
    'POST',
    (paramsInPath: CreateInfraProviderPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders`,
    { base: getConfig('cde/api/v1'), pathParams: { accountIdentifier, orgIdentifier, projectIdentifier }, ...props }
  )

export interface GetInfraProviderPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * infra Provider Config Identifier.
   */
  infraprovider_identifier: string
}

export type GetInfraProviderProps = Omit<
  GetProps<TypesInfraProviderConfig, UsererrorError, void, GetInfraProviderPathParams>,
  'path'
> &
  GetInfraProviderPathParams

/**
 * Get infraProviderConfig
 */
export const GetInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraprovider_identifier,
  ...props
}: GetInfraProviderProps) => (
  <Get<TypesInfraProviderConfig, UsererrorError, void, GetInfraProviderPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders/${infraprovider_identifier}`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseGetInfraProviderProps = Omit<
  UseGetProps<TypesInfraProviderConfig, UsererrorError, void, GetInfraProviderPathParams>,
  'path'
> &
  GetInfraProviderPathParams

/**
 * Get infraProviderConfig
 */
export const useGetInfraProvider = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraprovider_identifier,
  ...props
}: UseGetInfraProviderProps) =>
  useGet<TypesInfraProviderConfig, UsererrorError, void, GetInfraProviderPathParams>(
    (paramsInPath: GetInfraProviderPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders/${paramsInPath.infraprovider_identifier}`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, infraprovider_identifier },
      ...props
    }
  )

export interface ListInfraProviderResourcesPathParams {
  /**
   * account identifier.
   */
  accountIdentifier: string
  /**
   * org identifier.
   */
  orgIdentifier: string
  /**
   * project identifier.
   */
  projectIdentifier: string
  /**
   * infra Provider Config Identifier.
   */
  infraprovider_identifier: string
}

export type ListInfraProviderResourcesProps = Omit<
  GetProps<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>,
  'path'
> &
  ListInfraProviderResourcesPathParams

/**
 * List infraProvider Resources
 */
export const ListInfraProviderResources = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraprovider_identifier,
  ...props
}: ListInfraProviderResourcesProps) => (
  <Get<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>
    path={`/accounts/${accountIdentifier}/orgs/${orgIdentifier}/projects/${projectIdentifier}/infraproviders/${infraprovider_identifier}/resources`}
    base={getConfig('cde/api/v1')}
    {...props}
  />
)

export type UseListInfraProviderResourcesProps = Omit<
  UseGetProps<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>,
  'path'
> &
  ListInfraProviderResourcesPathParams

/**
 * List infraProvider Resources
 */
export const useListInfraProviderResources = ({
  accountIdentifier,
  orgIdentifier,
  projectIdentifier,
  infraprovider_identifier,
  ...props
}: UseListInfraProviderResourcesProps) =>
  useGet<OpenapiListInfraProviderResourceResponse, unknown, void, ListInfraProviderResourcesPathParams>(
    (paramsInPath: ListInfraProviderResourcesPathParams) =>
      `/accounts/${paramsInPath.accountIdentifier}/orgs/${paramsInPath.orgIdentifier}/projects/${paramsInPath.projectIdentifier}/infraproviders/${paramsInPath.infraprovider_identifier}/resources`,
    {
      base: getConfig('cde/api/v1'),
      pathParams: { accountIdentifier, orgIdentifier, projectIdentifier, infraprovider_identifier },
      ...props
    }
  )
