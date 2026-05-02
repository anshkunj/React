function Buttons({ count, setCount }) {
  return (
    <div id="buttons">
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        -
      </button>
    </div>
  );
}

export default Buttons;