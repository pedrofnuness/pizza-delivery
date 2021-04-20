import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import api from "../../services/api";
import Button from "../Button/Button";
import styles from "./StepsComponent.module.css";

export default function StepsComponent({ step, onConfirm }) {
  const [selected, setSelected] = useState<number>(0);
  const [list, setList] = useState<Array<String>>([]);
  const [stepTitle, setStepTitle] = useState("");

  const getItemsFromApi = async () => {
    await api.get<Array<String>>(step).then((res) => {
      setList(res.data);
      setSelected(0);
    });
  };

  const getStepTitle = () => {
    switch (step) {
      case "sizes":
        return setStepTitle("Escolha o tamanho");
      case "doughs":
        return setStepTitle("Escolha a massa");
      case "flavors":
        return setStepTitle("Escolha o sabor");
      case "crusts":
        return setStepTitle("Escolha a borda");
    }
  };

  useEffect(() => {
    getItemsFromApi();
    getStepTitle();
  }, [step]);

  const nextDoughType = () => {
    setSelected((prev) => (prev + 1) % list.length);
  };

  const prevDoughType = () => {
    setSelected((prev) =>
      prev === 0 ? list.length - 1 : (prev - 1) % list.length
    );
  };

  return (
    <section className={styles.container}>
      <p>{stepTitle}:</p>

      <div className={styles.itemWrapper}>
        <button className={styles.arrowButton} onClick={prevDoughType}>
          <FiChevronLeft size={25} />
        </button>

        <p className={styles.selected}>{list[selected]}</p>

        <button className={styles.arrowButton} onClick={nextDoughType}>
          <FiChevronRight size={25} />
        </button>
      </div>

      <img className={styles.pizzaImage} src="editablePizza.png" width={180} />

      <Button title="Selecionar" onClick={() => onConfirm(list[selected])} />
    </section>
  );
}
