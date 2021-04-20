import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { saveItemToState } from "../../store/actions";

import Button from "../Button/Button";
import styles from "./Recommendation.module.css";

interface RecommendationProps {
  onSelect: () => void;
}
interface PizzaOfDay {
  title: string;
  ingredients: string;
  points: number;
}

export default function Recommendation({ onSelect }: RecommendationProps) {
  const dispatch = useDispatch();
  const [pizzaOfDay, setPizzaOfDay] = useState<PizzaOfDay>();

  const getPizzaOfTheDay = async () => {
    try {
      await api.get<PizzaOfDay>("/pizzaOfDay").then((res) => {
        dispatch(saveItemToState("SET_RECOMMENDATION", res.data));
        setPizzaOfDay(res.data);
      });
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

      <Button title="Selecionar" onClick={onSelect} />
    </div>
  );
}
