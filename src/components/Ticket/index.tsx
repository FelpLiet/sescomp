import { Button } from "../Button";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import TicketImg from "../../assets/images/Ticket.png"

export function Ticket() {
  const handleNavigation = () => {
    window.open('https://www.even3.com.br/sescomp-vii/', '_blank');
  };
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
          <Button.Content label="Garantir meu ingresso" onClick={handleNavigation} />
          <Button.Icon icon={Icon.Arrow} />
        </Button.Root>
      </section>
      <section className={styles.card}>
        <img src={TicketImg} alt="ingresso" />
      </section>
    </div>
  );
}
