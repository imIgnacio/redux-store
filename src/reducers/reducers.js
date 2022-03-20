import { GET_CHARACTERS, LOADING } from "../types/types";
import { store } from "../index";

const initialState = {
    characters: [],
    isLoading: false
}

const counterReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case GET_CHARACTERS:
            return { 
                ...state,
                isLoading: false, 
                characters: action.payload }
        default:
            return state;
    }
}

export default counterReducer;