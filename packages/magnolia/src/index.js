import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from 'react-router-dom'
import history from './utils/history'

import { ApolloProvider } from 'react-apollo'
import { client } from './graphql/client'

import App from './app'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.body
)
