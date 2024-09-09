import { SponsorsBanner } from "./SponsorsBanner";
import styles from "./styles.module.scss";
import Tera from "../../assets/sponsors/terabyte/else.png";
import Fit from "../../assets/sponsors/gigabyte/fitbank.png";
import Brisanet from "../../assets/sponsors/gigabyte/brisanet.svg";
import Yelee from "../../assets/sponsors/megabyte/yelee.png";
import Nicarolis from "../../assets/sponsors/megabyte/Nicarolis.png";
import Ffit from "../../assets/sponsors/megabyte/ffit.png";
import Capyweb from "../../assets/sponsors/kilobyte/capyweb.png";
import Sauto from "../../assets/sponsors/kilobyte/sauto.png";
import Codix from "../../assets/sponsors/kilobyte/codix.png";
import Lucena from "../../assets/sponsors/kilobyte/lucena.png";
import Include from "../../assets/sponsors/byte/include.png";

export function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <SponsorsBanner />
      <div>
        <h3>Terabyte</h3>
        <div className="terabyte">
          <img src={Tera} alt="Patrocinador Else" />
        </div>
        <h3>Gigabyte</h3>
        <div className="gigabyte">
          <img src={Brisanet} alt="Patrocinador Brisanet" />
          <img src={Fit} alt="Patrocinador FitBank" />
        </div>
        <h3>Megabyte</h3>
        <div className="megabyte">
          <img src={Yelee} alt="Patrocinador Else" />
          <img src={Nicarolis} alt="Patrocinador Else" />
          <img src={Ffit} alt="Patrocinador Else" />
        </div>
        <h3>Kilobyte</h3>
        <div className="kilobyte">
          <img src={Sauto} alt="Patrocinador Else" />
          <img src={Lucena} alt="Patrocinador Else" />
          <img src={Codix} alt="Patrocinador Else" />
          <img src={Capyweb} alt="Patrocinador Else" />
        </div>
        <h3>Byte</h3>
        <div className="byte">
          <img src={Include} alt="Patrocinador Else" />
          <img src={Sauto} alt="Patrocinador Else" />
          <img src={Lucena} alt="Patrocinador Else" />
          <img src={Codix} alt="Patrocinador Else" />
          <img src={Capyweb} alt="Patrocinador Else" />
        </div>
      </div>
    </div>
  );
}
