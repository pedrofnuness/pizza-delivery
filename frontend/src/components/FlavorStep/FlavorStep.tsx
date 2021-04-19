import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./FlavorStep.module.css";

export default function FlavorStep() {
  const flavors = ["Calabresa", "Muzzarela", "Catupiri"];

  const [selected, setSelected] = useState(0);

  const nextPizzaFlavor = () => {
    setSelected((prev) => (prev + 1) % 3);
  };

  const prevPizzaFlavor = () => {
    setSelected((prev) => (prev === 0 ? flavors.length - 1 : (prev - 1) % 3));
  };

  return (
    <section className={styles.container}>
      <p>Escolha a sabor:</p>

      <div className={styles.flavorWrapper}>
        <button className={styles.arrowButton} onClick={prevPizzaFlavor}>
          <FiChevronLeft size={25} />
        </button>

        <p className={styles.selected}>{flavors[selected]}</p>

        <button className={styles.arrowButton} onClick={nextPizzaFlavor}>
          <FiChevronRight size={25} />
        </button>
      </div>

      <img src="editablePizza.png" width={150} />
    </section>
  );
}
