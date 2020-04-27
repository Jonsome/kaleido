import React, { useEffect, useRef, useState } from 'react'

import styled, { ThemeProvider } from 'styled-components'

import { Container } from './elements'

const StatusBar = styled.div`
  a {
    color: inherit;
  }
`

const ContentSplit = () => {
  return (
      <Container style={{ lineHeight: 'initial', backgroundColor: 'transparent' }} className="monaco-workbench">
      </Container>
  )
}

export default ContentSplit
