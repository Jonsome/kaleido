import React from 'react'
import { Redirect, Router, Switch, withRouter, Route } from 'react-router-dom'

import { Container, Content } from './elements'

import { Sandbox } from './Sandbox'

const RoutesComponent: React.FC = () => {
  return (
    <Container>
      <Content>
        <Switch>
          <Route component={Sandbox}></Route>
        </Switch>
      </Content>
    </Container>
  )
}

export default RoutesComponent