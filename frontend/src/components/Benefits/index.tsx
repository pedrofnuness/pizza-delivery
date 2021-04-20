import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Button from "../Button/Button";
import styles from "./Benefits.module.css";

export default function Benefits() {
  const { pizzaData } = useSelector(
    (state: RootState) => state.recommendationState
  );

  const [isFinished, setIsFinished] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      {isFinished ? (
        <>
          <h3>Seu pedido já está sendo preparado!</h3>
          <p>Por favor aguarde.</p>
        </>
      ) : (
        <>
          <h2>PARABÉNS!</h2>
          <p>
            Você acabou de ganhar {pizzaData.points} pontos de benefícios no
            nosso restaurante.
          </p>
          <p className={styles.lastParagraph}>
            Junte 12 pontos e você ganhará uma pizza Família de graça.
          </p>

          <Button
            title="Finalizar pedido"
            onClick={() => setIsFinished(true)}
          />
        </>
      )}
    </div>
  );
}
