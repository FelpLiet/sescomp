import styles from "./styles.module.scss";
import backgroundImg from "../../assets/images/headerBackground.png";
import tituloImg from "../../assets/header/tituloBackground.svg";

interface HeaderProps {
    title: string;
}

const backgroundColors = [
    { name: "Programação", bgColor: "#480CA8" },
    { name: "Patrocinadores", bgColor: "#F72585" },
    { name: "Manual", bgColor: "#4361EE" },
    { name: "Loja", bgColor: "#F2F2F2" },
    { name: "Expectativas", bgColor: "#F2F2F2" },
    { name: "Em Breve...", bgColor: "#004aa2" },
    { name: "Loja oficial", bgColor: "#4361EE" },
];

export function Header({ title }: HeaderProps) {
    const overlayColor =
        backgroundColors.find((bg) => bg.name === title)?.bgColor || "#F2F2F2";
    return (
        <section className={styles.header}>
            <div
                className={styles.background}
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                }}
            />
            <div
                className={styles.overlay}
                style={{
                    backgroundColor: overlayColor,
                }}
            />
            <div className={styles.titulo}>
                <h1>{title}</h1>
                <img src={tituloImg} alt={title} loading="eager" />
            </div>
        </section>
    );
}
