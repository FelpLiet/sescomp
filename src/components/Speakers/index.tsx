import styles from "./styles.module.scss";
import { SpeakerItem } from "./speakerItem";
import jessica from "../../assets/palestrante/jessica.png";
import amalia from "../../assets/palestrante/amalia.png";
import antonio from "../../assets/palestrante/antonio.png";
import bruno from "../../assets/palestrante/bruno.png";
import francisco from "../../assets/palestrante/francisco.png";
import gabriela from "../../assets/palestrante/gabriela.png";
import julissy from "../../assets/palestrante/julissy.png";
import michelle from "../../assets/palestrante/michelle.png";
import nayara from "../../assets/palestrante/nayara.png";
import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Icon } from "../icons";

const speakersJson = [
    { name: "Jessica Neiva", image: jessica },
    { name: "Amália Beatriz", image: amalia },
    { name: "Antonio W.", image: antonio },
    { name: "Bruno Lessa", image: bruno },
    { name: "Francisco R.", image: francisco },
    { name: "Gabriela Q.", image: gabriela },
    { name: "Julissy Bezerra", image: julissy },
    { name: "Michelle A.", image: michelle },
    { name: "Nayara Valesvski", image: nayara },
];

export function Speakers() {
    const [isMobile, setIsMobile] = useState(false);
    const handleNavigation = () => {
        window.open("https://www.even3.com.br/sescomp-vii/", "_blank");
    };
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
                {speakersJson.map((speaker, index) => (
                    <SpeakerItem key={index} name={speaker.name} image={speaker.image} />
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
