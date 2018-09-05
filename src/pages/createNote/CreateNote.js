import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import SimpleNoteDialog from './SimpleNoteDialog'

const styles = theme => ({
})

class CreateNote extends React.Component {
    render() {
        const {classes} = this.props

        return (
            <div>
                <SimpleNoteDialog />
            </div>
        )
    }
}

CreateNote.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CreateNote)