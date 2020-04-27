import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import Editor from './Editor'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

export const Sandbox: React.FC<Props> = ({ match }) => {
  return (
    <>
      <Helmet>
        <title>{'Loading...'} - CodeSandbox</title>
      </Helmet>
      <Editor />
    </>
  )
}
