import { IDerive, IState } from 'overmind'
import { AsyncAction } from '.'

export const withLoadApp = <T>(continueAction?: AsyncAction<T>): AsyncAction<T> => async (context, value) => {
  const { effects, state, actions } = context

  if (state.hasLoadedApp && continueAction) {
    await continueAction(context, value)
    return
  }
  if (state.hasLoadedApp) {
    return
  }

  state.hasLoadedApp = true
  state.isAuthenticating = false
}
