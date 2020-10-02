import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

let initialState = {
    postData: [
        {massage: 'It\'s my first post', id: 1, likesCount: 17},
        {massage: 'Second post', id: 2, likesCount: 9}
    ],
    newTextPost: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {massage: action.newTextPost, id: 5, likesCount: 0}]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: (action.profile)
            };
        case SET_STATUS:
            return {
                ...state,
                status: (action.status)
            };
        case DELETE_POST:
            return {
                ...state, postData: state.postData.filter(p => p.id != action.postId)
            }

        default:
            return state;
    }
}

export let addPostActionCreator = (newTextPost) => {
    return {
        type: ADD_POST, newTextPost
    }
}

export let deletePostActionCreator = (postId) =>{
    return{
        type: DELETE_POST, postId
    }
}

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export let setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let response =  await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
  let response = await  profileAPI.updateStatus(status)
        dispatch(updateStatus(response.data))

}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))


}

export default profileReducer;