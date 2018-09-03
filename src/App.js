import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './pages/login'
import NotFound from './pages/notFound'
import Dashboard from './pages/dashboard'


const Main = () => (
    <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" push/>} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
    </Switch>
)

const App = () => (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
)

export default App
