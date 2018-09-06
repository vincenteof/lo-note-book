import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const styles = theme => ({
    button: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 5
    }
})

class SimpleNoteDialog extends React.Component {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }


    render() {
        const {classes} = this.props

        return (
            <div>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleClickOpen}>
                    简易笔记
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">生成简易笔记</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            简易笔记用于记录你的想法或灵感，请输入简易笔记内容
                        </DialogContentText>
                        <TextField
                            autoFocus
                            multiline
                            rows={3}
                            margin="dense"
                            id="name"
                            label="请输入笔记内容"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            取消
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            生成
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

SimpleNoteDialog.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleNoteDialog)