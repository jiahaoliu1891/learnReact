import React  from "react";
import styles from './Griditem.module.css'

const Griditem = (props) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{props.fact.title}</h2>
            <article className={styles.fact}>{props.fact.fact}</article>
        </div>
    )
}

export default Griditem;

