import app from '../firebase'
import { getDatabase } from 'firebase/database'

const database = getDatabase(app)
class StatusDataService {
  getAll () {
    return database
  }
}
export default new StatusDataService()
