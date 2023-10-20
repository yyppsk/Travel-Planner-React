import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  //creating an empty state for the items list is a decision made by thinking in react
  const initialItems = JSON.parse(localStorage.getItem("items")) || [];
  const [items, setItems] = useState(initialItems); //  liftedUp

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  function handleAddItems(item) {
    //curr items + new item , so new items state depends upon current items state, also we cannot mutate the original state, cant push

    const newItems = [...items, item];
    setItems(newItems);
    saveItemsToLocalStorage(newItems); //Lifted Up
    //without mutating original array returning with adding item
  }

  function handleDeleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  }

  function handleToggleItem(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  }
  function clearItems() {
    if (items.length <= 0) {
      window.alert("No items to delete!");
    } else {
      const confirmed = window.confirm(
        "Are you sure you want to delete all the items?"
      );
      if (confirmed) {
        setItems([]);
        saveItemsToLocalStorage([]);
      }
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
