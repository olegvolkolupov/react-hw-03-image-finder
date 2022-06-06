import React, { useState } from "react";

import styles from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  let [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}
