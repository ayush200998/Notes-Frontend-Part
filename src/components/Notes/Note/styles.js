import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    noteContainer:{
        margin: '20px 0',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: '#301934',
        fontWeight: 500,
        marginBottom: '10px',
        borderBottom: '2px solid gray',
    },
    body:{
        color: '#434649',
    },
    buttonContainer:{
        width: '100%',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'space-between'
    },
}))