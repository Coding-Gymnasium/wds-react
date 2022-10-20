import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === "") return;

    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value;
    setItems((prev) => {
      return prev.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    });
  }

  return (
    <>
      Search: <input onChange={onChange} type="search" />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add Item</button>
      </form>
      <h3>Items:</h3>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
}

export default App;
