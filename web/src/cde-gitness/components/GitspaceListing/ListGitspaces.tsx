/*
 * Copyright 2023 Harness, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ConfirmationDialog,
  Container,
  Layout,
  TableV2,
  Text,
  useToaster,
  Button,
  ButtonVariation,
  Avatar
} from '@harnessio/uicore'
import React, { useEffect, useState } from 'react'
import { Color } from '@harnessio/design-system'
import type { Renderer, CellProps } from 'react-table'
import ReactTimeago from 'react-timeago'
import {
  Circle,
  Cpu,
  Clock,
  Play,
  Db,
  ModernTv,
  GithubCircle,
  GitLabFull,
  Code,
  Bitbucket as BitbucketIcon
} from 'iconoir-react'
import { Intent, Menu, MenuItem, PopoverInteractionKind, Position } from '@blueprintjs/core'
import { useHistory } from 'react-router-dom'
import type { IconName } from '@harnessio/icons'
import moment from 'moment'
import RegionIcon from 'cde-gitness/assests/globe.svg?url'
import { UseStringsReturn, useStrings } from 'framework/strings'
import { useAppContext } from 'AppContext'
import { getErrorMessage } from 'utils/Utils'
import { useConfirmAct } from 'hooks/useConfirmAction'
import VSCode from 'cde-gitness/assests/VSCode.svg?url'
import { GitspaceActionType, GitspaceStatus } from 'cde-gitness/constants'
import type {
  EnumGitspaceStateType,
  EnumIDEType,
  TypesGitspaceConfig,
  EnumGitspaceCodeRepoType
} from 'cde-gitness/services'
import gitspaceIcon from 'cde-gitness/assests/gitspace.svg?url'
import { useModalHook } from 'hooks/useModalHook'
import pause from 'cde-gitness/assests/pause.svg?url'
import web from 'cde-gitness/assests/web.svg?url'
import deleteIcon from 'cde-gitness/assests/delete.svg?url'
import vsCodeWebIcon from 'cde-gitness/assests/vsCodeWeb.svg?url'
import { useGitspaceActions } from 'cde-gitness/hooks/useGitspaceActions'
import { useDeleteGitspaces } from 'cde-gitness/hooks/useDeleteGitspaces'
import { useGetToken } from 'services/cde'
import css from './ListGitspaces.module.scss'

enum CodeRepoType {
  Github = 'github',
  Gitlab = 'gitlab',
  HarnessCode = 'harness_code',
  Bitbucket = 'bitbucket',
  Unknown = 'unknown'
}

const getIconByRepoType = ({ repoType }: { repoType?: EnumGitspaceCodeRepoType }): React.ReactNode => {
  switch (repoType) {
    case CodeRepoType.Github:
      return <GithubCircle height={24} width={24} />
    case CodeRepoType.Gitlab:
      return <GitLabFull height={24} width={24} />
    case CodeRepoType.Bitbucket:
      return <BitbucketIcon height={24} width={24} />
    default:
    case CodeRepoType.Unknown:
    case CodeRepoType.HarnessCode:
      return <Code height={24} width={24} />
  }
}

export const getStatusColor = (status?: EnumGitspaceStateType) => {
  switch (status) {
    case GitspaceStatus.RUNNING:
      return '#42AB45'
    case GitspaceStatus.STOPPING:
      return '#FF832B'
    case GitspaceStatus.STOPPED:
    case GitspaceStatus.UNINITIALIZED:
      return '#D0D0D9'
    case GitspaceStatus.ERROR:
      return '#FF0000'
    default:
      return '#000000'
  }
}

export const getStatusText = (getString: UseStringsReturn['getString'], status?: EnumGitspaceStateType) => {
  switch (status) {
    case GitspaceStatus.RUNNING:
      return getString('cde.listing.online')
    case GitspaceStatus.STOPPED:
      return getString('cde.listing.offline')
    case GitspaceStatus.ERROR:
      return getString('cde.listing.error')
    case GitspaceStatus.STARTING:
      return getString('cde.listing.starting')
    case GitspaceStatus.STOPPING:
      return getString('cde.listing.stopping')
    case GitspaceStatus.UNINITIALIZED:
      return GitspaceStatus.UNINITIALIZED.toLowerCase()
    default:
      return getString('cde.listing.offline')
  }
}

enum IDEType {
  VSCODE = 'vs_code',
  VSCODEWEB = 'vs_code_web'
}

const getUsageTemplate = (
  getString: UseStringsReturn['getString'],
  icon: React.ReactNode,
  resource_usage?: string,
  total_time_used?: number
): React.ReactElement | null => {
  return (
    <Layout.Horizontal spacing={'small'} flex={{ alignItems: 'center', justifyContent: 'start' }}>
      {icon}
      <Text color={Color.GREY_500} font={{ align: 'left', size: 'normal' }}>
        {getString('cde.used')} {resource_usage || 0}
      </Text>
      <Text>/</Text>
      <Text color={Color.GREY_500} font={{ align: 'left', size: 'normal' }}>
        {total_time_used || 0} {getString('cde.hours')}
      </Text>
    </Layout.Horizontal>
  )
}

export const RenderGitspaceName: Renderer<CellProps<TypesGitspaceConfig>> = ({ row }) => {
  const details = row.original
  const { name, ide } = details
  const { getString } = useStrings()
  const { standalone } = useAppContext()
  return standalone ? (
    <Layout.Horizontal spacing={'small'} flex={{ alignItems: 'center', justifyContent: 'start' }}>
      <img src={ide === IDEType.VSCODE ? VSCode : vsCodeWebIcon} height={20} width={20} />
      <Text
        lineClamp={1}
        color={Color.BLACK}
        title={name}
        font={{ align: 'left', size: 'normal', weight: 'semi-bold' }}>
        {name}
      </Text>
    </Layout.Horizontal>
  ) : (
    <Layout.Vertical spacing={'medium'}>
      <Layout.Horizontal spacing={'small'} flex={{ alignItems: 'center', justifyContent: 'start' }}>
        <img src={ide === IDEType.VSCODE ? VSCode : vsCodeWebIcon} height={20} width={20} />
        <Text
          lineClamp={1}
          color={Color.BLACK}
          title={name}
          font={{ align: 'left', size: 'normal', weight: 'semi-bold' }}>
          {name}
        </Text>
      </Layout.Horizontal>

      <Layout.Horizontal spacing={'small'}>
        <Layout.Horizontal spacing={'small'} flex={{ alignItems: 'center' }}>
          <img height={12} width={12} src={RegionIcon} /> <Text font={{ size: 'small' }}>{getString('cde.na')}</Text>
        </Layout.Horizontal>
        <Layout.Horizontal spacing={'small'} flex={{ alignItems: 'center' }}>
          <Cpu height={12} width={12} /> <Text font={{ size: 'small' }}>{getString('cde.na')}</Text>
        </Layout.Horizontal>
      </Layout.Horizontal>
    </Layout.Vertical>
  )
}

export const OwnerAndCreatedAt: Renderer<CellProps<TypesGitspaceConfig>> = ({ row }) => {
  const { created } = row.original
  return (
    <Layout.Vertical spacing="medium" flex={{ alignItems: 'start', justifyContent: 'center' }}>
      <Layout.Horizontal flex={{ alignItems: 'center', justifyContent: 'center' }}>
        <Avatar size="small" name="test" email="test@harness.io" />
        <Text font={{ size: 'small' }} color={Color.GREY_800}>
          test@harness.io
        </Text>
      </Layout.Horizontal>
      <Text font={{ size: 'small' }} color={Color.GREY_800}>
        {moment(created).format('DD MMM, YYYY hh:mma')}
      </Text>
    </Layout.Vertical>
  )
}

export const RenderRepository: Renderer<CellProps<TypesGitspaceConfig>> = ({ row }) => {
  const details = row.original
  const { name, branch, code_repo_url, code_repo_type } = details || {}

  return (
    <Layout.Vertical spacing={'small'}>
      <Layout.Horizontal
        spacing={'small'}
        className={css.repositoryCell}
        flex={{ alignItems: 'center', justifyContent: 'start' }}
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
          window.open(code_repo_url, '_blank')
        }}>
        <Container height={24} width={24}>
          {getIconByRepoType({ repoType: code_repo_type })}
        </Container>
        <Text lineClamp={1} color={Color.PRIMARY_7} title={name} font={{ align: 'left', size: 'normal' }}>
          {name}
        </Text>
        <Text color={Color.PRIMARY_7}>:</Text>
        <Text
          lineClamp={1}
          icon="git-branch"
          iconProps={{ size: 12 }}
          color={Color.PRIMARY_7}
          title={name}
          font={{ align: 'left', size: 'normal' }}>
          {branch}
        </Text>
      </Layout.Horizontal>
    </Layout.Vertical>
  )
}

export const RenderCPUUsage: Renderer<CellProps<TypesGitspaceConfig>> = ({ row }) => {
  const { getString } = useStrings()
  const instance = row.original.instance
  const { resource_usage, total_time_used } = instance || {}

  return getUsageTemplate(getString, <Cpu />, resource_usage as string, total_time_used)
}

export const RenderStorageUsage: Renderer<CellProps<TypesGitspaceConfig>> = ({ row }) => {
  const { getString } = useStrings()
  const instance = row.original.instance
  const { resource_usage, total_time_used } = instance || {}

  return getUsageTemplate(getString, <Db />, resource_usage as string, total_time_used)
}

export const RenderLastActivity: Renderer<CellProps<TypesGitspaceConfig>> = ({ row }) => {
  const { getString } = useStrings()
  const instance = row.original.instance
  const { last_used } = instance || {}
  return (
    <Layout.Horizontal spacing={'small'} flex={{ alignItems: 'center', justifyContent: 'start' }}>
      <Clock />
      {last_used ? (
        <ReactTimeago date={last_used} />
      ) : (
        <Text color={Color.GREY_500} font={{ align: 'left', size: 'normal' }}>
          {getString('cde.na')}
        </Text>
      )}
    </Layout.Horizontal>
  )
}

export const RenderGitspaceStatus: Renderer<CellProps<TypesGitspaceConfig>> = ({ row }) => {
  const { getString } = useStrings()
  const details = row.original
  const { name, state } = details
  const color = getStatusColor(state)
  const customProps =
    state === GitspaceStatus.STARTING
      ? {
          icon: 'loading' as IconName,
          iconProps: { color: Color.PRIMARY_4 }
        }
      : { icon: undefined }
  return (
    <Layout.Horizontal spacing={'small'} flex={{ alignItems: 'center', justifyContent: 'start' }}>
      {state !== GitspaceStatus.STARTING && <Circle height={10} width={10} color={color} fill={color} />}
      <Text
        {...customProps}
        color={Color.BLACK}
        title={name}
        font={{ align: 'left', size: 'normal', weight: 'semi-bold' }}>
        {getStatusText(getString, state)}
      </Text>
    </Layout.Horizontal>
  )
}

export const StartStopButton = ({ state, loading }: { state?: EnumGitspaceStateType; loading?: boolean }) => {
  const { getString } = useStrings()
  return (
    <Layout.Horizontal spacing="small" flex={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      {loading ? <></> : state === GitspaceStatus.RUNNING ? <img src={pause} height={16} width={16} /> : <Play />}
      <Text icon={loading ? 'loading' : undefined}>
        {state === GitspaceStatus.RUNNING
          ? loading
            ? getString('cde.stopingGitspace')
            : getString('cde.details.stopGitspace')
          : loading
          ? getString('cde.startingGitspace')
          : getString('cde.details.startGitspace')}
      </Text>
    </Layout.Horizontal>
  )
}

export const OpenGitspaceButton = ({ ide }: { ide?: EnumIDEType }) => {
  const { getString } = useStrings()

  return (
    <Layout.Horizontal spacing="small" flex={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      {ide === IDEType.VSCODE ? <ModernTv /> : <img src={web} height={16} width={16} />}
      <Text>{ide === IDEType.VSCODE ? getString('cde.ide.openVSCode') : getString('cde.ide.openBrowser')}</Text>
    </Layout.Horizontal>
  )
}

interface ActionMenuProps {
  data: TypesGitspaceConfig
  handleStartGitspace?: () => void
  handleStopGitspace?: () => void
  loading?: boolean
  actionLoading?: boolean
  deleteLoading?: boolean
  deleteGitspace: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => Promise<void>
}

const ActionMenu = ({
  data,
  deleteGitspace,
  handleStartGitspace,
  handleStopGitspace,
  actionLoading,
  deleteLoading
}: ActionMenuProps) => {
  const { getString } = useStrings()
  const { showError } = useToaster()
  const { instance, ide, identifier = '', space_path = '', state } = data
  const { url = '' } = instance || {}
  const history = useHistory()
  const { routes, standalone } = useAppContext()
  const [accountIdentifier, orgIdentifier, projectIdentifier] = space_path?.split('/') || []
  const topBorder = state === GitspaceStatus.RUNNING && !actionLoading ? { top: true } : {}
  const disabledActionButtons = [GitspaceStatus.STARTING, GitspaceStatus.STOPPING].includes(state as GitspaceStatus)

  const { data: tokenData, refetch } = useGetToken({
    accountIdentifier: '',
    projectIdentifier: '',
    orgIdentifier: '',
    gitspace_identifier: '',
    lazy: true
  })

  const [selectedRowUrl, setSelectedRowUrl] = useState<string | undefined>('')

  useEffect(() => {
    if (tokenData) {
      window.open(`${selectedRowUrl}&token=${tokenData?.gitspace_token}`, '_blank')
    }
  }, [tokenData])

  return (
    <Container
      className={css.listContainer}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}>
      <Menu>
        {ide && state == GitspaceStatus.RUNNING && !actionLoading && (
          <MenuItem
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              if (ide === IDEType.VSCODE) {
                const params = standalone ? '?gitness' : ''
                const vscodeExtensionCode = standalone ? 'harness-inc.oss-gitspaces' : 'harness-inc.gitspaces'
                const vsCodeURL = `vscode://${vscodeExtensionCode}/${projectIdentifier}/${identifier}${params}`
                window.open(vsCodeURL, '_blank')
              } else {
                if (standalone) {
                  window.open(url || '', '_blank')
                } else {
                  setSelectedRowUrl(url || '')
                  refetch({
                    pathParams: {
                      accountIdentifier,
                      projectIdentifier,
                      orgIdentifier,
                      gitspace_identifier: identifier || ''
                    }
                  })
                }
              }
            }}
            text={
              <Layout.Horizontal spacing="small">
                <OpenGitspaceButton ide={ide} />
              </Layout.Horizontal>
            }
          />
        )}

        <Container border={{ bottom: true, ...topBorder }}>
          {!disabledActionButtons && (
            <MenuItem
              onClick={async e => {
                try {
                  if (!actionLoading) {
                    e.preventDefault()
                    e.stopPropagation()
                    if (state === GitspaceStatus.RUNNING) {
                      handleStopGitspace?.()
                    } else {
                      handleStartGitspace?.()
                    }
                  }
                } catch (error) {
                  showError(getErrorMessage(error))
                }
              }}
              disabled={disabledActionButtons}
              text={
                <Layout.Horizontal spacing="small">
                  <StartStopButton state={state} loading={actionLoading} />
                </Layout.Horizontal>
              }
            />
          )}

          <MenuItem
            onClick={() => {
              history.push(
                routes.toCDEGitspaceDetail({
                  space: space_path,
                  gitspaceId: identifier
                })
              )
            }}
            text={<Text icon="gitspace">{getString('cde.viewGitspace')}</Text>}
          />
        </Container>

        <MenuItem
          disabled={disabledActionButtons}
          onClick={deleteGitspace as Unknown as () => void}
          text={
            <Layout.Horizontal spacing="small" flex={{ alignItems: 'center', justifyContent: 'flex-start' }}>
              {deleteLoading ? <></> : <img src={deleteIcon} height={16} width={16} />}
              <Text color={Color.RED_450} icon={deleteLoading ? 'loading' : undefined}>
                {getString('cde.deleteGitspace')}
              </Text>
            </Layout.Horizontal>
          }
        />
      </Menu>
    </Container>
  )
}

interface RenderActionsProps extends CellProps<TypesGitspaceConfig> {
  refreshList: () => void
}

export const RenderActions = ({ row, refreshList }: RenderActionsProps) => {
  const { getString } = useStrings()
  const history = useHistory()
  const { routes, standalone } = useAppContext()
  const { showError, showSuccess } = useToaster()
  const details = row.original
  const { identifier, name, space_path } = details

  const { mutate: deleteGitspace, loading: deleteLoading } = useDeleteGitspaces({ gitspaceId: identifier || '' })

  const { mutate: actionGitspace, loading: actionLoading } = useGitspaceActions({ gitspaceId: identifier || '' })

  const [handleStopGitspace, hideModal] = useModalHook(() => {
    return (
      <ConfirmationDialog
        isOpen
        className={css.stopModal}
        titleText={
          <Layout.Vertical flex={{ alignItems: 'self-start' }}>
            <img src={gitspaceIcon} height={44} />
            <Text color={Color.BLACK} font="medium">{`Do you want to stop the Gitspace “${name}” ?`}</Text>
          </Layout.Vertical>
        }
        contentText={
          <Container>
            <Text margin={{ bottom: 'xxlarge' }}>
              By clicking on “Stop Gitspace”, the gitspace will start de-provisioning.
            </Text>
            <Layout.Horizontal width="100%" flex={{ justifyContent: 'space-between', alignItems: 'self-start' }}>
              <Layout.Horizontal spacing="medium">
                <Button
                  onClick={async () => {
                    await actionGitspace({
                      action: GitspaceActionType.STOP
                    })
                    await refreshList()
                    hideModal()
                  }}
                  intent={Intent.PRIMARY}>
                  {getString('cde.details.stopGitspace')}
                </Button>
                <Button
                  onClick={() => {
                    history.push(
                      routes.toCDEGitspaceDetail({
                        space: space_path as string,
                        gitspaceId: identifier as string
                      })
                    )
                  }}
                  icon="gitspace"
                  variation={ButtonVariation.SECONDARY}>
                  {getString('cde.viewGitspace')}
                </Button>
              </Layout.Horizontal>
              <Button variation={ButtonVariation.TERTIARY} onClick={hideModal}>
                {getString('cancel')}
              </Button>
            </Layout.Horizontal>
          </Container>
        }
        onClose={hideModal}
      />
    )
  }, [details, actionGitspace, history, routes])

  const [handleStartGitspace, hideStartModal] = useModalHook(() => {
    return (
      <ConfirmationDialog
        isOpen
        className={css.stopModal}
        titleText={
          <Layout.Vertical flex={{ alignItems: 'self-start' }}>
            <img src={gitspaceIcon} height={44} />
            <Text color={Color.BLACK} font="medium">{`Do you want to start the Gitspace “${name}” ?`}</Text>
          </Layout.Vertical>
        }
        contentText={
          <Container>
            <Text margin={{ bottom: 'xxlarge' }}>
              By clicking on “Start Gitspace”, the gitspace will start provisioning.
            </Text>
            <Layout.Horizontal width="100%" flex={{ justifyContent: 'space-between', alignItems: 'self-start' }}>
              <Layout.Horizontal spacing="medium">
                <Button
                  onClick={() => {
                    history.push(
                      `${routes.toCDEGitspaceDetail({
                        space: space_path as string,
                        gitspaceId: identifier as string
                      })}?redirectFrom=login`
                    )
                  }}
                  intent={Intent.PRIMARY}>
                  {getString('cde.details.startGitspace')}
                </Button>
                <Button
                  onClick={() => {
                    history.push(
                      routes.toCDEGitspaceDetail({
                        space: space_path as string,
                        gitspaceId: identifier as string
                      })
                    )
                  }}
                  icon="gitspace"
                  variation={ButtonVariation.SECONDARY}>
                  {getString('cde.viewGitspace')}
                </Button>
              </Layout.Horizontal>
              <Button variation={ButtonVariation.TERTIARY} onClick={hideStartModal}>
                {getString('cancel')}
              </Button>
            </Layout.Horizontal>
          </Container>
        }
        onClose={hideStartModal}
      />
    )
  }, [details, actionGitspace, history, routes])

  const confirmDelete = useConfirmAct()

  const handleDelete = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    confirmDelete({
      intent: 'danger',
      title: getString('cde.deleteGitspaceTitle', { name: name }),
      message: getString('cde.deleteGitspaceText'),
      confirmText: getString('delete'),
      action: async () => {
        try {
          e.preventDefault()
          e.stopPropagation()
          await deleteGitspace(standalone ? {} : identifier || '')
          showSuccess(getString('cde.deleteSuccess'))
          await refreshList()
        } catch (exception) {
          showError(getErrorMessage(exception))
        }
      }
    })
  }

  return (
    <Text
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
      style={{ cursor: 'pointer' }}
      icon={deleteLoading || false ? 'steps-spinner' : 'Options'}
      tooltip={
        <ActionMenu
          data={details}
          actionLoading={actionLoading}
          deleteLoading={deleteLoading}
          deleteGitspace={handleDelete}
          handleStartGitspace={handleStartGitspace}
          handleStopGitspace={handleStopGitspace}
        />
      }
      tooltipProps={{
        interactionKind: PopoverInteractionKind.HOVER,
        position: Position.BOTTOM_RIGHT,
        usePortal: true,
        popoverClassName: css.popover
      }}
    />
  )
}

export const ListGitspaces = ({ data, refreshList }: { data: TypesGitspaceConfig[]; refreshList: () => void }) => {
  const history = useHistory()
  const { getString } = useStrings()
  const { routes, standalone } = useAppContext()

  const [currentRow, setCurrentRow] = useState<TypesGitspaceConfig>()

  const [handleStartGitspace, hideStartModal] = useModalHook(() => {
    return (
      <ConfirmationDialog
        isOpen
        className={css.stopModal}
        onClosed={() => setCurrentRow(undefined)}
        titleText={
          <Layout.Vertical flex={{ alignItems: 'self-start' }}>
            <img src={gitspaceIcon} height={44} />
            <Text color={Color.BLACK} font="medium">{`Do you want to start the Gitspace “${currentRow?.name}” ?`}</Text>
          </Layout.Vertical>
        }
        contentText={
          <Container>
            <Text margin={{ bottom: 'xxlarge' }}>
              By clicking on “Start Gitspace”, the gitspace will start provisioning.
            </Text>
            <Layout.Horizontal width="100%" flex={{ justifyContent: 'space-between', alignItems: 'self-start' }}>
              <Layout.Horizontal spacing="medium">
                <Button
                  onClick={() => {
                    history.push(
                      `${routes.toCDEGitspaceDetail({
                        space: currentRow?.space_path as string,
                        gitspaceId: currentRow?.identifier as string
                      })}?redirectFrom=login`
                    )
                  }}
                  intent={Intent.PRIMARY}>
                  {getString('cde.details.startGitspace')}
                </Button>
                <Button
                  onClick={() => {
                    history.push(
                      routes.toCDEGitspaceDetail({
                        space: currentRow?.space_path as string,
                        gitspaceId: currentRow?.identifier as string
                      })
                    )
                  }}
                  icon="gitspace"
                  variation={ButtonVariation.SECONDARY}>
                  {getString('cde.viewGitspace')}
                </Button>
              </Layout.Horizontal>
              <Button
                variation={ButtonVariation.TERTIARY}
                onClick={() => {
                  hideStartModal()
                  setCurrentRow(undefined)
                }}>
                {getString('cancel')}
              </Button>
            </Layout.Horizontal>
          </Container>
        }
        onClose={hideStartModal}
      />
    )
  }, [currentRow, history, routes])

  useEffect(() => {
    if (currentRow) {
      setTimeout(() => {
        handleStartGitspace()
      }, 100)
    }
  }, [currentRow])

  const extraColumns = standalone
    ? []
    : [
        {
          id: 'userid',
          Header: getString('cde.listing.ownerAndCreated'),
          Cell: OwnerAndCreatedAt
        }
      ]

  const { data: tokenData, refetch } = useGetToken({
    accountIdentifier: '',
    projectIdentifier: '',
    orgIdentifier: '',
    gitspace_identifier: '',
    lazy: true
  })

  const [selectedRowUrl, setSelectedRowUrl] = useState<string | undefined>('')

  useEffect(() => {
    if (tokenData) {
      window.open(`${selectedRowUrl}&token=${tokenData?.gitspace_token}`, '_blank')
    }
  }, [tokenData])

  return (
    <Container>
      {data && (
        <TableV2<TypesGitspaceConfig>
          className={standalone ? css.table : css.cdeTable}
          onRowClick={row => {
            const [accountIdentifier, orgIdentifier, projectIdentifier] = row?.space_path?.split('/') || []

            if (row?.state === GitspaceStatus.RUNNING) {
              if (row?.ide === IDEType.VSCODE) {
                const params = standalone ? '?gitness' : ''
                const vscodeExtensionCode = standalone ? 'harness-inc.oss-gitspaces' : 'harness-inc.gitspaces'
                const vsCodeURL = `vscode://${vscodeExtensionCode}/${projectIdentifier}/${row?.identifier}${params}`
                window.open(vsCodeURL, '_blank')
              } else {
                if (standalone) {
                  window.open(row?.instance?.url || '', '_blank')
                } else {
                  setSelectedRowUrl(row.instance?.url || '')
                  refetch({
                    pathParams: {
                      accountIdentifier,
                      projectIdentifier,
                      orgIdentifier,
                      gitspace_identifier: row.identifier || ''
                    }
                  })
                }
              }
            } else if (row?.state === GitspaceStatus.STOPPED) {
              setCurrentRow(row)
            } else {
              history.push(
                routes.toCDEGitspaceDetail({
                  space: row?.space_path as string,
                  gitspaceId: row?.identifier as string
                })
              )
            }
          }}
          columns={[
            {
              id: 'gitspaces',
              Header: getString('cde.gitspaces'),
              Cell: RenderGitspaceName
            },
            {
              id: 'repository',
              Header: getString('cde.repositoryAndBranch'),
              Cell: RenderRepository
            },
            {
              id: 'status',
              Header: getString('cde.status'),
              Cell: RenderGitspaceStatus
            },
            {
              id: 'lastactivity',
              Header: getString('cde.lastActivated'),
              Cell: RenderLastActivity
            },
            ...extraColumns,
            {
              id: 'action',
              Cell: (props: RenderActionsProps) => <RenderActions {...props} refreshList={refreshList} />
            }
          ]}
          data={data}
        />
      )}
    </Container>
  )
}
