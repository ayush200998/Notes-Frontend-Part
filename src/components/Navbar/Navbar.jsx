import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import useStyles from './styles'

const Navbar = ({ header }) => {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position='static' color='primary'>
            <Typography variant='h5'>{header}</Typography>
        </AppBar>
    )
}

export default Navbar
