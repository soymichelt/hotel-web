import {
    getRoomsQuery,
} from './../../data/roomData'

/* Action Type's */
export const SET_LOADING_DATA_IN_ROOM_LIST    =   'SET_LOADING_DATA_IN_ROOM_LIST'
export const SET_ERROR_IN_ROOM_LIST           =   'SET_ERROR_IN_ROOM_LIST'
export const SET_DATA_IN_ROOM_LIST            =   'SET_DATA_IN_ROOM_LIST'

/* Action Creators */
const setLoadingDataInRoomList  = (payload) =>  ({ type: SET_LOADING_DATA_IN_ROOM_LIST, payload })
const setErrorInRoomList        = (payload) =>  ({ type: SET_ERROR_IN_ROOM_LIST, payload })
const setDataInRoomList         = (payload) =>  ({ type: SET_DATA_IN_ROOM_LIST, payload })

export const getRoomList = (unsuscribe = false) => {
    return (dispatch, getState) => {
        dispatch(loadingRoomList())

        const query = getRoomsQuery()

        if(!unsuscribe) {

            query.onSnapshot(function() {})
            query.onSnapshot((snapshot) => {

                dispatch(loadingRoomList())
                const rooms = extractRoomsList(getState)
                snapshot.docChanges().forEach((change) => {
                    const { doc } = change;
                    const data = extractRoomData(doc)
                    updateRooms(rooms, data, change.type)
                });
                dispatch(pushRoomList(rooms))
    
            }, (error) => {
                dispatch(errorRoomList())
            })
        }
        else {
            query.onSnapshot(function() {})
        }
    }
}

const extractRoomData = (doc) => ({

    id:            doc.id,
    carnet:         doc.data().carnet,
    name:           doc.data().name,
    typeRoom:     doc.data().typeRoom,
    
})

const extractRoomsList = (getState) => {
    const { room } = getState()
    if(room) {
        let { list: rooms } = room
        if(!rooms) {

            rooms = []
        }
        return rooms
    }
    else {
        return []
    }
}

const updateRooms = (rooms, data, type) => {
    
    if(type === 'added') {
        rooms.unshift(data)
    } else {

        const roomToChange = rooms.find(item => item.uid === data.uid)

        let indexRoomInArray = rooms.indexOf(roomToChange)

        console.log(indexRoomInArray)

        if(type === 'modified') {
            if(indexRoomInArray > -1) {
                rooms[indexRoomInArray] = data
            } else {
                rooms.unshift(data)
            }
        }
        else if(type === 'removed') {
            if(indexRoomInArray > -1) {
                rooms.splice(indexRoomInArray, 1)
            }
        }
    }
}

const loadingRoomList = () => {

    return setLoadingDataInRoomList({
        roomList: { 
            state: 0,
        }
    });

};

const pushRoomList = (rooms) => {

    return setDataInRoomList({
        roomList: {
            state: 1,
            list: rooms,
        }
    });

};

const errorRoomList = () => {

    return setErrorInRoomList({
        roomList: {
            state: 2,
        }
    });

};