import React, { Component, Fragment } from 'react'
import RoomList from './../../components/room/roomList'
import Create from './../reserves/reserve-create-container'
import { connect } from 'react-redux'
import {
    getRoomList,
} from './../../lib/state/actions/roomAction'

class IndexContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            roomId: '',
            roomCaption: '',
            reserveCreateOpen: false,
        }

    }

    onReserveClick = (roomId, roomCaption) => {
        console.log('onReserveClick', roomId, roomCaption)
        this.setState({
            roomId: roomId,
            roomCaption: roomCaption,
            reserveCreateOpen: true,
        })
    }

    handleCreateClose = () => {
        this.setState({
            roomId: '',
            roomCaption: '',
            reserveCreateOpen: false,
        })
    }

    render() {

        const {
            list,
        } = this.props

        const {
            roomId,
            roomCaption,
            reserveCreateOpen,
        } = this.state

        return (
            <Fragment>
                <RoomList
                    data={list}
                    onReserve={this.onReserveClick}
                />
                {
                    <Create
                        roomId={roomId}
                        roomCaption={roomCaption}
                        open={reserveCreateOpen}
                        onClose={this.handleCreateClose}
                    />
                }
            </Fragment>
        )

    }

    componentDidMount() {
        this.props.getRoomList()
    }

}

const mapStateToProps = (newState, newProps) => {
    const { room } = newState
    if(room) {
        const { list } = room
        return ({
            list,
        })
    }
    return ({
        list: [],
    })
}

const mapDispatchToProps = (dispatch) => ({
    getRoomList: (unsuscribe = false) => dispatch(getRoomList(unsuscribe)),
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)