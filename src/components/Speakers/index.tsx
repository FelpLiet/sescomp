import styles from "./styles.module.scss";
import ImgSpeakers from "../../assets/speakers.png";
import Person_1 from "../../assets/images/palestrante.png";
import Person_2 from "../../assets/images/palestrante_1.png";
import Person_3 from "../../assets/images/palestrante_2.png";
import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Icon } from "../icons";

export function Speakers() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(mobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.speakers}>
      <h1>Palestrantes</h1>
      <Carousel visibleItems={isMobile ? 1 : 3}>
        <SpeakerItem image={Person_1} />
        <SpeakerItem image={Person_2} />
        <SpeakerItem image={Person_3} />
      </Carousel>
      <span style={{ marginTop: "24px" }}>
        <Button.Root>
          <Button.Content label="Ver programação completa" />
          <Button.Icon icon={Icon.Arrow} />
        </Button.Root>
      </span>
    </div>
  );
}

interface SpeakerItemProps {
  image: string;
}

function SpeakerItem({ image }: SpeakerItemProps) {
  return (
    <figure className={styles.speakerItem}>
      <img src={ImgSpeakers} alt="Palestrante" />
      <figcaption>
        <h6>palestrante confirmao</h6>
        <h1>em breve</h1>
      </figcaption>
      <div>
        <img src={image} alt="Palestrante" />
      </div>
    </figure>
  );
}
