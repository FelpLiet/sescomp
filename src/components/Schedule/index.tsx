import { Button } from "../Button";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import ImgScheduleTitle from "../../assets/title-schedule.png";
import Imgitem from "../../assets/item.png";
import TextIllustrative from "../../assets/images/texto_programcao.png";

export function Schedule() {
  return (
    <div className={styles.schedule}>
      <ScheduleTitle />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem height="400px" />
      <img src={TextIllustrative} alt="Texto ilustrativo" />
      <span className={styles.btn}>
        <Button.Root>
          <Button.Content label="Ver programação completa" />
          <Button.Icon icon={Icon.Arrow} />
        </Button.Root>
      </span>
    </div>
  );
}

function ScheduleTitle() {
  return (
    <figure className={styles.scheduleTitle}>
      <img src={ImgScheduleTitle} alt="title" />
      <figcaption>
        <h1>Programação</h1>
      </figcaption>
    </figure>
  );
}

function ScheduleItem({ height = "150px" }: { height?: string }) {
  return (
    <div className={styles.scheduleItem}>
      <h3>11/11</h3>
      <figure>
        <img src={Imgitem} alt="Separador" />
        <Icon.Line height={height} />
      </figure>
      <div>
        <h2>Em breve</h2>
        <p>
          Horário:<span>Em breve</span>
        </p>
        <p>
          Local:<span>Em breve</span>
        </p>
      </div>
    </div>
  );
}
