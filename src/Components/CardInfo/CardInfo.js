import React from "react";
import styles from '../CardInfo/CardInfo.module.scss'

const CardInfo = (props) => {
    return(
        <div className={styles.infoCard}>
            <div className={styles.label}>
            <label>{props.label}</label>
            </div>
            <div className={styles.content}>
            <p>{props.content}</p>
            </div>
        </div>
    )
};

export default CardInfo;