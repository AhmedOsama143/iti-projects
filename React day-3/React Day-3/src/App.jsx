// import "./App.module.css";
// import Counter from "./Components/Counter/Counter";

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import { items } from "./Data.js";
import styles from "./App.module.css";

export default function App() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.type === filter);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>My Watchlist</h1>

      <select
        className={styles.dropdown}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="tv">TV Shows</option>
      </select>

      <ul className={styles.list}>
        {filteredItems.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemType}>{item.type.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
