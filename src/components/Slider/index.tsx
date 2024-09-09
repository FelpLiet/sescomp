import styles from "./styles.module.scss";
import { Button } from "../Button";

export function Slider() {

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow__container}>
        <img src="" alt="" />
        <h1>Venha se reinventar</h1>
        <h6>IA e Ética - O Futuro é Agora!</h6>
        <Button.Root>
          <Button.Content label="Participar do Evento" />
        </Button.Root>
      </div>
    </div>
  );
}
