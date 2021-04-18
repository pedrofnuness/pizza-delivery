import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./SizeStep.module.css";

export default function SizeStep() {
  const pizzaSizes = ["Média(30 cm)", "Grande (40 cm)", "Família (50 cm)"];

  const [selected, setSelected] = useState(0);

  const nextPizzaSize = () => {
    setSelected((prev) => (prev + 1) % 3);
  };

  const prevPizzaSize = () => {
    setSelected((prev) =>
      prev === 0 ? pizzaSizes.length - 1 : (prev - 1) % 3
    );
  };

  return (
    <section className={styles.container}>
      <p>Escolha a tamanho:</p>

      <div className={styles.pizzaSizeWrapper}>
        <button className={styles.arrowButton} onClick={prevPizzaSize}>
          <FiChevronLeft size={25} />
        </button>

        <p className={styles.selected}>{pizzaSizes[selected]}</p>

        <button className={styles.arrowButton} onClick={nextPizzaSize}>
          <FiChevronRight size={25} />
        </button>
      </div>

      <img src="editablePizza.png" width={150} />
    </section>
  );
}
