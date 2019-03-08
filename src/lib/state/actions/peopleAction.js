import {
    getPeoplesQuery,
} from './../../data/pearsonData'

/* Action Type's */
export const SET_LOADING_DATA_IN_PEOPLE_LIST    =   'SET_LOADING_DATA_IN_PEOPLE_LIST'
export const SET_ERROR_IN_PEOPLE_LIST           =   'SET_ERROR_IN_PEOPLE_LIST'
export const SET_DATA_IN_PEOPLE_LIST            =   'SET_DATA_IN_PEOPLE_LIST'

/* Action Creators */
const setLoadingDataInPeopleList  = (payload) =>  ({ type: SET_LOADING_DATA_IN_PEOPLE_LIST, payload })
const setErrorInPeopleList        = (payload) =>  ({ type: SET_ERROR_IN_PEOPLE_LIST, payload })
const setDataInPeopleList         = (payload) =>  ({ type: SET_DATA_IN_PEOPLE_LIST, payload })

export const getPeopleList = (unsuscribe = false) => {
    return (dispatch, getState) => {
        dispatch(loadingPeopleList())

        const query = getPeoplesQuery()

        if(!unsuscribe) {

            query.onSnapshot(function() {})
            query.onSnapshot((snapshot) => {

                dispatch(loadingPeopleList())
                const peoples = extractPeoplesList(getState)
                snapshot.docChanges().forEach((change) => {
                    const { doc } = change;
                    const data = extractPeopleData(doc)
                    updatePeoples(peoples, data, change.type)
                });
                dispatch(pushPeopleList(peoples))
    
            }, (error) => {
                dispatch(errorPeopleList())
            })
        }
        else {
            query.onSnapshot(function() {})
        }
    }
}

const extractPeopleData = (doc) => ({

    id:            doc.id,
    carnet:         doc.data().carnet,
    name:           doc.data().name,
    typePeople:     doc.data().typePeople,
    
})

const extractPeoplesList = (getState) => {
    const { people } = getState()
    if(people) {
        let { list: peoples } = people
        if(!peoples) {

            peoples = []
        }
        return peoples
    }
    else {
        return []
    }
}

const updatePeoples = (peoples, data, type) => {
    
    if(type === 'added') {
        peoples.unshift(data)
    } else {

        const peopleToChange = peoples.find(item => item.uid === data.uid)

        let indexPeopleInArray = peoples.indexOf(peopleToChange)

        console.log(indexPeopleInArray)

        if(type === 'modified') {
            if(indexPeopleInArray > -1) {
                peoples[indexPeopleInArray] = data
            } else {
                peoples.unshift(data)
            }
        }
        else if(type === 'removed') {
            if(indexPeopleInArray > -1) {
                peoples.splice(indexPeopleInArray, 1)
            }
        }
    }
}

const loadingPeopleList = () => {

    return setLoadingDataInPeopleList({
        peopleList: { 
            state: 0,
        }
    });

};

const pushPeopleList = (peoples) => {

    return setDataInPeopleList({
        peopleList: {
            state: 1,
            list: peoples,
        }
    });

};

const errorPeopleList = () => {

    return setErrorInPeopleList({
        peopleList: {
            state: 2,
        }
    });

};