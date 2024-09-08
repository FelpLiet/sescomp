import styles from "./styles.module.scss";
import image from "../../assets/images/image_public.png";
import { Button } from "../Button";
export function AboutEvent() {
  return (
    <section className={styles.aboutEvent}>
      <div>
        <h1>
          O QUE <br />
          ESPERAR?
        </h1>
        <Button.Root>
          <Button.Content label="Ver detalhes do evento"></Button.Content>
        </Button.Root>
      </div>
      <div className={styles.container}>
        <AboutEventCard
          image={image}
          title="Conteúdo"
          description="O evento tem minicursos, palestras, maratona de programação, hackathon, game in the dark;"
        />
        <AboutEventCard
          color="#80053D"
          background="#F725854D"
          image={image}
          title="Entretenimento"
          description="Competições de e-sports, concurso de cosplay, sala geek, aulas de luta, karaoke;"
        />
        <AboutEventCard
          color="#1F0547"
          background="#3A0CA34D"
          image={image}
          title="Zen"
          description="Espaço de massagem e descanso;"
        />
      </div>
    </section>
  );
}

function AboutEventCard({
  title,
  description,
  image,
  background = "#4361ee4d",
  color = "#08175E",
}: {
  title: string;
  description: string;
  image: string;
  background?: string;
  color?: string;
}) {
  return (
    <div
      style={{ backgroundColor: background, border: "1px solid " + color }}
      className={styles.card}
    >
      <img width={"100%"} src={image} alt="" />
      <div style={{ padding: "24px" }}>
        <h2 style={{ color: color }}>{title}</h2>
        <p style={{ color: color }}>{description}</p>
      </div>
    </div>
  );
}
