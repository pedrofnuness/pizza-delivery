import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Button from "../Button/Button";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const order = useSelector((state: RootState) => state.orderState);

  const [isFinished, setIsFinished] = useState<Boolean>(false);

  return (
    <>
      {isFinished ? (
        <>
          <h3>Seu pedido já está sendo preparado!</h3>
          <p>Por favor aguarde.</p>
        </>
      ) : (
        <div className={styles.container}>
          <h3>Finalize seu pedido!</h3>

          <div className={styles.order}>
            <p>Tamanho: {order.size}</p>
            <p>Massa: {order.dough}</p>
            <p>Sabor: {order.flavor}</p>
            <p>Borda: {order.crust}</p>
          </div>

          <Button title="Finalizar" onClick={() => setIsFinished(true)} />
        </div>
      )}
    </>
  );
}
