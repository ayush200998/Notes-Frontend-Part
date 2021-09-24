import React, { useEffect } from 'react'
import { Button, Container, Grid, Typography, Grow } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import useStyles from './styles'
import Note from './Note/Note'
import { getNotes } from '../../actions/notes'

const Notes = ({ currentId, setCurrentId }) => {
    const notes = useSelector(state => state)
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const addNote = () => {
        history.push('/create')
    }

    useEffect(() => {
        dispatch(getNotes())
    },[dispatch])

    return (
        <Grow in>
            <Container className={classes.container}>
                <Navbar header='Welcome to Notes' />
                
                <Button
                    className={classes.createNote} 
                    variant='contained'
                    endIcon={<Add />}
                    onClick={addNote} 
                    color='primary' 
                >
                    Add a Note
                </Button>

                <Grid className={classes.gridContainer} container spacing={3} >
                    {notes.length > 0 ? notes.map((note) => (
                        <Grid key={note.title} item xl={4} lg={4} md={6} sm={12}>
                            <Note currentId={currentId} setCurrentId={setCurrentId} note={note} />
                        </Grid>
                            )) :
                        <Typography style={{marginTop: '20px'}} variant='h4'>
                            Click Add Notes for adding a note to your List.
                        </Typography>
                    }
                </Grid>
                
                
            </Container>
        </Grow>
    )
}

export default Notes
