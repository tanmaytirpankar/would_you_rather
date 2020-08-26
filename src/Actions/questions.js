export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_USERS_CHOICE = 'SAVE_USERS_CHOICE'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function saveUsersChoice (authedID, questionID, answer) {
	return {
		type: SAVE_USERS_CHOICE,
		authedID,
		questionID,
		answer,
	}
}

export function createQuestion (question) {
	return {
		type: CREATE_QUESTION,
		question: question
	}
}
