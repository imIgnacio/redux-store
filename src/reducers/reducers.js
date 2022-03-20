import { GET_CHARACTERS } from "../types/types";
import { store } from "../index";

const initialState = {
    characters: []
}

const counterReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_CHARACTERS:
            return { ...state, characters: action.payload }
        default:
            return state;
    }
}

export default counterReducer;