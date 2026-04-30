import { useEffect, useState } from "react";
import "./App.css";
import * as api from "./api/itemsApi";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

export default function App() {
  const [items, setItems] = useState<any[]>([]);
//Siin React võtab andmed backendist ja salvestab need state'i, et kuvada UI-s.
const load = async () => {
  const res = await api.fetchItems();
  console.log("LOADED:", res.data);
  setItems([...res.data]);
};
//See käivitab andmete laadimise automaatselt, kui leht avaneb.
  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>My Data App</h1>

      <ItemForm
        onAdd={async (name: string) => {
          await api.createItem(name);
          await load();
        }}
      />

      <ItemList
        items={items}
        onDelete={async (id: number) => {
          await api.deleteItem(id);
          await load();
        }}
        onUpdate={async (id: number, name: string) => {
        console.log("UPDATE:", id, name);
        //Pärast muutmist laeme andmed uuesti, et UI oleks ajakohane.
        await api.updateItem(id, name);
        await load();
        }}
      />
    </div>
  );
}