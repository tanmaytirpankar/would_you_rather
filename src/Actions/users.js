export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveUsers (users) {
	return {
		type: RECEIVE_USERS,
		users,
	}
}

export function saveAnswer(authedID, questionID, answer) {
	return {
		type: SAVE_QUESTION_ANSWER,
		authedID,
		questionID,
		answer,
	}
}

export function addQuestion(authorID, questionID) {
	return {
		type: ADD_QUESTION,
		authorID,
		questionID,
	}
}