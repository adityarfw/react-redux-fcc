import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  const addBy = () => {
    dispatch({ type: 'ADD', payload: 20 });
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addBy}>Add by 20</button>
    </div>
  );
}

export default App;
