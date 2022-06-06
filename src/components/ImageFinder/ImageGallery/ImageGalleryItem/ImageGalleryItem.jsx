import React from "react";

import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ previewURL, tags, showBigImage }) {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.image}
        src={previewURL}
        alt={tags}
        onClick={showBigImage}
      />
    </li>
  );
}
