import { useState } from "react";
import styles from "./styles.module.scss";
import { Header } from "../header";
import { ActivityCard } from "./ActivityCard";
import triangles from "../../assets/icon/TRIANGLES.svg";
import activitiesJson from "../../data/activities.json";

const activities = activitiesJson;

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
                    <div className={styles.datasContainer}>
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
