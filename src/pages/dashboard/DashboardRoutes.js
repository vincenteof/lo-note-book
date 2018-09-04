import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import RecentNotes from '../recentNotes'
import CreateNote from '../createNote'

const DashboardRoutes = () => (
    <Switch>
        <Route path="/dashboard" exact render={() => <Redirect to="/dashboard/recent" push/>} />
        <Route path="/dashboard/recent" component={RecentNotes} />
        <Route path="/dashboard/create" component={CreateNote} />
    </Switch>
)


export default DashboardRoutes