import React from 'react';
import './Login.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(/bg.png)',
        backgroundRepeat: 'no-repeat', 
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    bgColor: {
        backgroundColor: '#f6f7ff',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    rootTwo: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    bar: {
        margin: theme.spacing(8),
        textAlign: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={8} className={classes.image} />
        <Grid item xs={12} sm={4} md={4} component={Paper} className={classes.bgColor} elevation={6} square>
            <div className={classes.bar}>
                <div className="tabBar">
                    <div className="underlineONe">
                        <a href="/">LOGIN</a>
                    </div>
                    <div className="underlineTwo">
                        <a href="/">NEW USER</a>
                    </div>
                </div>
                <Typography variant="h3" gutterBottom>
                    <Box m={1}>
                        WelCome to Dashboard
                    </Box>
                </Typography>
                <button className="btn"> <img className="img" src="/googleIcon2.png" align="" alt="GoogleIcon"/> Sign In With Google</button>
            </div>
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                <Box mt={4}>
                                    <Button variant="contained" color="primary">
                                    LOGIN
                                    </Button>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Box mt={4}>
                                <Link component="button" href="#" variant="body2">
                                Forget Password
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </div>
        </Grid>
    </Grid>
    )
}

export default Login;