import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function removeItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  function clearItems() {
    setItems([]);
  }

  return (
    <ItemContext.Provider value={{ items, addItem, clearItems , removeItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemContext);
}