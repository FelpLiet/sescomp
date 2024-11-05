import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Header } from "../../shared/header";
import { ActivityCard } from "../../components/programacao/ActivityCard";
import { Ticket } from "../../shared/Ticket";
import triangles from "../../assets/icon/TRIANGLES.svg";
import activitiesJson from "../../data/activities.json";

interface Event {
    name: string;
    speaker: string;
    location: string;
    time: string;
    category: string;
    date: string;
    link: string;
}

interface Activity {
    date: string;
    events: Event[];
}

const jsonUrl =
    "https://raw.githubusercontent.com/FelpLiet/sescomp/refs/heads/main/src/data/activities.json";

export function Programacao() {
    const [selectedDate, setSelectedDate] = useState("11/11 - Segunda-feira");
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch(jsonUrl);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: Activity[] = await response.json();
                setActivities(data);
            } catch (error) {
                console.error("Erro ao buscar os dados remotos:", error);
                setActivities(activitiesJson as Activity[]);
            }
        };

        fetchActivities();
    }, []);

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
    };

    const selectedActivities =
        activities.find((activity) => activity.date === selectedDate)?.events ||
        [];

    return (
        <>
            <Header title="Programação" />
            <section className={styles.Programacao}>
                <div className={styles.atividades}>
                    <div className={styles.datasContainer}>
                        <div className={styles.datas}>
                            {activities.map((activity) => (
                                <button
                                    key={activity.date}
                                    className={
                                        activity.date === selectedDate
                                            ? styles.selected
                                            : ""
                                    }
                                    onClick={() =>
                                        handleDateChange(activity.date)
                                    }>
                                    <img
                                        src={triangles}
                                        alt="Triangles"
                                        className={`${
                                            activity.date === selectedDate
                                                ? styles.triangleNormal
                                                : styles.triangleSmall
                                        }`}
                                    />
                                    {activity.date}
                                    <img
                                        src={triangles}
                                        alt="Triangles"
                                        className={`${
                                            activity.date === selectedDate
                                                ? styles.triangleNormal
                                                : styles.triangleSmall
                                        }`}
                                    />
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
                                link={activity.link}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Ticket />
        </>
    );
}
