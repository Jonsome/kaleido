import React from 'react'

export type PrettierConfig = {
  fluid: boolean
  printWidth: number
  tabWidth: number
  useTabs: boolean
  semi: boolean
  singleQuote: boolean
  trailingComma: string
  bracketSpacing: boolean
  jsxBracketSameLine: boolean
}

export type Settings = {
  autoResize: boolean
  enableEslint: boolean
  forceRefresh: boolean
  lineHeight: number
  autoCompleteEnabled: boolean | undefined
  vimMode: boolean | undefined
  livePreviewEnabled: boolean | undefined
  prettifyOnSaveEnabled: boolean | undefined
  lintEnabled: boolean | undefined
  instantPreviewEnabled: boolean | undefined
  fontSize: number | undefined
  fontFamily: string | undefined
  clearConsoleEnabled: boolean | undefined
  prettierConfig: PrettierConfig
  autoDownloadTypes: boolean | undefined
  newPackagerExperiment: boolean | undefined
  zenMode: boolean | undefined
  keybindings: any[]
  jsxBracketSameLine: boolean
  printWidth: number
  semi: boolean
  singleQuote: boolean
  tabWidth: number
  trailingComma: string
  useTabs: boolean
  enableLigatures: boolean
  customVSCodeTheme: string | null
  manualCustomVSCodeTheme: string | null
}
