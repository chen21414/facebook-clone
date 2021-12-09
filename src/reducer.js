export const initialState = {
    user:null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user, //return whatever currently looks like and pass in new user
            };

            default:
                return state;
    }
};

export default reducer; 