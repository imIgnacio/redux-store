import { GET_CHARACTERS } from "../types/types"

export function getCharacters(payload) {
    return { type: GET_CHARACTERS, payload }
}