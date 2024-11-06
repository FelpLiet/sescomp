import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { SpeakerItem } from "./speakerItem";
import Carousel from "../Carousel";
import { Button } from "../Button";
import { Icon } from "../icons";
import alessandro from "../../assets/palestrante/alessandro.png";
import gabriela from "../../assets/palestrante/gabriela.png";
import izequiel from "../../assets/palestrante/izequiel.png";
import nina from "../../assets/palestrante/nina.png";
import paulina from "../../assets/palestrante/paulina.png";
import sandro from "../../assets/palestrante/sandro.png";
import silveira from "../../assets/palestrante/silveira.png";
import thales from "../../assets/palestrante/thales.png";
import yago from "../../assets/palestrante/yago.png";
import fernanda from "../../assets/palestrante/fernanda.png";

const speakersJson = [
    { name: "Izequiel Pereira", image: izequiel },
    { name: "Nina Talks", image: nina },
    { name: "Thales Wylmar", image: thales },
    { name: "Paulina Freitas", image: paulina },
    { name: "Silveira Neto", image: silveira },
    { name: "Gabriela Q.", image: gabriela },
    { name: "Sandro Costa", image: sandro },
    { name: "Alessandro F.", image: alessandro },
    { name: "Yago Marques", image: yago },
    { name: "Fernanda Kipper", image: fernanda },
];

export function Speakers() {
    const [visibleItems, setVisibleItems] = useState(3);

    const handleNavigation = () => {
        window.open("https://www.even3.com.br/sescomp-vii/", "_blank");
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setVisibleItems(1);
            } else if (width <= 960) {
                setVisibleItems(2);
            } else {
                setVisibleItems(3);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="speakers" className={styles.speakers}>
            <h1>Palestrantes</h1>
            <Carousel visibleItems={visibleItems}>
                {speakersJson.map((speaker, index) => (
                    <SpeakerItem
                        key={index}
                        name={speaker.name}
                        image={speaker.image}
                    />
                ))}
            </Carousel>
            <span style={{ marginTop: "24px" }}>
                <Button.Root>
                    <Button.Content
                        onClick={handleNavigation}
                        label="Participar do Evento"
                    />
                    <Button.Icon icon={Icon.Arrow} />
                </Button.Root>
            </span>
        </div>
    );
}
