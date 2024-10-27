// src/components/programacao/ActivityCard.tsx
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

const categoryColors: { [key: string]: string } = {
    'Palestra': '#31009D',
    'Videoconferência': '#6C24BD',
    'Roda de Conversa': '#B88BFF',
    'Minicurso': '#F72585',
    'Fórum': '#F870A9',
    'Oficina': '#930059',
    'Atividade Cultural': '#00A5E3',
    'Code Time': '#70D1EE',
    'Organização': '#00609D',
};

export function ActivityCard({ name, speaker, location, time, category: type, date }: ActivityCardProps) {
    const categoryColor = categoryColors[type] || `#000`

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
                        {location}
                    </div>
                    <div className={styles.info}>
                        <img src={clock} alt="Clock" /> 
                        {time}
                    </div>
                </div>
            </div>
            <div className={styles.cardDate}>
                <div className={styles.dia}>
                    <span>{date}</span>
                    <img src={bgDia} alt="Icone Dia" />
                </div>
                <div className={styles.categoria} style={{backgroundColor: categoryColor}}>
                    {type}
                </div>
            </div>
        </div>
    );
}