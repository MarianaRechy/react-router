import React from "react";
import styles from "./Image.module.scss"

const Image = ({image}) => {
    return(
        <div className={styles.imageCont}>
        <img src={image} alt="card" />
       </div>
    )
};

export default Image;