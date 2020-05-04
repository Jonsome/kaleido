import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from 'react-router-dom'
import history from './utils/history'

import { ApolloProvider } from 'react-apollo'
import { client } from './graphql/client'

import { createOvermind } from 'overmind'
import { Provider as ActualOvermindProvider } from 'overmind-react'
import { config } from './overmind'

import App from './pages'

const overmind = createOvermind(config, {
  delimiter: ' ',
  devtools: false,
  name: 'Kaleido - Chrome',
  logProxies: true,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ActualOvermindProvider value={overmind}>
      <Router history={history}>
        <App />
      </Router>
    </ActualOvermindProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
