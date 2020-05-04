import React, { useEffect, useRef, useState } from 'react'
import SplitPane from 'react-split-pane'

import styled, { ThemeProvider } from 'styled-components'

import { useOvermind } from '../../../overmind'

import { Container } from './elements'

const STATUS_BAR_SIZE = 22

const StatusBar = styled.div`
  a {
    color: inherit;
  }
`

const theme = {}

const ContentSplit = () => {
  const { state, actions, effects, reaction } = useOvermind()
  const hideNavigation = state.preferences.settings.zenMode && state.workspace.workspaceHidden

  const { statusBar } = state.editor

  const topOffset = state.preferences.settings.zenMode ? 0 : 3 * 16;
  const bottomOffset = STATUS_BAR_SIZE;
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ lineHeight: 'initial', backgroundColor: 'transparent' }} className="monaco-workbench">
        <div
          style={{
            position: 'fixed',
            left: hideNavigation ? 0 : 'calc(3.5rem + 1px)',
            top: topOffset,
            right: 0,
            bottom: bottomOffset,
            height: statusBar ? 'auto' : 'calc(100% - 3.5rem)',
            zIndex: 9,
          }}
        >
          <SplitPane split="vertical" defaultSize={17*16} minSize={0}></SplitPane>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default ContentSplit
