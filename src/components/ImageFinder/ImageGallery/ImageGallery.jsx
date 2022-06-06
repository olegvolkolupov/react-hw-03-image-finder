import React from "react";

import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";

import styles from "./ImageGallery.module.css";

export default function ImageGallery({
  images,
  onLoadMore,
  showBigImage,
  isLoading,
  canLoad,
}) {
  if (images.length <= 0 && !isLoading) {
    return <div className={styles.message}>Images not found</div>;
  }

  return (
    <>
      <ul className={styles.imageGallery}>
        {images.map(({ id, previewURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            previewURL={previewURL}
            tags={tags}
            showBigImage={() => showBigImage(largeImageURL, tags)}
          />
        ))}
      </ul>
      {canLoad && (
        <div className={styles.buttonContainer}>
          <Button loadMore={onLoadMore} />
        </div>
      )}
    </>
  );
}
