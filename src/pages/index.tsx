import DoughStep from "../components/DoughStep/DoughStep";
import FlavorStep from "../components/FlavorStep/FlavorStep";
import SizeStep from "../components/SizeStep/SizeStep";
import CrustStep from "../components/CrustStep/CrustStep";
import styles from "../styles/Home.module.css";
import Recommendation from "../components/Recommendation/Recommendation";
import Button from "../components/Button/Button";

export default function Home() {
  const goToNextStep = () => {};

  return (
    <div className={styles.container}>
      <h1>iPizza Delivery</h1>

      <Recommendation />

      <h2>OU</h2>

      <Button title="Montar minha Pizza" onClick={() => {}} />

      {/* <CrustStep /> */}
      {/* <FlavorStep /> */}
      {/* <SizeStep /> */}

      {/* <DoughStep /> */}

      <footer>
        <p>
          <i>iPizza</i> © Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
