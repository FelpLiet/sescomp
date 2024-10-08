import styles from "./styles.module.scss";
import { Button } from "../Button";

export function Slider() {
  const handleNavigation = () => {
    window.open('https://www.even3.com.br/sescomp-vii/', '_blank');
  };
  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow__container}>
        <h1>
          <span>O <b>&nbsp;maior&nbsp;</b> evento</span>
          <span>de tecnologia do</span>
          <span>Vale do Jaguaribe</span>
        </h1>
        <h6>
          <span>Venha se reinventar |&nbsp;</span>
          <span>IA e Ética - O Futuro é Agora!</span>
        </h6>
        <Button.Root>
          <Button.Content label="Participar do Evento"  onClick={handleNavigation}/>
        </Button.Root>
      </div>
    </div>
  );
}
