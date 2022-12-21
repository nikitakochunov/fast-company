import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './components/layouts/login'
import Main from './components/layouts/main'
import NavBar from './components/navBar'
import Users from './components/layouts/users'

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  )
}

export default App
