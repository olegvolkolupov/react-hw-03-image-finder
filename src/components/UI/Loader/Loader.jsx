import React from "react";

import { SpinnerCircular } from "spinners-react";

import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.container}>
      <SpinnerCircular
        size={90}
        thickness={180}
        speed={100}
        color="rgba(67, 57, 172, 1)"
        secondaryColor="rgba(0, 0, 0, 0.16)"
      />
    </div>
  );
}
