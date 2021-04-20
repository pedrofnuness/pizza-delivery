import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveItemToState } from "../store/actions";

import Checkout from "../components/Checkout";
import Benefits from "../components/Benefits";
import Button from "../components/Button/Button";
import StepsComponent from "../components/StepsComponent";
import Recommendation from "../components/Recommendation/Recommendation";

import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<number>(0);
  const [actualStep, setActualStep] = useState<string>("Home");

  const list = ["sizes", "doughs", "flavors", "crusts"];

  const nextPage = () => {
    if (selected === list.length - 1) {
      setActualStep("checkout");
    }

    setSelected((prev) => (prev + 1) % list.length);
  };

  const handleNavigate = (selectedItem: string) => {
    nextPage();

    switch (list[selected]) {
      case "sizes":
        dispatch(saveItemToState("SET_SIZE", selectedItem));
        break;
      case "doughs":
        dispatch(saveItemToState("SET_DOUGH", selectedItem));
        break;
      case "flavors":
        dispatch(saveItemToState("SET_FLAVOR", selectedItem));
        break;
      case "crusts":
        dispatch(saveItemToState("SET_CRUST", selectedItem));
        break;
    }
  };

  const SetStepToShow = () => {
    if (actualStep === "Home") {
      return (
        <>
          <Recommendation onSelect={() => setActualStep("benefits")} />

          <h2>OU</h2>

          <Button
            title="Montar minha Pizza"
            onClick={() => setActualStep("sizes")}
          />
        </>
      );
    } else if (actualStep === "sizes") {
      return (
        <>
          <StepsComponent
            step={list[selected]}
            onConfirm={(selected: string) => handleNavigate(selected)}
          />
        </>
      );
    } else if (actualStep === "checkout") {
      return <Checkout />;
    } else if (actualStep === "benefits") {
      return <Benefits />;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle} onClick={() => setActualStep("Home")}>
        iPizza Delivery
      </h1>

      <SetStepToShow />

      <footer>
        <p>
          <i>iPizza</i> © Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
