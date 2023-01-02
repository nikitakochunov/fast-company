import React from 'react'
import Users from './layouts/users'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Main} />
    </Switch>
  )
}

export default App
