 import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
 
 

function App() {
 
  // State to store count value
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  return (
    <div className="app">
     
      <button className="increment" onClick={incrementCount} >Click Here</button> 
      {count}
    </div>
  );
   
      
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
