import { useState}  from "react";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";
import  Form  from "./Form";
import  Logo  from "./Logo";
import Accordion from "./Accordion";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: true },
];
function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }
  function handleDeleteAll() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items ?"
    );
    if (confirmed) setItems(() => []);
  }

  return (
    <>
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />

      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        onToggleItem={handelToggleItem}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>  <Accordion /> </> 
    )
}
export default App;
