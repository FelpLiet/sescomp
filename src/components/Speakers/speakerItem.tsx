import styles from "./styles.module.scss";
import ImgSpeakers from "../../assets/speakers.png";


interface SpeakerItemProps {
    name: string;
    image: string;
    }

export const SpeakerItem: React.FC<SpeakerItemProps> = ({ name, image }) => {  return (
    <figure className={styles.speakerItem}>
      <img src={ImgSpeakers} alt="Palestrante" />
      <figcaption>
        <h6>palestrante confirmado</h6>
        <h1>{name}</h1>
      </figcaption>
      <div>
        <img src={image} alt={`Palestrante ${name}`} />
      </div>
    </figure>
  );
}