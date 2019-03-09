import { getDb } from './firestore'

export const getRoomsQuery = () => {
    const db = getDb()
    return db.collection('rooms')
}