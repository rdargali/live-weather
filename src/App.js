import React from "react";

import "./App.css";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>weather!</h1>
    </div>
  );
}

export default App;
