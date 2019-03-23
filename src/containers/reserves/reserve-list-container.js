import React, { Component, Fragment } from 'react'
import ReserveCreate from './reserve-create-container'
import IconButton from '@material-ui/core/IconButton'
import OpenIcon from '@material-ui/icons/FolderOpenRounded'
import { connect } from 'react-redux'
import ReserveList from './../../components/reserves/reserve-list'

import {
    getReserveList,
} from './../../lib/state/actions/reserveAction'

class ListContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reserveCreateOpen: false,
        }
    }

    handleReserveCreateOpen = () => {
        this.setState({
            reserveCreateOpen: true,
        });
    }

    handleReserveCreateClose = () => {
        this.setState({
            reserveCreateOpen: false,
        });
    }

    handleDelete = () => {}

    handleOpenClick = (reserveId) => {
    }

    counter = 0;

    createData = (name, carnet, typeReserve) => {
        
        this.counter += 1

        return {
            id: this.counter,
            name,
            carnet,
            typeReserve,
            oper: (
                <IconButton
                    onClick={(e) => {
                        e.stopPropagation()
                        this.handleOpenClick(this.counter)
                    }}
                >
                    <OpenIcon />
                </IconButton>
            ),
        }

    }

    render() {

        const {
            reserveCreateOpen,
        } = this.state

        const {
            state,
            list,
        } = this.props

        const columns = [
            { id: 'nombre',   align: 'left', disablePadding: true,  label: 'Nombres y apellidos' },
            { id: 'habitacion',       align: 'left', disablePadding: false,   label: 'Servicio' },
            { id: 'telefono', align: 'left', disablePadding: true,  label: 'Teléfono' },
            { id: 'fechaEntrada', align: 'left', disablePadding: true,  label: 'Entrada' },
            { id: 'fechaSalida', align: 'left', disablePadding: true,  label: 'Salida' },
            { id: 'estado', align: 'left', disablePadding: true,  label: 'Estado' },
            { id: 'operacion', align: 'left', disablePadding: true,  label: 'Operación' },
        ]

        let data = []
        let dataConOperacion = []
        if(list) {
            data = list
            dataConOperacion = data.map((item) => {
                return (
                    {
                        ...item,
                        operacion:(
                            <IconButton onClick={(e) => {
                                e.stopPropagation()
                                this.handleOpenClick(item.id)
                            }}>
                                <OpenIcon />
                            </IconButton>
                        ),
                    }
                )
            })
        }
        return (
            <Fragment>
                <ReserveList
                    onDelete={this.handleDelete}
                    onFilter={this.handleReserveCreateOpen}
                    data={dataConOperacion}
                    columns={columns}
                    orderByDefault={'nombre'}
                />
                
                {
                    reserveCreateOpen === true ? <ReserveCreate
                        open={reserveCreateOpen}
                        onClose={this.handleReserveCreateClose}
                    />
                    :
                    null
                }
            </Fragment>
        )

    }

    componentDidMount() {

        this.props.getReserveList()

    }
    
}

const mapStateToProps = (newState, newProps) => {
    
    let { reserve } = newState

    if(!reserve) {
        reserve = {
            state: 0,
            list: [],
        }
    }

    const { state, list, } = reserve

    return {
        state,
        list,
    }

}

const mapDispatchToProps = (dispatch) => ({

    getReserveList: (unsuscribe = false) => dispatch(getReserveList(unsuscribe)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)