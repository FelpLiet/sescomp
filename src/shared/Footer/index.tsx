import { Icon } from "../../components/icons";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icon}>
        <Icon.Sescomp />
        <div>
          <span>Rua Felipe Santiago, 411 - Cidade Universitária,</span>
          <span> Russas - CE, 62900-000</span>
        </div>
      </div>
      <div className={styles.navigation}>
        <h6>Navegação</h6>
        <ul>
          <li>
            <a href="/sescomp">Inicio</a>
          </li>
          <li>
            <a href="/sescomp">Conheça a SESCOMP</a>
          </li>
          <li>
            <a href="/sescomp">O que esperar?</a>
          </li>
          <li>
            <a href="/sescomp">Palestrantes</a>
          </li>
          <li>
            <a href="/sescomp/#/programacao">Programação</a>
          </li>
          <li>
            <a href="/sescomp/#/em-breve">Loja Oficial</a>
          </li>
          <li>
            <a href="/sescomp/#/patrocinadores">Patrocinadores</a>
          </li>
        </ul>
      </div>
      <div className={styles.importantLinks}>
        <h6>Links importantes</h6>
        <ul>
          <li>
            <a href="https://www.even3.com.br/sescomp-vii/" target="_blank">
              Realizar inscrição no evento
            </a>
          </li>
          <li>
            <a href="/sescomp/#/programacao">Programação</a>
          </li>
          <li>
            <a href="/sescomp/#/manual">Manual</a>
          </li>
        </ul>
      </div>
      <div className={styles.socialNetwork}>
        <h6>Siga-nos nas redes sociais</h6>
        <span>
          <a href="https://www.instagram.com/sescompufc/" target="_blank">
            <Icon.Instagram />
          </a>
          <a href="https://www.linkedin.com/in/sescompufc/" target="_blank">
            <Icon.linkedin />
          </a>
          <a href="https://www.facebook.com/sescompufc/" target="_blank">
            <Icon.Facebook />
          </a>
          <a href="https://www.youtube.com/@sescompufc" target="_blank">
            <Icon.Youtube />
          </a>
        </span>
      </div>
    </footer>
  );
}
