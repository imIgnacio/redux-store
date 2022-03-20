import { GET_CHARACTERS } from "../types/types";
import axios from 'axios';

const initialState = {
    characters: []
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS:
            axios.get('http://hp-api.herokuapp.com/api/characters')
            .then(res => state.characters.push(res));
            return { ...state }
        default:
            return state;
    }
}

export default counterReducer;