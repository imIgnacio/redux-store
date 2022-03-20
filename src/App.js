import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { GET_CHARACTERS, LOADING } from './types/types';
import { getCharacters } from './api/getCharacters';
import React from 'react';
import { store } from './index';

function App() {

  const dispatch = useDispatch();
  const characters = useSelector( (state) => state.characters);
  const isLoading = useSelector( (state) => state.isLoading);

  React.useEffect( () => {
    dispatch({ type: LOADING })
    getCharacters()
    .then((data) => dispatch({ type: GET_CHARACTERS, payload: data }))
  }, []);

  return <div className="App">

      {isLoading? <p>Loading...</p> : characters.map((character, index) => {
          return <h2> {character.name} </h2>;
        })}

        {/* {characters.map((character, index) => {
          return <h2> {character.name} </h2>;
        })} */}
    </div>
}

export default App;
