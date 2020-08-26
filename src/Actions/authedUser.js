export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const ADD_QUESTION_TO_AUTHED_USER = 'ADD_QUESTION_TO_AUTHED_USER'
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'

export function setAuthedUser (activeUser) {
	return {
		type: SET_AUTHED_USER,
		activeUser,
	}
}

export function addQuestionToActiveUser(questionID) {
	return {
		type: ADD_QUESTION_TO_AUTHED_USER,
		questionID,
	}
}

export function saveAnswerToQuestion(questionID, answer) {
	return {
		type: SAVE_ANSWER_TO_QUESTION,
		questionID,
		answer,
	}
}