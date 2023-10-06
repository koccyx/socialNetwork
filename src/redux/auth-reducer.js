import { authApi, usersApi } from "../api/api";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  profileImg: null,
}

const SET_USER_DATA = 'samurau-network/auth/SET-USERS-DATA';
const SET_USER_PHOTO = 'samurau-network/auth/SET_USER_PHOTO';

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:{
        return {
          ...state, 
          ...action.data,
        }
      }
    case SET_USER_PHOTO: {
      return {
        ...state,
        profileImg: action.profileImg,
      }
    }
      default:
        return state;
  }
}




export const auth = () => {
  return async (dispatch) => {
    let response = await authApi.getLogin()
        
    if(response === null) return;
    let {id, login, email} = response; 
    dispatch(setAuthUserData(id, email, login, true));
    
    let userData = await usersApi.getProfile(id); 
    dispatch(setProfilePicture(userData.photos.small ? userData.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png'));
  }
}

export const login = (data) => {
  return async (dispatch) => {
    let response = await authApi.login(data);
    if (response.data.resultCode === 0) {
      dispatch(auth())
    }
  }
}

export const logout = (data) => {
  return async (dispatch) => {
    let response = await authApi.logout(data);
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData({email: null, password: null, isAuth: false, rememberMe: false}))
    }
  }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const setProfilePicture = (profileImg) => ({type: SET_USER_PHOTO, profileImg})


export default authReducer;