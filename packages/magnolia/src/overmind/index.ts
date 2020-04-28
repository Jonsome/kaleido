import { IAction, IConfig, IDerive, IOnInitialize, IOperator, IReaction, IState, Overmind } from 'overmind'
import { createHook } from 'overmind-react'
import { merge, namespaced } from 'overmind/config'

import * as actions from './actions'
import * as effects from './effects'
import * as preferences from './namespaces/preferences'
import * as workspace from './namespaces/workspace'
import * as editor from './namespaces/editor'

import { onInitialize } from './onInitialize'
import { state } from './state'

export const config = merge(
  {
    onInitialize,
    effects,
    state,
    actions,
  },
  namespaced({
    preferences,
    workspace,
    editor
  })
)

export interface Config extends IConfig<typeof config> {}

export interface OnInitialize extends IOnInitialize<Config> {}

export interface Action<Input = void, Output = void> extends IAction<Config, Input, Output> {}

export interface AsyncAction<Input = void, Output = void> extends IAction<Config, Input, Promise<Output>> {}

export interface Derive<Parent extends IState, Output> extends IDerive<Config, Parent, Output> {}

export const useOvermind = createHook<typeof config>()

export const Observer: React.FC<{
  children: <T>(overmind: { state: Overmind<Config>['state']; actions: Overmind<Config>['actions'] }) => T
}> = ({ children }) => {
  const overmind = useOvermind()

  return children(overmind)
}
