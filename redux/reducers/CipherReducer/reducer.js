import {UPDATE_KEY,UPDATE_MESSAGE,CHANGE_RESULT, CHANGE_MODAL} from './action.js'

const initialState = {
    modal: {
        title: '',
        isVisible: false,
    },
    values: {
        key: '',
        message: '',
        result: '',
    },
    alphabets: ['abcdefghijklmnopqrstuvwxyz']
};

export const cipherReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODAL:
            return {
                ...state,
                modal: {
                    isVisible: action.data.isVisible,
                    title: action.data.title

                }
            };
        case UPDATE_KEY:

            return {
                  ...state,
                    values: {
                        key: action.data,
                        message: '',
                        result: '',
                    }
            };
        case UPDATE_MESSAGE:
            return {
                    ...state,
                    values: {
                        ...state.values,
                        message: action.data
                    }
            };
        case CHANGE_RESULT:
            return {
                    ...state,
                    values: {
                        ...state.values,
                       result: action.data,
                    }
            };
        default: return state;
    }
}