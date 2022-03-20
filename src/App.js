import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector( (state) => state.count);

  return <div className="App">

      <h1>First Redux Store</h1>
      <p>{ counter }</p>
      <button onClick={() => { dispatch({ type: 'increment' }) } } >+</button>
      <button onClick={() => { dispatch({ type: 'decrement' }) } }>-</button>
    </div>
}

export default App;
