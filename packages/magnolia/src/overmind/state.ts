import { Derive } from '.'

type State = {
  isPatron?: Derive<State, boolean>
  isFirstVisit: boolean
  isLoggedIn?: Derive<State, boolean>
  hasLogIn?: Derive<State, boolean>
  popularSandboxes: null
  hasLoadedApp: boolean
  jwt: string | null
  isAuthenticating: boolean
  authToken: string | null
  error: string | null
  contributors: string[]
  user: null
  connected: boolean
  notifications: Notification[]
  isLoadingCLI: boolean
  isLoadingGithub: boolean
  isLoadingZeit: boolean
  contextMenu: {
    show: boolean
    items: string[]
    x: number
    y: number
  }
  currentModal: string | null
  currentModalMessage: string | null
  uploadedFiles: null
  maxStorage: number
  usedStorage: number
  updateStatus: string | null
  isContributor?: Derive<State, (username: String) => boolean>
}

export const state: State = {
  isFirstVisit: false,
  popularSandboxes: null,
  hasLoadedApp: false,
  jwt: null,
  isAuthenticating: true,
  authToken: null,
  error: null,
  user: null,
  connected: true,
  notifications: [],
  contributors: [],
  isLoadingZeit: false,
  isLoadingCLI: false,
  isLoadingGithub: false,
  contextMenu: {
    show: false,
    items: [],
    x: 0,
    y: 0,
  },
  currentModal: null,
  currentModalMessage: null,
  uploadedFiles: null,
  maxStorage: 0,
  usedStorage: 0,
  updateStatus: null,
}
