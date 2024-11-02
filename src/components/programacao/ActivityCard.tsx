import { Button } from "../Button";
import styles from './styles.module.scss';
import mapPin from '../../assets/icon/MAP-PIN.svg';
import clock from '../../assets/icon/CLOCK.svg';
import bgDia from '../../assets/icon/BG-DIA.svg';

interface ActivityCardProps {
    name: string;
    speaker: string;
    location: string;
    time: string;
    category: string;
    date: string;
}

const categoryColors = [
    {
        "category": "Palestra",
        "bgColor": "#31009D",
        "textColor": "#FFFFFF"
    },
    {
        "category": "Videoconferência",
        "bgColor": "#6C24BD",
        "textColor": "#FFFFFF"
    },
    {
        "category": "Roda de Conversa",
        "bgColor": "#B88BFF",
        "textColor": "#000000"
    },
    {
        "category": "Minicurso",
        "bgColor": "#F72585",
        "textColor": "#FFFFFF"
    },
    {
        "category": "Fórum",
        "bgColor": "#F870A9",
        "textColor": "#000000"
    },
    {
        "category": "Oficina",
        "bgColor": "#930059",
        "textColor": "#FFFFFF"
    },
    {
        "category": "Atividade Cultural",
        "bgColor": "#00A5E3",
        "textColor": "#000000"
    },
    {
        "category": "Code Time",
        "bgColor": "#70D1EE",
        "textColor": "#000000"
    },
    {
        "category": "Organização",
        "bgColor": "#00609D",
        "textColor": "#FFFFFF"
    }
]

const getCategoryColor = (category: string) => {
    const categoryColor = categoryColors.find(categoryColor => categoryColor.category === category);
    return categoryColor || { bgColor: "#FFFFFF", textColor: "#000000" };
}


export function ActivityCard({ name, speaker, location, time, category: type, date }: ActivityCardProps) {
    const { bgColor, textColor } = getCategoryColor(type);
    const handleNavigation = () => {
        window.open('https://www.even3.com.br/participante/sessions/', '_blank');
      };

    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <div className={styles.titulo}>
                    <h3>{name}</h3>
                    <p>{speaker}</p>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <img src={mapPin} alt="Map Pin" /> 
                        {location ? location : "Em breve"}
                    </div>
                    <div className={styles.info}>
                        <img src={clock} alt="Clock" /> 
                        {time}
                    </div>
                </div>
                <div className={styles.desktop} onClick={handleNavigation}>
                    <Button.Root>
                        <Button.Content
                            label="Inscreva-se na atividade"
                        />
                    </Button.Root>
                </div>
            </div>
            <div className={styles.cardDate}>
                <div className={styles.dia}>
                    <span>{date}</span>
                    <img src={bgDia} alt="Icone Dia" />
                </div>
                    <div className={styles.categoria} style={{backgroundColor: bgColor, color: textColor}}>
                        {type}
                    </div>
            </div>
            <div className={styles.mobile} onClick={handleNavigation}>
                <>
                    <Button.Root>
                        <Button.Content
                            label="Inscreva-se na atividade"
                            />
                    </Button.Root>
                </>
            </div>
        </div>
    );
}