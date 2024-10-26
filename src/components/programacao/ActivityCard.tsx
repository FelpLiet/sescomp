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

export function ActivityCard({ name, speaker, location, time, category: type, date }: ActivityCardProps) {
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
                <div className={styles.categoria}>
                    {type}
                </div>
            </div>
        </div>
    );
}