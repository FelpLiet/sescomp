import styles from "./styles.module.scss";
import ImgBanner from "../../assets/banners.svg";

export function Banner() {
  return (
    <div className={styles.banner}>
        <img src={ImgBanner} alt="Banner" />
    </div>
  );
}
