import styles from "./styles.module.scss";
import alura from "../../assets/sponsors/terabyte/alura.svg";
import apodi from "../../assets/sponsors/gigabyte/apodi.svg";
import seelab from "../../assets/sponsors/gigabyte/seelab.svg";
import fitbank from "../../assets/sponsors/megabyte/fitbank.svg";
import upvalue from "../../assets/sponsors/megabyte/upvalue.svg";
import cyrille from "../../assets/sponsors/megabyte/cyrille.svg";
import oticasAfagu from "../../assets/sponsors/kilobyte/oticaAfagu.svg";
import ffit from "../../assets/sponsors/byte/ffit.svg";
import command from "../../assets/sponsors/byte/command.svg";
import yeloo from "../../assets/sponsors/parceiros/yeloo.svg";
import brisanet from "../../assets/sponsors/parceiros/brisanet.svg";
import MDStudio from "../../assets/sponsors/parceiros/MDStudio.svg";
import geekDungeon from "../../assets/sponsors/parceiros/geekDungeon.svg";

interface SponsorComponentProps {
  types: string[];
}

const sponsors = {
  terabyte: [{ src: alura, alt: "Patrocinador Alura" }],
  gigabyte: [
    { src: apodi, alt: "Patrocinador Apodi" },
    { src: seelab, alt: "Patrocinador Seelab" },
  ],
  megabyte: [
    { src: fitbank, alt: "Patrocinador FitBank" },
    { src: upvalue, alt: "Patrocinador Upvalue" },
    { src: cyrille, alt: "Patrocinador Cyrille" },
  ],
  kilobyte: [{ src: oticasAfagu, alt: "Patrocinador Óticas Afagu" }],
  byte: [
    { src: ffit, alt: "Patrocinador Ffit" },
    { src: command, alt: "Patrocinador Command" },
  ],
  parceiros: [
    { src: yeloo, alt: "Patrocinador Yeloo" },
    { src: brisanet, alt: "Patrocinador Brisanet" },
    { src: MDStudio, alt: "Patrocinador MDStudio" },
    { src: geekDungeon, alt: "Patrocinador Geek Dungeon" },
  ],
};

export function SponsorComponent({ types }: SponsorComponentProps) {
  return (
    <div className={styles.sponsors}>
      {types.includes("terabyte") && (
        <div>
          <h3>Terabyte</h3>
          <div className="terabyte">
            {sponsors.terabyte.map((sponsor, index) => (
              <img key={index} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>
        </div>
      )}
      {types.includes("gigabyte") && (
        <div>
          <h3>Gigabyte</h3>
          <div className="gigabyte">
            {sponsors.gigabyte.map((sponsor, index) => (
              <img key={index} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>
        </div>
      )}
      {types.includes("megabyte") && (
        <div>
          <h3>Megabyte</h3>
          <div className="megabyte">
            {sponsors.megabyte.map((sponsor, index) => (
              <img key={index} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>
        </div>
      )}
      {types.includes("kilobyte") && (
        <div>
          <h3>Kilobyte</h3>
          <div className="kilobyte">
            {sponsors.kilobyte.map((sponsor, index) => (
              <img key={index} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>
        </div>
      )}
      {types.includes("byte") && (
        <div>
          <h3>Byte</h3>
          <div className="byte">
            {sponsors.byte.map((sponsor, index) => (
              <img key={index} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>
        </div>
      )}
      {types.includes("parceiros") && (
        <div>
          <h3>Parceiros</h3>
          <div className="parceiros">
            {sponsors.parceiros.map((sponsor, index) => (
              <img key={index} src={sponsor.src} alt={sponsor.alt} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}