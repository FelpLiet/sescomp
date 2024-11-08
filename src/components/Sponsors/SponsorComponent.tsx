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
import lirios from "../../assets/sponsors/parceiros/Lirios.png";
import digitalCollege from "../../assets/sponsors/parceiros/digitalCollege.png";
import leleo from "../../assets/sponsors/parceiros/leleo.png";
import nicarolis from "../../assets/sponsors/parceiros/nicarolis.png";
import panificadora from "../../assets/sponsors/parceiros/panificadora.png";

interface SponsorComponentProps {
  types: string[];
}

const sponsors = {
  terabyte: [
    { src: alura, alt: "Alura - Terabyte", link: "https://www.alura.com.br/" }
  ],
  gigabyte: [
    { src: seelab, alt: "Seelab - Gigabyte", link: "https://www.seelab.ai/en" },
    { src: apodi, alt: "Apodi - Gigabyte", link: "https://cimentoapodi.com.br" }
  ],
  megabyte: [
    { src: fitbank, alt: "Fitbank - Megabyte", link: "https://fitbank.com.br/" },
    { src: upvalue, alt: "UP Value - Megabyte", link: "https://upvalue.com.br/" },
    { src: cyrille, alt: "Cyrille - Gigabyte", link: "https://www.instagram.com/cyrillegrandval?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }
  ],
  kilobyte: [
    { src: oticasAfagu, alt: "Afagu - Kilobyte", link: "https://www.instagram.com/oticasafagu/" }
  ],
  byte: [
    { src: ffit, alt: "FFIT - Byte", link: "https://ffit.com.br/" },
    { src: command, alt: "Command System - Byte", link: "https://commandsystem.com.br" }
  ],
  parceiros: [
    { src: yeloo, alt: "Yeloo - Parceria", link: "https://www.yeloo.com.br/" },
    { src: brisanet, alt: "Brisanet - Parceria", link: "https://www.brisanet.com.br/" },
    { src: MDStudio, alt: "MD Studio - Parceria", link: "https://linktr.ee/mdstudioprodutora?fbclid=PAZXh0bgNhZW0CMTEAAaYBA0g_C3oBF1tD8udOuzSx_ll57TMWtjjRYc33kYqmv-MRRSUOkumgwm4_aem_0_dL6LROY_mljKCHPKFOEA" },
    { src: geekDungeon, alt: "Geek Dungeon - Parceria", link: "https://www.instagram.com/gdungeon_/" },
    { src: lirios, alt: "Lírios Essenciais - Parceria", link: "https://www.instagram.com/liriosessencias.russas/" },
    { src: digitalCollege, alt: "Digital College - Parceria", link: "https://bio.digitalcollege.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAabfE9BYmqE_9sz_MeLcyp8qcRbjJ9mY4K8iDAyX1Fh-cBpCFzzRSZfcORM_aem_i9ksZ2AsRmfabXPylOot_Q" },
    { src: leleo, alt: "Leleo - Parceria", link: "https://www.leleomoveis.com.br" },
    { src: nicarolis, alt: "Nicarolis - Parceria", link: "https://www.instagram.com/nicarolis/" },
    { src: panificadora, alt: "Panificadora - Parceria", link: "https://www.instagram.com/panificadora_sao_jose/" }
  ]
};

export function SponsorComponent({ types }: SponsorComponentProps) {
  return (
    <div className={styles.sponsors}>
      {types.includes("terabyte") && (
        <div>
          <h3>Terabyte</h3>
          <div className={styles.terabyte}>
            {sponsors.terabyte.map((sponsor, index) => (
              <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.src} alt={sponsor.alt} />
              </a>            
            ))}
          </div>
        </div>
      )}
      {types.includes("gigabyte") && (
        <div>
          <h3>Gigabyte</h3>
          <div className={styles.gigabyte}>
            {sponsors.gigabyte.map((sponsor, index) => (
            <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.src} alt={sponsor.alt} />
            </a>
            ))}
          </div>
        </div>
      )}
      {types.includes("megabyte") && (
        <div>
          <h3>Megabyte</h3>
          <div className={styles.megabyte}>
            {sponsors.megabyte.map((sponsor, index) => (
              <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.src} alt={sponsor.alt} />
              </a>            
            ))}
          </div>
        </div>
      )}
      {types.includes("kilobyte") && (
        <div>
          <h3>Kilobyte</h3>
          <div className={styles.kilobyte}>
            {sponsors.kilobyte.map((sponsor, index) => (
              <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.src} alt={sponsor.alt} />
              </a>            
            ))}
          </div>
        </div>
      )}
      {types.includes("byte") && (
        <div>
          <h3>Byte</h3>
          <div className={styles.byte}>
            {sponsors.byte.map((sponsor, index) => (
              <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.src} alt={sponsor.alt} />
              </a>            
            ))}
          </div>
        </div>
      )}
      {types.includes("parceiros") && (
        <div>
          <h3>Parceiros</h3>
          <div className={styles.parceiros}>
            {sponsors.parceiros.map((sponsor, index) => (
              <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className={
                  ["Digital College", "Leleo", "Nicarolis", "Panificadora"].includes(sponsor.alt.split(" - ")[0])
                    ? styles.sponsorImageFix
                    : ""
                }
              />
            </a>           
            ))}
          </div>
        </div>
      )}
    </div>
  );
}