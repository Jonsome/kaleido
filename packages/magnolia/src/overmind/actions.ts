import { NotificationType, convertTypeToStatus } from '../notifications'

import { withLoadApp } from './factories'
import { Action, AsyncAction } from '.'


export const sandboxPageMounted: AsyncAction = withLoadApp()

export const searchMounted: AsyncAction = withLoadApp()

export const codesadboxMounted: AsyncAction = withLoadApp()

export const genericPageMounted: AsyncAction = withLoadApp()

export const cliInstructionsMounted: AsyncAction = withLoadApp()

export const githubPageMounted: AsyncAction = withLoadApp()