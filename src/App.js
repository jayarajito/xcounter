// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((preValue) => preValue + 1);
  };

  const handleDecrement = () => {
    setCount((preValue) => preValue - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button name="Increment" onClick={handleIncrement}>
        Increment
      </button>
      <button name="Decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
