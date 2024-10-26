import { useState } from "react";
import styles from "./styles.module.scss";
import { Header } from "../header";
import { ActivityCard } from "./ActivityCard";
import triangles from "../../assets/icon/TRIANGLES.svg";

const activities = [
    {
        date: '11/11 - Segunda-feira',
        events: [
            { name: 'Nome da Atividade', speaker: 'Nome do Palestrante', location: 'Auditório', time: '09:00', category: 'Cerimônia', date: '11' },
            { name: 'Palestra 1', speaker: 'Prof. Souza', location: 'Sala 1', time: '10:00', category: 'Palestra', date: '11' },
        ],
    },
    {
        date: '12/11 - Terça-feira',
        events: [
            { name: 'Workshop 1', speaker: 'Eng. Lima', location: 'Sala 2', time: '09:00', category: 'Workshop', date: '12' },
            { name: 'Palestra 2', speaker: 'Dr. Costa', location: 'Auditório', time: '11:00', category: 'Palestra', date: '12' },
        ],
    },
    {
        date: '13/11 - Quarta-feira',
        events: [
            { name: 'Mesa Redonda', speaker: 'Vários', location: 'Auditório', time: '14:00', category: 'Discussão', date: '13' },
            { name: 'Palestra 3', speaker: 'Prof. Almeida', location: 'Sala 1', time: '16:00', category: 'Palestra', date: '13' },
        ],
    },
    {
        date: '14/11 - Quinta-feira',
        events: [
            { name: 'Encerramento', speaker: 'Dr. Silva', location: 'Auditório', time: '18:00', category: 'Cerimônia', date: '14' },
        ],
    },
];

export function Programacao() {
    const [selectedDate, setSelectedDate] = useState('11/11 - Segunda-feira');
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    const handleDateChange = (date: string) => {
        setFadeOut(true);
        setTimeout(() => {
            setSelectedDate(date);
            setFadeOut(false);
            setFadeIn(true);
            setTimeout(() => {
                setFadeIn(false);
            }, 300); // Tempo da transição de fade-in
        }, 300); // Tempo da transição de fade-out
    }
    
    const selectedActivities = activities.find(activity => activity.date === selectedDate)?.events || [];

    return (
        <>
            <Header title="Programação" bgColor="lightblue" />
            <section className={styles.Programacao}>
                <div className={styles.atividades}>
                    <div className={styles.datas}>
                        {activities.map(activity => (
                            <button
                                key={activity.date}
                                className={activity.date === selectedDate ? styles.selected : ''}
                                onClick={() => handleDateChange(activity.date)}
                            >
                                {activity.date === selectedDate && <img src={triangles} alt="Triangles" className={`${fadeOut ? styles.triangleFadeOut : ''} ${fadeIn ? styles.triangleFadeIn : ''}`} />}
                                {activity.date}
                                {activity.date === selectedDate && <img src={triangles} alt="Triangles" className={`${fadeOut ? styles.triangleFadeOut : ''} ${fadeIn ? styles.triangleFadeIn : ''}`} />}
                            </button>
                        ))}
                    </div>
                    <div className={styles.cardAtividades}>
                        {selectedActivities.map((activity, index) => (
                            <ActivityCard
                                key={index}
                                name={activity.name}
                                speaker={activity.speaker}
                                location={activity.location}
                                time={activity.time}
                                category={activity.category}
                                date={activity.date}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
