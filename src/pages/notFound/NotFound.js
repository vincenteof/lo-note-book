import React, {Component} from 'react';
import PropTypes from 'prop-types'

import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import westWorldPic from '../../static/images/west-world.jpg'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    outer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
}

class NotFound extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.outer}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={westWorldPic}
                            title="West World"
                        />
                        <CardContent>
                            {/*<Typography gutterBottom variant="display2">*/}
                                {/*Wrong World*/}
                            {/*</Typography>*/}
                            <Typography component="p">
                                HTTP 404……<br />
                                这是一个错误的世界. 你需要找到门(find the door)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            回到首页
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NotFound)