import React, { Component } from 'react'
import RoomList from './../../components/room/roomList'
import { connect } from 'react-redux'
import {
    getRoomList,
} from './../../lib/state/actions/roomAction'

class IndexContainer extends Component {

    render() {

        const {
            list,
        } = this.props

        console.log(list)

        return (
            <RoomList
                data={list}
            />
        )

    }

    componentDidMount() {
        console.log('ComponentDidMount')
        this.props.getRoomList()
    }

}

const mapStateToProps = (newState, newProps) => {
    const { room } = newState
    console.log('mapStateToProps', room)
    if(room) {
        const { list } = room
        console.log('List', list)
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