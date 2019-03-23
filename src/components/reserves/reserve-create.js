import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/KeyboardArrowLeftRounded'
import Slide from '@material-ui/core/Slide'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    formContainer: {
        marginTop: '24px',
    },
    formPaper: {
        padding: '24px',
        paddingBottom : '48px',
    },
    textField: {
        width: '100%',
        marginTop: '12px',
    },
    typePeopleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

function Transition(props) {
    return <Slide direction="up" {...props} />
}

const PeopleCreate = (props) => {

    console.log("props", props)

    const {
        open,
        onClose,
        onCreate,
        classes,

        /* events */
        habitacionValue,
        onNombreChange,
        nombreValue,
        onDNIChange,
        DNIValue,
        onFechaEntradaChange,
        fechaEntradaValue,
        onFechaSalidaChange,
        fechaSalidaValue,
        onTelefonoChange,
        telefonoValue,
        onEmailChange,
        emailValue,
        onAddressChange,
        addressValue,
    } = props

    return (

        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" onClick={onClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            Reservando
                        </Typography>
                        <Button color="inherit" onClick={onCreate}>
                            Guardar
                        </Button>
                    </Toolbar>
                </AppBar>
                <section className={classes.formContainer}>
                    <Grid container justify={'center'}>
                        <Grid item xs={10} sm={8} md={6}>
                            <Paper elevation={3} className={classes.formPaper}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField
                                            className={classes.textField}
                                            label="Habitación"
                                            defaultValue={habitacionValue}
                                            disabled={false}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.textField}
                                            label="Nombres y apellidos"
                                            onChange={onNombreChange()}
                                            defaultValue={nombreValue}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.textField}
                                            label="Cédula"
                                            onChange={onDNIChange()}
                                            defaultValue={DNIValue}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.textField}
                                            label="Fecha de entrada"
                                            type={'date'}
                                            onChange={onFechaEntradaChange()}
                                            defaultValue={fechaEntradaValue}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.textField}
                                            label="Fecha de salida"
                                            type={'date'}
                                            onChange={onFechaSalidaChange()}
                                            defaultValue={fechaSalidaValue}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.textField}
                                            label="Teléfono"
                                            onChange={onTelefonoChange()}
                                            defaultValue={telefonoValue}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            className={classes.textField}
                                            label="Correo electrónico"
                                            onChange={onEmailChange()}
                                            defaultValue={emailValue}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            className={classes.textField}
                                            label="Dirección"
                                            onChange={onAddressChange()}
                                            defaultValue={addressValue}
                                        />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </section>
            </Dialog>
        </div>

    )

}

export default withStyles(styles)(PeopleCreate)