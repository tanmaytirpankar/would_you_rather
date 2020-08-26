import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api.js'
import { receiveUsers, saveAnswer, addQuestion } from './users.js'
import { receiveQuestions, saveUsersChoice, createQuestion } from './questions.js'
import { setAuthedUser, addQuestionToActiveUser, saveAnswerToQuestion } from './authedUser.js'

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

export function handleSelectAnswer (authedID, questionID, answer) {
	return (dispatch) => {
		return saveQuestionAnswer(authedID, questionID, answer)
			.then(() => {
				dispatch(saveAnswerToQuestion(questionID, answer))
				dispatch(saveAnswer(authedID, questionID, answer))
				dispatch(saveUsersChoice(authedID, questionID, answer))
			}, () => {
				console.warn('Could not save answer')
			})
	}
}

export function handleCreateQuestion (question) {
	return (dispatch) => {
		return saveQuestion(question)
			.then((formattedQuestion) => {
				dispatch(addQuestionToActiveUser(formattedQuestion.id))
				dispatch(addQuestion(formattedQuestion.author, formattedQuestion.id))
				dispatch(createQuestion(formattedQuestion))
			}, () => {
				console.warn('Could not save question')
			})
	}
}