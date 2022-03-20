import axios from 'axios';

export const getCharacters = () => 
    axios.get('http://hp-api.herokuapp.com/api/characters')
    .then(res => res.data)

