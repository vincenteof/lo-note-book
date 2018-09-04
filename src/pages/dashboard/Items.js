import React from 'react'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import CreateIcon from '@material-ui/icons/Create'



const items = [
    {text: '近期笔记', icon: <DashboardIcon />, path: '/dashboard/recent'},
    {text: '新建', icon: <CreateIcon />, path: '/dashboard/create'}
]


@inject('rootStore')
@observer
class Items extends React.Component {
    handleClickHOF = (path, key) => (() => {
        const {history, rootStore} = this.props
        rootStore.dashboardStore.setSelectedItemKey(key)
        history.push(path)
    })

    render() {
        const {rootStore} = this.props

        return (
            <React.Fragment>
                {items.map(({text, icon, path}, i) => {
                    return (
                        <ListItem
                            key={i}
                            button
                            onClick={this.handleClickHOF(path, i)}
                            selected={rootStore.dashboardStore.selectedItemKey === i}
                        >
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default withRouter(Items)
