import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';



let initialState = {
    'posts': [
        {id: 1, message: 'Hellow mir', likes: 12},
        {id: 2, message: 'Manera krutit mir', likes:10},
        {id: 3, message: 'Cool page!', likes:101},
        {id: 4, message: 'I`m MOTIVATED!!', likes:0, dislikes:10},
    ],
    'newPostText': 'nicyyy',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
            let randomNum = Math.round(Math.random() * 1000);

            return {
                ...state,
                posts: [...state.posts, { id: randomNum, message: state.newPostText, likes: 0 }],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state;
    }
}

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile}) 
export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export let setStatus = (status) => ({type: SET_STATUS, status});
export let deletePost = (postId) => ({type: DELETE_POST, postId})

export const setProfile = (profileId) => {
    return async (dispatch) => {
        let response = await usersApi.getProfile(profileId)
        dispatch(setUserProfile(response));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileApi.getStatus(userId)
        dispatch(setStatus(response));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileApi.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer;