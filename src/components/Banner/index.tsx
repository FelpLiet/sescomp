import { Icon } from "../icons";
import styles from "./styles.module.scss";

export function Banner() {
  return (
    <div>
      <div  className={styles.banner}>
        <Icon.Cycle className={styles.cycle} />
        <Icon.CycleM className={styles.cycleM} />
        <div className={styles.text}>
          <Icon.Banner />
          <h1>
            tecnologia
            <span>
              &amp;
              <br />
            </span>
            networking
            <span>
              &amp;
              <br />
            </span>
            aprendizagem
          </h1>
        </div>
        <Icon.Polygon className={styles.polygon} />
      </div>
    </div>
  );
}
