const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    'dialogs': [
        {id: 1, name: 'Katya<3'},
        {id: 2, name: 'Pavel'},
        {id: 3, name: 'Kostik'},
    ],
    'messages': [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Blaldenie'},
        {id: 4, message: 'Uchebaaaa!!'},
    ],
    'newMessageText': 'Let`s go!',
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        case SEND_MESSAGE:{
            let randomNum = Math.round(Math.random() * 1000);
            
            return {
                ...state,
                messages : [...state.messages, {id: randomNum, message: state.newMessageText}],
                newMessageText: ''
            };
        }
        default:
            return state;
    }
}

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;