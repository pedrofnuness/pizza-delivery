import DoughStep from "../components/DoughStep";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>iPizza Delivery</h1>

      <DoughStep />

      <button className={styles.button}>Selecionar</button>

      <footer>
        <p>
          <i>iPizza</i> © Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
