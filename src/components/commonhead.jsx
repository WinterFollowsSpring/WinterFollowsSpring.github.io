import * as React from "react";
import styles from '../scss/styles.scss';

export default function CommonHead({ pageName }) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{pageName} | Bonnie Glen Luxury Candles</title>
      <link rel="stylesheet" href={styles} />
    </>
  );
}