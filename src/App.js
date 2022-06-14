import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const handle = (val) => {
    setData(data + val);
  };
  return (
    <div className="App">
      <h2 data-testid="counter-value">{data}</h2>

      <button
        disabled={data === 0 ? true : false}
        onClick={() => {
          handle(-1);
        }}
        data-testid="counter-decrement-button"
      >
        sub
      </button>
      <button
        onClick={() => {
          handle(1);
        }}
        data-testid="counter-increment-button"
      >
        add
      </button>
    </div>
  );
}

export default App;
