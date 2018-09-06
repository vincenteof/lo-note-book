import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import SimpleNoteDialog from './SimpleNoteDialog'
import {RichTextEditor}from '../../components'

const styles = theme => ({
})

class CreateNote extends React.Component {
    render() {
        const {classes} = this.props

        return (
            <div>
                <SimpleNoteDialog />
                <RichTextEditor />
            </div>
        )
    }
}

CreateNote.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CreateNote)