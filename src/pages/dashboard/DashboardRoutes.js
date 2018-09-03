import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import RecentNotes from '../recentNotes'

const DashboardRoutes = () => (
    <Switch>
        <Route path="/dashboard" exact render={() => <Redirect to="/dashboard/recent" push/>} />
        <Route path="/dashboard/recent" component={RecentNotes} />
    </Switch>
)

export default DashboardRoutes