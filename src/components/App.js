import React, { useEffect } from "react";

import Layout from "./Layout";
import ImageFinder from "./ImageFinder";

export default function App() {
  useEffect(() => {
    document.title = "hw-03-image-finder";
  }, []);
  return (
    <div>
      <Layout>
        <ImageFinder />
      </Layout>
    </div>
  );
}
