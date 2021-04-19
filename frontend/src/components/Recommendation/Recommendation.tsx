import React from "react";
import Button from "../Button/Button";
import styles from "./Recommendation.module.css";

export default function Recommendation() {
  return (
    <div className={styles.container}>
      <h2>Pizza do dia!</h2>

      <img
        src={"pizzaOfTheDay.png"}
        alt="Pizza"
        className={styles.pizzaImage}
      />
      <p className={styles.ingredients}>
        Ingredientes: Calabresa, Queijo, Pimentão, Tomate e Azeitona.
      </p>

      <Button title="Selecionar" onClick={() => {}} />
    </div>
  );
}
