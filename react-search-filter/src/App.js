import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase())
  });

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === "") return;

    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  return (
    <>
      Search:{" "}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add Item</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
}

export default App;
