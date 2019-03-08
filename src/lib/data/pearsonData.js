import { getDb } from './firestore'

export const getPeoplesQuery = () => {
    const db = getDb()
    return db.collection('peoples')
}

export const getPeoplesByNameQuery = (name = '', carnet = '') => {
    const db = getDb()
    db.collection('peoples').where('name', '==', name).where('carnet', '==', carnet)
}