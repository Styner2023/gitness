export interface SCMPathProps {
  space?: string
  repoName?: string
  gitRef?: string
  resourcePath?: string
}

export interface SCMQueryProps {
  query?: string
}

export const pathProps: Readonly<Required<SCMPathProps>> = {
  space: ':space',
  repoName: ':repoName',
  gitRef: ':gitRef*',
  resourcePath: ':resourcePath*'
}

export interface SCMRoutes {
  toSignIn: () => string
  toSignUp: () => string
  toSCMRepositoriesListing: ({ space }: { space: string }) => string
  toSCMRepository: ({
    repoPath,
    gitRef,
    resourcePath
  }: {
    repoPath: string
    gitRef?: string
    resourcePath?: string
  }) => string
}

export const routes: SCMRoutes = {
  toSignIn: (): string => '/signin',
  toSignUp: (): string => '/signup',
  toSCMRepositoriesListing: ({ space }: { space: string }) => `/${space}`,
  toSCMRepository: ({ repoPath, gitRef, resourcePath }: { repoPath: string; gitRef?: string; resourcePath?: string }) =>
    `/${repoPath}/${gitRef ? '/' + gitRef : ''}${resourcePath ? '/~/' + resourcePath : ''}`
}
