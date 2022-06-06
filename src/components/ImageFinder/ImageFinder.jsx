import React, { useEffect, useState } from "react";

import { alert } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

import ImageService from "../../API/ImageService";
import Loader from "../UI/Loader";
import Modal from "../UI/Modal";
import { useFetching } from "../../hooks/useFetching";

import styles from "./ImageFinder.module.css";

export default function ImageFinder() {
  let [searchQuery, setSearchQuery] = useState("popular");
  let [images, setImages] = useState([]);
  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let [canLoad, setCanLoad] = useState(false);
  // for modal
  let [modalState, setModalState] = useState(false);
  let [bigImgUrl, setBigImgUrl] = useState("");
  let [bigImgTag, setBigImgTag] = useState("");

  let [fetchImages, isLoading, fetchError, setFetchError] = useFetching(
    async () => {
      const data = await ImageService.getImagesByTagAndPage(searchQuery, page);
      setImages([...images, ...data.hits]);
      setTotalPages(Math.ceil(data.totalHits / 12));
    }
  );

  useEffect(() => {
    if (page < totalPages) {
      setCanLoad(true);
    } else {
      setCanLoad(false);
    }
  }, [isLoading]);

  useEffect(() => {
    fetchImages();
  }, [page, searchQuery]);

  const handleSearchFormSubmit = (searchValue) => {
    setImages([]);
    setSearchQuery(searchValue);
    if (page !== 1) {
      setPage(1);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const showBigImage = (imgUrl, tag) => {
    setBigImgUrl(imgUrl);
    setBigImgTag(tag);
    setModalState(true);
  };

  const handleModalClose = () => {
    setModalState(false);
  };

  const showAlert = () => {
    alert({
      title: "Error",
      text: `Oops, there's some error: ${fetchError}`,
      type: "notice",
      delay: 2500,
    });
    setFetchError("");
  };

  return (
    <div className={styles.container}>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      {modalState && (
        <Modal
          source={bigImgUrl}
          altText={bigImgTag}
          onModalClose={handleModalClose}
        />
      )}
      {isLoading && <Loader />}
      {fetchError && showAlert()}
      <ImageGallery
        images={images}
        onLoadMore={handleLoadMore}
        showBigImage={showBigImage}
        isLoading={isLoading}
        canLoad={canLoad}
      />
    </div>
  );
}
