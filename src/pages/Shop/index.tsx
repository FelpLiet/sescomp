import styles from "./styles.module.scss";
// import { Button } from "../../components/Button";
// import { Icon } from "../../components/icons";
import { Header } from "../../shared/header";

export function Shop() {
  return (
    <>
      <Header title="Loja oficial" />
      <section className={styles.shop}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>Loja oficial</h1>
            <p>A venda dos produtos é apenas presencial</p>
          </div>
        </div>
      </section>
    </>
  );
}
