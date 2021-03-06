import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'mobx-react'

import RootStore from './stores'
import Login from './pages/login'
import NotFound from './pages/notFound'
import Dashboard from './pages/dashboard'


// prob:
// 1. label of rich text editor
// 2. avatar
// 3. motion for transaction
// 4. auth
// 5. register
// 6. connect to backend
const Main = () => (
    <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" push/>} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
    </Switch>
)

const App = () => (
    <Provider rootStore={new RootStore()}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
)

export default App
