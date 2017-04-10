const initialState = {
    imageSource: '../img/',
};

function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case 'SET_SESION': {
        return Object.assign({}, state, { token: action.payload });
    }
    default:
        return state;
    }
}

export default reducer;
