import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const recentNotes = [
    {time: '2018-12-14 00:00', title: 'Test For The Title1...', content: ' Lizards are a widespread group of...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title2...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title3...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title4...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title5...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title6...', content: ' Freedom or Death...'},
    {time: '2018-12-14 00:00', title: 'Test For The Title7...', content: ' Freedom or Death...'}
]

const styles = theme => ({
    outer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        marginTop: 10
    },
    card: {
        width: 300,
        margin: 10
    },
    title: {
        marginBottom: 30,
    },
    area: {
        width: 300,
        height: 140,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
})

class RecentNotes extends React.Component {
    render() {
        const {classes} = this.props

        return (
            <div>
                <div>
                    <TextField
                        id="keyword"
                        label="关键字"
                        className={classes.textField}
                        value={undefined}
                        onChange={undefined}
                        margin="normal"
                    />
                </div>
                <div className={classes.outer}>
                    {recentNotes.map(({time, title, content}, index) => (
                        <Card key={index} className={classes.card}>
                            <CardActionArea className={classes.area}>
                                <CardContent>
                                    <Typography className={classes.title} gutterBottom variant="title">
                                        {title}
                                    </Typography>
                                    <Typography component="p">
                                        {content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    分享
                                </Button>
                                <Button size="small" color="primary">
                                    删除
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>

        )
    }
}

RecentNotes.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RecentNotes)