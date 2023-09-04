import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './component/Home'
import Login from './component/Login'
import NotFound from './component/NotFound'
import ProtectedRoute from './component/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
