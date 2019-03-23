import { getDb } from './firestore'

export const getReservesQuery = () => {
    const db = getDb()
    return db.collection('reserves')
}