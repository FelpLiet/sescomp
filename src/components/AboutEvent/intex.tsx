import styles from "./styles.module.scss";
import { Button } from "../Button";
import { Icon } from "../icons";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import ImagemEntretenimento01 from "../../assets/images/ImagemEntretenimento01.jpg";
import ImagemEntretenimento02 from "../../assets/images/ImagemEntretenimento02.jpg";
import ImagemEntretenimento03 from "../../assets/images/ImagemEntretenimento03.jpg";
import ImagemEntretenimento04 from "../../assets/images/ImagemEntretenimento04.jpg";

import ImagemConteudo01 from "../../assets/images/ImagemConteudo01.jpg";
import ImagemConteudo02 from "../../assets/images/ImagemConteudo02.jpg";
import ImagemConteudo03 from "../../assets/images/ImagemConteudo03.jpg";

import ImagemZen01 from "../../assets/images/ImagemZen01.jpg";
import ImagemZen02 from "../../assets/images/ImagemZen02.jpg";

export function AboutEvent() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/o-que-esperar");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const ImagemZen = [ImagemZen01, ImagemZen02];
    const ImagemEntretenimento = [
        ImagemEntretenimento01,
        ImagemEntretenimento02,
        ImagemEntretenimento03,
        ImagemEntretenimento04,
    ];
    const ImagemConteudo = [
        ImagemConteudo01,
        ImagemConteudo02,
        ImagemConteudo03,
    ];
    return (
        <section className={styles.aboutEvent}>
            <div>
                <h1>
                    O QUE <br />
                    ESPERAR?
                </h1>
                <div style={{ width: "362px" }}></div>
                <span onClick={handleNavigation}>
                    <Button.Root>
                        <Button.Content
                            label="Ver detalhes do evento"
                        ></Button.Content>
                        <Button.Icon icon={Icon.Arrow} />
                    </Button.Root>
                </span>
            </div>
            <div className={styles.container}>
                <AboutEventCard
                    color="#fff"
                    background="#4361EE"
                    images={ImagemConteudo}
                    title="Conteúdo"
                    description="O evento tem minicursos, palestras, maratona de programação, hackathon, game in the dark;"
                />
                <AboutEventCard
                    color="#fff"
                    background="#F72585"
                    images={ImagemEntretenimento}
                    title="Entretenimento"
                    description="Competições de e-sports, concurso de cosplay, sala geek, aulas de luta, karaoke;"
                />
                <AboutEventCard
                    color="#fff"
                    background="#3A0CA3"
                    images={ImagemZen}
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
    images,
    background = "#4361ee4d",
    color = "#08175E",
}: {
    title: string;
    description: string;
    images: string[];
    background?: string;
    color?: string;
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const preloadedImages = useMemo(() => {
        return images.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });
    }, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === preloadedImages.length - 1 ? 0 : prevIndex + 1
                );
                setFade(true);
            }, 500);
        }, 3500);

        return () => clearInterval(interval);
    }, [preloadedImages.length]);

    return (
        <div
            style={{
                backgroundColor: background,
                border: "1px solid " + color,
            }}
            className={styles.card}
        >
            <img
                className={fade ? styles.fadeIn : styles.fadeOut}
                width={"100%"}
                src={preloadedImages[currentImageIndex]?.src}
                alt=""
            />
            <div style={{ padding: "24px", height: "194px" }}>
                <h2 style={{ color: color }}>{title}</h2>
                <p style={{ color: color }}>{description}</p>
            </div>
        </div>
    );
}
