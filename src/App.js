import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  return (
    <div className="App">
      <h2 data-testid="counter-value">{data}</h2>
      {data !== 0 ? (
        <button
          onClick={() => {
            setData(data - 1);
          }}
          data-testid="counter-increment-button"
        >
          sub
        </button>
      ) : (
        <button disabled data-testid="counter-increment-button">
          sub
        </button>
      )}
      <button
        onClick={() => {
          setData(data + 1);
        }}
        data-testid="counter-decrement-button"
      >
        add
      </button>
    </div>
  );
}

export default App;
