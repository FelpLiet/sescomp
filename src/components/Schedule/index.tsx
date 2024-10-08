import { Button } from "../Button";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import ImgScheduleTitle from "../../assets/title-schedule.png";
import Imgitem from "../../assets/item.png";
import ImgPalavras1 from "../../assets/images/palavrasPart1.svg";
import ImgPalavras2 from "../../assets/images/palavrasPart2.svg";
import { useEffect, useState } from "react";

export function Schedule() {
     const handleNavigation = () => {
       window.location.href = "/sescomp/#/programacao";
     };

      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
      }, []);

      const getHeight = () => {
        if (windowWidth <= 508) return "200px";
        if (windowWidth <= 768) return "280px";
        if (windowWidth <= 1024) return "350px";
        return "400px"; // Padrão para telas maiores
      };
  
  return (
    <div className={styles.schedule}>
      <ScheduleTitle />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem height={getHeight()} />
      <img className={styles.imgLeft} src={ImgPalavras1} alt="palavras" />
      <img className={styles.imgRight} src={ImgPalavras2} alt="palavras" />
      {/* <img src={TextIllustrative} alt="Texto ilustrativo" /> */}
      <span className={styles.btn}>
        <Button.Root>
          <Button.Content
            onClick={handleNavigation}
            label="Ver programação completa"
          />
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
