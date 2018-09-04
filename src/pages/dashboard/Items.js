import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import CreateIcon from '@material-ui/icons/Create'



const items = [
    {text: '近期笔记', icon: <DashboardIcon />, path: '/dashboard/recent'},
    {text: '新建', icon: <CreateIcon />, path: '/dashboard/create'}
]


class Items extends React.Component {
    handleClickHOF = (path, key) => (() => {
        const {history, onItemClick} = this.props
        onItemClick(key)
        history.push(path)
    })

    render() {
        const {getSelected} = this.props

        return (
            <React.Fragment>
                {items.map(({text, icon, path}, i) => {
                    return (
                        <ListItem
                            key={i}
                            button
                            onClick={this.handleClickHOF(path, i)}
                            selected={getSelected() === i}
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

Items.propTypes = {
    onItemClick: PropTypes.func.isRequired,
    getSelected: PropTypes.func.isRequired
}

export default withRouter(Items)
