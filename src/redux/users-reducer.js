import { usersApi } from "../api/api.js";
import { updateObjectInArray } from "../utilits/object-helpers.js";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:{
        return {
          ...state,
          users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
        }
      }
      case UNFOLLOW: {
        return {
          ...state,
          users:  updateObjectInArray(state.users, action.userId, 'id', {followed: false})
        }
      }
      case SET_USERS: 
        return { ...state, users: [...action.users]};

      case CHANGE_PAGE: 
        return { ...state, currentPage: action.page};

      case SET_TOTAL_COUNT:
        return {...state, totalUsersCount: action.usersCount};
      
      case TOGGLE_IS_FETCHING:
        return {...state, isFetching: action.isFetching};
      
      case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {...state, followingProgress: action.isFetching 
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id != action.userId)
        };

      default:
        return state;
      
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changePage = (page) => ({type: CHANGE_PAGE, page});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_COUNT, usersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching , userId});

export const getUsersThunkCreator = (pageNumber, pageSize) => { 
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersApi.getUsers(pageNumber, pageSize);
    dispatch(changePage(pageNumber));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, id));
    let data = await apiMethod(id)

    if (data.resultCode == 0) {
      dispatch(actionCreator(id));
    }

    dispatch(toggleIsFollowingProgress(false, id));
}

export const unFollow = (id) => { 
  return (dispatch) => {
    let apiMethod = usersApi.unFollowUser.bind(usersApi); 
    let actionCreator = unFollowSuccess;

    followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
}}

export const follow = (id) => { 
  return (dispatch) => {
    let apiMethod = usersApi.followUser.bind(usersApi); 
    let actionCreator = followSuccess;

    followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
}}

export default usersReducer;