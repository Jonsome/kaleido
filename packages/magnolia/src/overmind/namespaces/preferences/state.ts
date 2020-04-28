import { Settings } from '../../../types'
import { Derive } from '../../.'

type State = {
  settings: Settings
  isLoadingPaymentDetails: boolean
  hideNavigation: boolean
  itemId: string
  showEditor: boolean
  showModal: boolean
  showPreview: boolean
  showDevtools: boolean
  paymentDetailError: string | null
  runOnClick: boolean
}

export const state: State = {
  settings: {
    autoResize: true,
    enableEslint: true,
    forceRefresh: false,
    prettifyOnSaveEnabled: true,
    zenMode: false,
    autoCompleteEnabled: true,
    livePreviewEnabled: true,
    lintEnabled: true,
    instantPreviewEnabled: false,
    fontSize: 14,
    fontFamily: 'Dank Mono',
    lineHeight: 1.5,
    clearConsoleEnabled: true,
    autoDownloadTypes: true,
    keybindings: [],
    newPackagerExperiment: false,
    prettierConfig: {
      fluid: false,
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: false,
      trailingComma: 'none',
      bracketSpacing: true,
      jsxBracketSameLine: false,
    },
    jsxBracketSameLine: false,
    // TODO: Should these be her?
    printWidth: 80,
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false,
    vimMode: false,
    // Windows has problems with calculating characters widths when ligatures
    // are disabled, however there is a weird character when you have 'fi' in
    // Menlo. So a temporary fix is to only enable this for Windows.
    enableLigatures: navigator.platform.indexOf('Win') > -1,
    customVSCodeTheme: null,
    manualCustomVSCodeTheme: null,
  },
  hideNavigation: false,
  showModal: false,
  isLoadingPaymentDetails: true,
  paymentDetailError: null,
  itemId: 'appearance',
  showEditor: true,
  showPreview: true,
  showDevtools: false,
  runOnClick: false,
}
