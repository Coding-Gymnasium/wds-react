import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === "") return;

    setItems((prev) => {
      return [...prev, value];
    });

    setFilterItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value;
    setFilterItems(
      items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  }

  return (
    <>
      Search: <input onChange={onChange} type="search" />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add Item</button>
      </form>
      <h3>Items:</h3>
      {filterItems.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
}

export default App;
