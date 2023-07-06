import { useState } from "react";
import Router from "./router";
import context from "./context/context";
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
