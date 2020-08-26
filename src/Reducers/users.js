import { RECEIVE_USERS, SAVE_QUESTION_ANSWER, ADD_QUESTION } from '../Actions/users.js'

export default function users (state = {}, action) {
	switch(action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			}
		case SAVE_QUESTION_ANSWER:
			return {
				...state,
				[action.authedID]: user(state[action.authedID], action)
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.authorID]: user(state[action.authorID], action)
			}
		default:
			return state
	}
}

function user (state, action) {
	switch(action.type) {
		case SAVE_QUESTION_ANSWER:
			return {
				...state,
				answers: answer(state.answers, action)
			}
		case ADD_QUESTION:
			return {
				...state,
				questions: state.questions.concat([action.questionID])
			}
		default:
			return state
	}
}

function answer (state, action) {
	switch(action.type) {
		case SAVE_QUESTION_ANSWER:
			return {
				...state,
				[action.questionID]: action.answer
			}
		default:
			return state
	}
}

