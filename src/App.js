import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { GET_CHARACTERS } from './types/types';
import { getCharacters } from './api/getCharacters';
import React from 'react';
import { store } from './index';

function App() {

  const dispatch = useDispatch();
  const characters = useSelector( (state) => state.characters);

  React.useEffect( async () => {
    const data = await getCharacters()
    dispatch({ type: GET_CHARACTERS, payload: data });
  }, []);

  return <div className="App">
        {characters.map((character, index) => {
          return <h2> {character.name} </h2>;
        })}
    </div>
}

export default App;
