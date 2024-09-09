import { Button } from "../Button";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import LogoQrcode from "../../assets/logo-qrcode.png"

export function Ticket() {
  return (
    <div className={styles.ticket}>
      <section className={styles.info}>
        <h1>Garanta seu ingresso</h1>
        <div>
          <Icon.Check />
          <span>Acesso aos 4 dias de Evento</span>
        </div>
        <div>
          <Icon.Check />
          <span>Acessoa sala de entretenimento</span>
        </div>
        <div>
          <Icon.Check />
          <span>Certificado com horas complementares</span>
        </div>
        <Button.Root>
          <Button.Content label="Garantir meu ingresso" />
          <Button.Icon icon={Icon.Arrow} />
        </Button.Root>
      </section>
      <section className={styles.card}>
        <img src={LogoQrcode} alt="Logo QR code" />
        <div>
          <h1>SESCOMP - UFC RUSSAS</h1>
          <span>Data: 22 a 25 de abril</span>
          <span>Local: Universidade Federal do Ceará - Campus de Russas</span>
          <h2>R$ 0,00</h2>
        </div>
      </section>
    </div>
  );
}
