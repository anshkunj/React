import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Counter count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

export default App;