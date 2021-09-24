import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        padding: '20px 20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textField: {
        margin: '10px 0',
    },
    buttonDiv:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    }
}))