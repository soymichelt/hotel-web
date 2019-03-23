import React, { Component } from 'react'
import { connect } from 'react-redux'

import Create from './../../components/reserves/reserve-create'

import {
    createReserve,
} from './../../lib/state/actions/reserveCreateAction'

class CreateContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reserveData: {
                nombre: '',
                DNI: '',
                fechaEntrada: '',
                fechaSalida: '',
                telefono: '',
                email: '',
                address: '',
            },
        }

    }

    updateReserveState = (data) => {
        let reserveData = this.state.reserveData
        const { roomId, roomCaption } = this.props
        reserveData = { ...reserveData, ...data, habitacionId:roomId, habitacion: roomCaption, }
        console.log("updateReserveState", reserveData)
        this.setState({
            reserveData,
        })
    }

    onNombreChange  = () => event => {
        this.updateReserveState({ nombre: event.target.value })
    }
    onDNIChange  = () => event => {
        this.updateReserveState({ DNI: event.target.value })
    }
    onFechaEntradaChange  = () => event => {
        this.updateReserveState({ fechaEntrada: event.target.value })
    }
    onFechaSalidaChange  = () => event => {
        this.updateReserveState({ fechaSalida: event.target.value })
    }
    onTelefonoChange  = () => event => {
        this.updateReserveState({ telefono: event.target.value })
    }
    onEmailChange  = () => event => {
        this.updateReserveState({ email: event.target.value })
    }
    onAddressChange  = () => event => {
        this.updateReserveState({ address: event.target.value })
    }
    

    handleCreateClick = () => {
        const { reserveData } = this.state
        console.log(reserveData)
        this.props.createReserve({
            ...reserveData
        })
    }

    render() {

        const {
            roomId,
            roomCaption,
            open,
            onClose,
        } = this.props

        const {
            nombre,
            DNI,
            fechaEntrada,
            fechaSalida,
            telefono,
            email,
            address,
        } = this.state.reserveData

        console.log("render", this.state.reserveData)

        return (
            <Create
                open={open}
                onClose={onClose}
                onCreate={this.handleCreateClick}
                habitacionId={roomId}
                habitacionValue={roomCaption}
                onNombreChange={this.onNombreChange}
                nombreValue={nombre}
                onDNIChange={this.onDNIChange}
                DNIValue={DNI}
                onFechaEntradaChange={this.onFechaEntradaChange}
                fechaEntradaValue={fechaEntrada}
                onFechaSalidaChange={this.onFechaSalidaChange}
                fechaSalidaValue={fechaSalida}
                onTelefonoChange={this.onTelefonoChange}
                telefonoValue={telefono}
                onEmailChange={this.onEmailChange}
                emailValue={email}
                onAddressChange={this.onAddressChange}
                addressValue={address}
            />
        )
        
    }

}

const mapStateToProps = (newState, newProps) => {

    let {
        createReserve,
    } = newState

    if(!createReserve) {
        createReserve = {
            state: 0,
        }
    }

    const { state } = createReserve

    console.log(state)

    return {
        state,
    }

}

const mapDispatchToProps = (dispatch) => ({

    createReserve: (reserve) => dispatch(createReserve(reserve)),

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)