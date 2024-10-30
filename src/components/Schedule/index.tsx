import { Button } from "../Button";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import ImgScheduleTitle from "../../assets/title-schedule.png";
import ImgPalavras1 from "../../assets/images/palavrasPart1.svg";
import ImgPalavras2 from "../../assets/images/palavrasPart2.svg";
import activitiesJson from "../../data/activities.json";
import { ScheduleItem } from "./scheduleItem";
import { useEffect, useState } from "react";


const activities = activitiesJson.slice(0, 2);

export function Schedule() {
    const handleNavigation = () => {
        window.location.href = "/sescomp/#/programacao";
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getHeight = () => {
        // if (windowWidth <= 508) return "100px";
        if (windowWidth <= 768) return "240px";
        if (windowWidth <= 1024) return "280px";
        return "300px"; // Padrão para telas maiores
    };

    return (
        <div className={styles.schedule}>
            <ScheduleTitle />
			{activities.map((activity) => (
				activity.events.slice(0, 4).map((event, index) => (
					<ScheduleItem 
					key={index}
					name={event.name}
					location={event.location}
					time={event.time}
					date={event.date}
					height={getHeight()}
					/>
				))
			))}
            <img className={styles.imgLeft} src={ImgPalavras1} alt="palavras" />
            <img
                className={styles.imgRight}
                src={ImgPalavras2}
                alt="palavras"
            />
            {/* <img src={TextIllustrative} alt="Texto ilustrativo" /> */}
            <span className={styles.btn}>
                <Button.Root>
                    <Button.Content
                        onClick={handleNavigation}
                        label="Ver programação completa"
                    />
                    <Button.Icon icon={Icon.Arrow} />
                </Button.Root>
            </span>
        </div>
    );
}

function ScheduleTitle() {
    return (
        <figure className={styles.scheduleTitle}>
            <img src={ImgScheduleTitle} alt="title" />
            <figcaption>
                <h1>Programação</h1>
            </figcaption>
        </figure>
    );
}


