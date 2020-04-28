import { Action, AsyncAction } from '../../.'

export const tagChanged: Action<string> = ({ state }, tagName) => {
  state.workspace.tags.tagName = tagName
}
