import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  //creating an empty state for the items list is a decision made by thinking in react
  const [items, setItems] = useState([]); //  liftedUp

  function handleAddItems(item) {
    //curr items + new item , so new items state depends upon current items state, also we cannot mutate the original state, cant push
    setItems((items) => [...items, item]); //Lifted Up
    //without mutating original array returning with adding item
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    //setItems((items) => []);
    if (items.length <= 0) {
      window.alert("No items to delete!");
    } else {
      const confirmed = window.confirm(
        "Are you sure you want to delete all the items?"
      );
      if (confirmed) setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
