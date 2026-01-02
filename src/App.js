import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const[flag,setflag]=useState(false);

  const increment = () => {
    setCount(prev => prev + 1);
    setflag(false);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      if(count === 1)
      {
          setflag(true);
      }
     
    }
    else{
      setflag(true);
    }
  };

  const reset = () => {
    setCount(0);
    setflag(false);
  };

  return (
    <div className="container">
      <h1 className="count">{count}</h1>

      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      {flag && (
        <p className="warning">Minimum limit reached</p>
      )}
    </div>
  );
}

export default App;
