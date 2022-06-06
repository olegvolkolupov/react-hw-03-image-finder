import React, { useEffect } from "react";

import styles from "./Modal.module.css";

export default function Modal({ source, altText, onModalClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEscape = (event) => {
    if (event.code === "Escape") {
      onModalClose();
    }
  };

  const closeModal = () => {
    onModalClose();
  }

  return (
    <div className={styles.Overlay} onClick={closeModal} >
      <div className={styles.Modal}>
        <img src={source} alt={altText} />
      </div>
    </div>
  );
}
