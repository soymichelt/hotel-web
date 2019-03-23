import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from 'react-redux'

import {
    aprobadoReserve,
} from './../../lib/state/actions/reserveAprobadoAction'

class AlertDialog extends React.Component {

    state = {
        open: false,
    };

    onAprobado = (event) => {
        const { reserveId } = this.props
        console.log('reserveId',reserveId)
        this.props.aprobadoReserve(reserveId);
        this.props.onClose();
    }

    render() {
        const { open, onClose } = this.props;
        return (
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Aprobación de reservación"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Haga 'click' en finalizar para aprobar la solicitud de reservación. 
                        Tenga en cuenta que este paso no se puede revertir.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={this.onAprobado} color="primary" autoFocus>
                        Arpobado
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = (newState, newProps) => {

    let { reserveAprobado } = newState

    if(!reserveAprobado) {
        reserveAprobado = {state: 0}
    }

    return reserveAprobado;

}

const mapDispatchToProps = (dispatch) => ({

    aprobadoReserve: (reserveId) => dispatch(aprobadoReserve(reserveId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);