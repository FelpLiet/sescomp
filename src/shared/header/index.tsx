import styles from "./styles.module.scss";
import backgroundImg from "../../assets/images/backgroundembreve.jpg";
import tituloImg from "../../assets/header/tituloBackground.svg";

interface HeaderProps {
    title: string;
    bgColor?: string;
}

export function Header({ title, bgColor }: HeaderProps) {
    return (
        <section
            className={styles.header}
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundColor: bgColor || "transparent",
            }}
        >
            <div className={styles.titulo}>
                <h1>{title}</h1>
                <img src={tituloImg} alt={title} loading="eager" />
            </div>
        </section>
    );
}
