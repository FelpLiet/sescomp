import { Button } from "../Button";
import { Icon } from "../icons";
import styles from "./styles.module.scss";

export function Shop() {
  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <h1>Loja Oficial</h1>
        <Button.Root style="primary">
          <Button.Content label="Ver todos" />
          <Icon.Arrow />
        </Button.Root>
      </div>
      <section>
        <div className={styles.card}>
          <img src="" alt="Produto" />
          <span>Camisa</span>
          <h6>R$ 50,00</h6>
          <Button.Root style="primary">
            <Button.Content label="Comprar agora" />
            <Icon.Arrow />
          </Button.Root>
        </div>
        <div className={styles.card}>
          <img src="" alt="Produto" />
          <span>Camisa</span>
          <h6>R$ 50,00</h6>
          <Button.Root style="primary">
            <Button.Content label="Comprar agora" />
            <Icon.Arrow />
          </Button.Root>
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
