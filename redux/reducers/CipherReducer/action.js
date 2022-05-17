export const UPDATE_KEY = 'UPDATE_KEY';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const CHANGE_RESULT = 'CHANGE_RESULT';


export const updateKey = (data) => ({data,type: UPDATE_KEY});
export const changeResult = (data) => ({data,type: CHANGE_RESULT});
export const updateMessage = (data) => ({data,type: UPDATE_MESSAGE});
export const updateModal = (data) => ({data,type: CHANGE_MODAL});