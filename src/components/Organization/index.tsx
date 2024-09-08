import styles from "./styles.module.scss";
import ImgOrganization from "../../assets/images/logos_organizacao.png";
import ImgTitle from "../../assets/images/title.png";

export function Organization() {

  return (
    <div className={styles.organization}>
      <img className={styles.organization_img_title} src={ImgTitle} alt="" />
      <img
        className={styles.organization_img_org}
        src={ImgOrganization}
        alt=""
      />
    </div>
  );
}
