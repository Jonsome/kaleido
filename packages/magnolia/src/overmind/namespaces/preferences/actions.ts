import { Action, AsyncAction } from '../../.'

export const viewModeChanged: Action<{
  showEditor: boolean
  showPreview: boolean
}> = ({ state }, { showEditor, showPreview }) => {
  state.preferences.showEditor = showEditor
  state.preferences.showPreview = showPreview
}

export const devtoolsToggled: Action = ({ state }) => {
  state.preferences.showDevtools = !state.preferences.showDevtools
}

export const setDevtoolsOpen: Action<boolean> = ({ state }, isOpen) => {
  state.preferences.showDevtools = isOpen
}
