import React from 'react'

import { withTheme } from 'styled-components'

import { ThemeProvider } from '../../../../components'

import { useOvermind } from '../../../../overmind'

import { ContactContainer, Container, ItemTitle, VersionContainer } from './elements'

import { COMMENTS, REDESIGNED_SIDEBAR } from '../../../../utils/feature-flags'

const NEW_SIDEBAR = REDESIGNED_SIDEBAR === 'true'
const WorkspaceWrapper = NEW_SIDEBAR ? ThemeProvider : React.Fragment

export const WorkspaceComponent = (theme: any) => {
  const { state } = useOvermind()

  return (
    <Container REDESIGNED_SIDEBAR={NEW_SIDEBAR}>
      <WorkspaceWrapper theme={theme.vscodeTheme}>
        <div style={{ flex: 1, overflowY: 'auto', fontFamily: 'Inter, Roboto, sans-serif' }}>
        </div>
      </WorkspaceWrapper>
    </Container>
  )
}

export const Workspace = withTheme(WorkspaceComponent)
