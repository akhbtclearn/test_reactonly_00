import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 6);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Static React App</h1>
        <p>Click the button below to increase the counter.</p>
        <button onClick={incrementCounter}>Click Me</button>
        <p>Button Clicked: <strong>{count}</strong> times</p>
      </header>
    </div>
  );
}

export default App;
