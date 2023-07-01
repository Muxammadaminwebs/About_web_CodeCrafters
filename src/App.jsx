import { useState } from "react";
import context from "./context/context";
import Router from "./Router";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <context.Provider>
        <div className="App">
          <Router />
        </div>
      </context.Provider>
    </>
  );
}

export default App;
