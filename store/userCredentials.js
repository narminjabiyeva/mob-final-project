const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const CHANGE_PROFILE_PHOTO = "CHANGE_PROFILE_PHOTO";


export const MODULE_NAME = "userCredentials";
export const getUserCredentials = (state) => state[MODULE_NAME];

const initialState = {
    fullName: null,
    mail: null,
    password: null,
    img: null
};


export function userCredentialReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOGIN: return {
            mail: payload.mail,
            password: payload.password,
            fullName: payload.fullName,
            img: payload.img
        };
        case LOGOUT: return {
            mail: null,
            password: null,
            fullName: null,
            img: null
        };
        case CHANGE_PROFILE_PHOTO: return {
            ...state,
            img: payload.img
        };
        default: return state;
    }
}


export const signIn = (payload) =>({
    type: LOGIN,
    payload
});
export const logout = () =>({
    type: LOGOUT
});

export const changeProfilePhoto = (payload) => ({
    type: CHANGE_PROFILE_PHOTO,
    payload
});
