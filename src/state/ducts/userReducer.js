import * as Types from "../types";

const INITIAL_STATE = {

    docId: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SET_DATA:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};