import { Button } from "../Button";
import { Icon } from "../icons";
import styles from "./styles.module.scss";

export function Shop() {
  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Loja oficial</h1>
          <p>A venda dos produtos é apenas presencial</p>
        </div>
        <Button.Root style="primary">
          <Button.Content label="Ver todos os produtos" />
          <Icon.Arrow />
        </Button.Root>
      </div>
      <section>
        <div className={styles.card}>
          <img src="" alt="Produto" />
          <span>Camisa</span>
          <h6>R$ 50,00</h6>
        </div>
        <div className={styles.card}>
          <img src="" alt="Produto" />
          <span>Camisa</span>
          <h6>R$ 50,00</h6>
        </div>
        <div className={styles.card}>
          <img src="" alt="Produto" />
          <span>Camisa</span>
          <h6>R$ 50,00</h6>
        </div>
        <div className={styles.card}>
          <img src="" alt="Produto" />
          <span>Camisa</span>
          <h6>R$ 50,00</h6>
        </div>
      </section>
      <span className={styles.btn}>
        <Button.Root style="primary">
          <Button.Content label="Ver todos" />
          <Icon.Arrow />
        </Button.Root>
      </span>
    </div>
  );
}
