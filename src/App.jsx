import { useState } from "react";
import Router from "./Router";
import "./App.css";
import context from "./context/context";

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
