import EmbreveImg from "../../assets/images/embreve.png";
import BackgroundEmbreveImg from "../../assets/images/backgroundembreve.png";
import styles from "./styles.module.scss";


export function EmBreve(){
  return (
    <section
      className={styles.Embreve}
      style={{
        backgroundImage: `url(${BackgroundEmbreveImg})`,
      }}
    >
      <div>
        <img src={EmbreveImg} alt="Em breve" loading="eager" />
      </div>
    </section>
  );
}
