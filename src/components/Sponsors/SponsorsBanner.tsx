import styles from "./styles.module.scss";
import Reactangle from "../../assets/title.svg";

export function SponsorsBanner() {
  return (
    <figure className={styles.banner}>
      <img src={Reactangle} alt="title" />
      <figcaption>
        <h2>empresas</h2>
        <h6>que apoiam a sescomp</h6>
      </figcaption>
    </figure>
  );
}
