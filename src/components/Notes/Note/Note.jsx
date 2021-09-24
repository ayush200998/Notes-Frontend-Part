import React from 'react'
import { Button, Paper, Typography } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import useStyles from './styles'
import { useHistory } from 'react-router-dom'
import { removeNote } from '../../../actions/notes'
import { useDispatch } from 'react-redux'

const Note = ({ note, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const updateNote = () => {
        setCurrentId(note._id)
        history.push('/create')
    }

    const deleteNode = () => {
        dispatch(removeNote(note._id))
    }

    return (
        <Paper className={classes.noteContainer} elevation={3}>
            <Typography className={classes.title} variant='h5'>{note?.title}</Typography>
            <Typography className={classes.body} variant='h6'>{note?.body}</Typography>
            <div className={classes.buttonContainer}>
                <Button onClick={updateNote} endIcon={<Edit />} variant='contained' color='primary' />

                <Button onClick={deleteNode} endIcon={<Delete />} variant='contained' color='secondary' />
            </div>
        </Paper> 
    )
}

export default Note
