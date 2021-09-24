import React, { useState, useEffect } from 'react'
import {Container, Paper, TextField, Button } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
import useStyles from './styles'
import { create, update } from '../../actions/notes'
import { useHistory } from 'react-router'
import  { useDispatch, useSelector } from 'react-redux'

const CreateNote = ({ currentId }) => {
    const classes = useStyles()
    const note = useSelector(state => state.find((n) => n._id === currentId))
    
    const [formData, setFormData] = useState({
        title: '',
        body:'',
    })
    const history = useHistory()
    const dispatch = useDispatch()

    const createOrUpdateNote = (e) => {
        e.preventDefault()

        if(formData.title && formData.body){
            if(currentId){
                dispatch(update(currentId, formData))    
            }else{
                dispatch(create(formData))
            }
            history.push('/')
        }
    }

    useEffect(() => {
        if(note)
            setFormData(note)
    },[note])

    return (
        <Container>
            <Navbar header='Create your Note by providing the details.' />

            <Paper className={classes.container} elevation={3}>
                <form onSubmit={createOrUpdateNote} >
                    <TextField
                        required 
                        className={classes.textField}
                        variant='outlined' 
                        label='Title'
                        fullWidth
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        value={formData.title} 
                    />
                    <TextField 
                        required 
                        className={classes.textField} 
                        variant='outlined' 
                        label='Body'
                        fullWidth
                        onChange={(e) => setFormData({...formData, body: e.target.value})}
                        value={formData.body} 
                    />

                    <div className={classes.buttonDiv}>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                        >
                            {currentId ? 'Update': 'Create'}
                        </Button>
                    </div>
                </form>
                
                
            </Paper>
        </Container>
    )
}

export default CreateNote
