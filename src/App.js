import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Inbox from './components/Inbox'

import LoginFrom from './components/LoginFrom'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginFrom} />
        <ProtectedRoute exact path="/" component={Inbox} />

      </Switch>
  )
}
}

export default App;
