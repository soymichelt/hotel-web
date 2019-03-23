import {
    getReservesQuery,
} from './../../data/reserveData'

/* Action Type's */
export const SET_LOADING_DATA_IN_RESERVE_LIST    =   'SET_LOADING_DATA_IN_RESERVE_LIST'
export const SET_ERROR_IN_RESERVE_LIST           =   'SET_ERROR_IN_RESERVE_LIST'
export const SET_DATA_IN_RESERVE_LIST            =   'SET_DATA_IN_RESERVE_LIST'

/* Action Creators */
const setLoadingDataInReserveList  = (payload) =>  ({ type: SET_LOADING_DATA_IN_RESERVE_LIST, payload })
const setErrorInReserveList        = (payload) =>  ({ type: SET_ERROR_IN_RESERVE_LIST, payload })
const setDataInReserveList         = (payload) =>  ({ type: SET_DATA_IN_RESERVE_LIST, payload })

export const getReserveList = (unsuscribe = false) => {
    return (dispatch, getState) => {
        dispatch(loadingReserveList())

        const query = getReservesQuery()

        if(!unsuscribe) {

            query.onSnapshot(function() {})
            query.onSnapshot((snapshot) => {

                dispatch(loadingReserveList())
                const reserves = extractReservesList(getState)
                snapshot.docChanges().forEach((change) => {
                    const { doc } = change;
                    const data = extractReserveData(doc)
                    updateReserves(reserves, data, change.type)
                });
                dispatch(pushReserveList(reserves))
    
            }, (error) => {
                dispatch(errorReserveList())
            })
        }
        else {
            query.onSnapshot(function() {})
        }
    }
}

const extractReserveData = (doc) => ({

    id: doc.id,
    habitacionId: doc.data().habitacionId,
    habitacion: doc.data().habitacion,
    fechaEntrada: doc.data().fechaEntrada,
    fechaSalida: doc.data().fechaSalida,
    nombre: doc.data().nombre,
    telefono: doc.data().telefono,
    address: doc.data().address,
    email: doc.data().email,
    DNI: doc.data().DNI,
    estado: doc.data().estado,

})

const extractReservesList = (getState) => {
    const { reserve } = getState()
    if(reserve) {
        let { list: reserves } = reserve
        if(!reserves) {

            reserves = []
        }
        return reserves
    }
    else {
        return []
    }
}

const updateReserves = (reserves, data, type) => {
    
    if(type === 'added') {
        reserves.unshift(data)
    } else {

        const reserveToChange = reserves.find(item => item.uid === data.uid)

        let indexReserveInArray = reserves.indexOf(reserveToChange)

        console.log(indexReserveInArray)

        if(type === 'modified') {
            if(indexReserveInArray > -1) {
                reserves[indexReserveInArray] = data
            } else {
                reserves.unshift(data)
            }
        }
        else if(type === 'removed') {
            if(indexReserveInArray > -1) {
                reserves.splice(indexReserveInArray, 1)
            }
        }
    }
}

const loadingReserveList = () => {

    return setLoadingDataInReserveList({
        reserveList: { 
            state: 0,
        }
    });

};

const pushReserveList = (reserves) => {

    return setDataInReserveList({
        reserveList: {
            state: 1,
            list: reserves,
        }
    });

};

const errorReserveList = () => {

    return setErrorInReserveList({
        reserveList: {
            state: 2,
        }
    });

};