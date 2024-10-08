import EmbreveImg from "../../assets/images/embreve.png";
import styles from "./styles.module.scss";


export function EmBreve(){
  return (
    <section className={styles.Embreve}>
      <div>
        <img src={EmbreveImg} alt="Em breve" />
      </div>
    </section>
  );
}
