import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container:{
        display: 'flex',
        flexDirection: 'column',

        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
        },
    },
    createNote: {
        width: '160px',
        display: 'flex',
        padding: '10px 0',
        margin: '10px 0',
    },
    gridContainer:{
        display: 'flex',
        
        [theme.breakpoints.down('sm')] :{
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
}))