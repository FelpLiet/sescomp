import styles from "./styles.module.scss";

import UFC from "../../assets/images/UFC.png";
import CC from "../../assets/images/CC.png";
import ES from "../../assets/images/ES.png";
import ImgTitle from "../../assets/images/title.png";

export function Organization() {
    return (
        <div className={styles.organization}>
            <img
                className={styles.organization_img_title}
                src={ImgTitle}
                alt=""
            />
            <div className={styles.organization_logos}>
                <img
                    className={styles.organization_img_org}
                    src={UFC}
                    alt="Universidade Federal do Ceará"
                />
                <img
                    className={styles.organization_img_org}
                    src={CC}
                    alt="Ciência da Computação"
                />
                <img
                    className={styles.organization_img_org}
                    src={ES}
                    alt="Engenharia de Software"
                />
            </div>
        </div>
    );
}
