import styles from "./styles.module.scss";
import Imgitem from "../../assets/item.png";
import { Icon } from "../icons";

interface ScheduleItemProps {
        name: string;
        location: string;
        time: string;
        date: string;
        height?: string;
    }

export const ScheduleItem = ({ name, date, time, location, height: lineHeight = "150px" }: ScheduleItemProps) => {
    return (
        <div className={styles.scheduleItem}>
            <h3>{date}/11</h3>
            <figure>
                <img src={Imgitem} alt="Separador" />
                <Icon.Line height={lineHeight} />
            </figure>
            <div>
                <h2>{name}</h2>
                <p>
                    Horário: <span>{time}</span>
                </p>
                <p>
                    Local: <span>{location}</span>
                </p>
            </div>
        </div>
    );
}