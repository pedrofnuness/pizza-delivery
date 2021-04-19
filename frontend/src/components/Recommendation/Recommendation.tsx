import React, { useEffect, useState } from "react";
import api from "../../services/api";

import Button from "../Button/Button";
import styles from "./Recommendation.module.css";

interface PizzaOfDay {
  title: string;
  ingredients: string;
  points: number;
}

export default function Recommendation() {
  const [pizzaOfDay, setPizzaOfDay] = useState<PizzaOfDay>();

  const getPizzaOfTheDay = async () => {
    try {
      await api
        .get<PizzaOfDay>("/pizzaOfDay")
        .then((res) => setPizzaOfDay(res.data));
    } catch {
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  useEffect(() => {
    getPizzaOfTheDay();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Pizza do dia!</h2>

      <img
        src={"pizzaOfTheDay.png"}
        alt="Pizza"
        className={styles.pizzaImage}
      />
      <p className={styles.ingredients}>
        Ingredientes: {pizzaOfDay?.ingredients}
      </p>

      <Button title="Selecionar" onClick={() => {}} />
    </div>
  );
}
