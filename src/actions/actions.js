import { GET_CHARACTERS, LOADING } from "../types/types"

export function getCharacters(payload) {
    return { type: GET_CHARACTERS, payload }
}

export function loading() {
    return { type: LOADING }
}