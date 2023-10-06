import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let dialogs = [
    {id: 1, name: 'Katya<3'},
    {id: 2, name: 'Pavel'},
    {id: 3, name: 'Kostik'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Blaldenie'},
    {id: 4, message: 'Uchebaaaa!!'},
];

let posts = [
    {id: 1, message: 'Hellow mir', likes: 12},
    {id: 2, message: 'Manera krutit mir', likes:10},
    {id: 3, message: 'Cool page!', likes:101},
    {id: 2, message: 'I`m tired a bit...', likes:0, dislikes:10},
];

let friends = [
    {name: 'Katya', id: 1},
    {name: 'Edik', id: 2},
    {name: 'Fedor', id: 3},
    {name: 'Elisey', id: 4},
    {name: 'Micha', id: 5},
    {name: 'Kostik', id: 6},
    {name: 'Pavlik', id: 7},
    {name: 'Arkady', id: 8},
    {name: 'Tema', id: 9},
];


const store = {
    _state : {
        profilePage: {
            'posts': posts,
            'newPostText': 'nicyyy',
        },
        messagePage: {
            'dialogs': dialogs,
            'messages': messages,
            'newMessageText': 'Let`s go!',
        },
        navPage: {
            'friends': friends,
        },
    },
    __renderTree () {
        console.log('state changed');
    },
    subscribe (observer) {
        this._renderTree = observer;
    },
    // getState() {
    //     return this._state;
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.navPage = sidebarReducer(this._state.navPage, action);
        this._renderTree(this._state);
    }
}


export default store;
