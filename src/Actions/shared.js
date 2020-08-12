import { getInitialData } from '../utils/api.js'
import { receiveUsers } from './users.js'
import { receiveQuestions } from './questions.js'
import { setAuthedUser} from './authedUser.js'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({users, questions}) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
	}
}