import { RECEIVE_QUESTIONS, SAVE_USERS_CHOICE, CREATE_QUESTION } from '../Actions/questions.js'


export default function questions (state = {}, action) {
	switch(action.type) {
		case RECEIVE_QUESTIONS: 
			return {
				...state,
				...action.questions,
			}
		case SAVE_USERS_CHOICE:
			return {
				...state,
				[action.questionID]: question(state[action.questionID], action)
			}
		case CREATE_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			}
		default:
			return state
	}
}

function question (state, action) {
	switch(action.type) {
		case SAVE_USERS_CHOICE:
			return {
				...state,
				[action.answer]: answer(state[action.answer], action)
			}
		default:
			return state
	}
}

function answer (state, action) {
	switch(action.type) {
		case SAVE_USERS_CHOICE:
			return {
				...state,
				votes: state.votes.concat([action.authedID])
			}
		default:
			return state
	}
}