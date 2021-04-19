import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styles from "./DoughStep.module.css";

export default function DoughStep() {
  const doughTypes = ["Tradicional", "Nova-Iorquina", "Siciliana"];

  const [selected, setSelected] = useState(0);

  const nextDoughType = () => {
    setSelected((prev) => (prev + 1) % 3);
  };

  const prevDoughType = () => {
    setSelected((prev) =>
      prev === 0 ? doughTypes.length - 1 : (prev - 1) % 3
    );
  };

  return (
    <section className={styles.dough}>
      <p>Escolha a massa:</p>

      <div className={styles.doughNameWrapper}>
        <button className={styles.arrowButton} onClick={prevDoughType}>
          <FiChevronLeft size={25} />
        </button>

        <p className={styles.selected}>{doughTypes[selected]}</p>

        <button className={styles.arrowButton} onClick={nextDoughType}>
          <FiChevronRight size={25} />
        </button>
      </div>

      <img src="editablePizza.png" width={150} />
    </section>
  );
}
