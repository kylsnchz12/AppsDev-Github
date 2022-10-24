import React, { useState } from "react";
import List from "./List";
import Categories from "./Categories";
import items from "./data";
import './App.css'

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [listItems, setListItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setListItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setListItems(newItems);
  };

  return (
    <main>
      <section className="mainContainer">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <List items={listItems} />
      </section>
    </main>
  );
}

export default App;
