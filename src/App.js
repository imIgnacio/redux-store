import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { GET_CHARACTERS, LOADING } from './types/types';
import { getCharacters } from './api/getCharacters';
import React from 'react';
import { store } from './index';
import Spinner from './components/spinner/Spinner';
import Card from './components/card/Card';

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

      {isLoading? <Spinner/> : characters.map((character, index) => {
        return <Card image={character.image} name={character.name} house={character.house} />;
        })
      }
    </div>
}

export default App;
