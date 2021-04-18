import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./CrustStep.module.css";

export default function CrustStep() {
  const crusts = ["Chocolate", "Cheddar", "Catupiry"];

  const [selected, setSelected] = useState(0);

  const nextPizzaCrust = () => {
    setSelected((prev) => (prev + 1) % 3);
  };

  const prevPizzaCrust = () => {
    setSelected((prev) => (prev === 0 ? crusts.length - 1 : (prev - 1) % 3));
  };

  return (
    <section className={styles.container}>
      <p>Escolha a borda:</p>

      <div className={styles.flavorWrapper}>
        <button className={styles.arrowButton} onClick={prevPizzaCrust}>
          <FiChevronLeft size={25} />
        </button>

        <p className={styles.selected}>{crusts[selected]}</p>

        <button className={styles.arrowButton} onClick={nextPizzaCrust}>
          <FiChevronRight size={25} />
        </button>
      </div>

      <img src="editablePizza.png" width={150} />
    </section>
  );
}
