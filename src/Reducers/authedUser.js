import { SET_AUTHED_USER, ADD_QUESTION_TO_AUTHED_USER, SAVE_ANSWER_TO_QUESTION } from '../Actions/authedUser.js'

export default function authedUser(state = null, action) {
	switch(action.type) {
		case SET_AUTHED_USER:
			return action.activeUser
		case ADD_QUESTION_TO_AUTHED_USER:
			return {
				...state,
				questions: state.questions.concat([action.questionID])
			}
		case SAVE_ANSWER_TO_QUESTION:
			return {
				...state,
				answers: answer(state.answers, action)
			}
		default:
			return state
	}
}

function answer (state, action) {
	switch(action.type) {
		case SAVE_ANSWER_TO_QUESTION:
			return {
				...state,
				[action.questionID]: action.answer
			}
		default:
			return state
	}
}