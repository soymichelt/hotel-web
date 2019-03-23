import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import TextField from '@material-ui/core/TextField'

import blueGrey from '@material-ui/core/colors/blueGrey'

import './login.css'

const styles = (theme) => ({
    signinPage: {
        height: '100%!important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    signinContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: 345,
        minHeight: 345,
        padding: 24,
    },
    logo: {
        width: 216,
        height: 38,
    },
    separator: {
        marginTop: 24,
    },
    textField: {
        width: '100%',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    signinButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundColor: '#d5d5d5',
        color: '#fff',
    },
    changePassword: {
        color: blueGrey[800],
        minHeight: 40,
    },
});

let SigninForm = ({ classes, isUserAuth, onClickAuth, onEmailChange, email, onPasswordChange, password }) => {

    if(!isUserAuth) {

        return (

            <section
                className={
                    classnames(
                        'signin-page',
                        classes.signinPage,
                    )
                }
            >
                <Paper
                    className={classes.signinContainer}
                    elevation={1}
                >
                    <Link
                        to={'/'}
                    >
                        <h2>Hotel Masagua</h2>
                    </Link>
                    <section
                        className={classes.separator}
                    >
                        
                        <TextField
                            id="email"
                            label="Correo electrónico"
                            className={classes.textField}
                            value={email}
                            onChange={onEmailChange}
                            margin="normal"
                        />

                        <TextField
                            id="standard-name"
                            label="Contraseña"
                            type={'password'}
                            className={classes.textField}
                            value={password}
                            onChange={onPasswordChange}
                            margin="normal"
                        />

                        <section
                            className={
                                classnames(
                                    classes.separator,
                                    classes.buttonContainer,
                                )
                            }
                        >
                            <Button
                                variant="contained"
                                color="inherit"
                                className={classes.signinButton}
                                onClick={onClickAuth}
                            >
                                Entrar
                                <KeyboardArrowRightIcon className={classes.rightIcon} />
                            </Button>
                            <Button
                                className={classes.changePassword}
                                variant='text'
                                component={Link}
                                to={'/Account/ForgivePassword'}
                            >
                                ¿No puedes entrar?
                            </Button>
                        </section>

                    </section>
                </Paper>
            </section>

        );
    }
    else {
        return (
            <Redirect
                to={'/'}
            />
        );
    }

};

SigninForm.propTypes = {
    classes: PropTypes.object.isRequired,
    isUserAuth: PropTypes.bool.isRequired,
};

SigninForm = withStyles(styles)(SigninForm);

export default SigninForm;