import {
    getPeoplesQuery,
} from './../../data/pearsonData'

/* Action Type's */
export const SET_LOADING_IN_PEOPLE_CREATE    =   'SET_LOADING_IN_PEOPLE_CREATE'
export const SET_ERROR_IN_PEOPLE_CREATE      =   'SET_ERROR_IN_PEOPLE_CREATE'
export const SET_SUCCESS_IN_PEOPLE_CREATE    =   'SET_SUCCESS_IN_PEOPLE_CREATE'

/* Action Creators */
const setLoadingInPeopleCreate  = (payload) =>  ({ type: SET_LOADING_IN_PEOPLE_CREATE, payload })
const setErrorInPeopleCreate    = (payload) =>  ({ type: SET_ERROR_IN_PEOPLE_CREATE, payload })
const setSuccessInPeopleCreate  = (payload) =>  ({ type: SET_SUCCESS_IN_PEOPLE_CREATE, payload })

export const createPeople = (people) => {
    return (dispatch) => {
        const query = getPeoplesQuery()

        dispatch(loading())

        const {
            carnet,
            DNI,
            inss,
            name,
            address,
            job,
            career,
            isStudent,
            isTeacher,
            isAdministrative,
        } = people

        query.add({
            carnet,
            DNI,
            inss,
            name,
            address,
            job,
            career,
            isStudent,
            isTeacher,
            isAdministrative,
        })
        .then(() => {
            dispatch(success)
        })
        .catch((e) => {
            dispatch(error(e))
        })
    }
}

const loading = () => setLoadingInPeopleCreate({
    peopleCreate: {
        state: 0,
    }
})

const success = () => setSuccessInPeopleCreate({
    peopleCreate: {
        state: 1,
    },
})

const error = (error) => setErrorInPeopleCreate({
    peopleCreate: 2,
})