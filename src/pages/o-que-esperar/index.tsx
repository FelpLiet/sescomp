import styles from "./o-que-esperar.module.scss";
import { Button } from "../../components/Button";
import { Icon } from "../../components/icons";
import conteudo from "../../assets/o-que-esperar/conteudo.png";

export function OQueEsperar() {
    const handleNavigation = () => {
        window.open("https://www.even3.com.br/sescomp-vii/", "_blank");
    }

    return (
        <>
            <section id="o-que-esperar" className={styles.OQueEsperar}>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h1>Conteúdo</h1>
                        <p>
                            A Arena de Conteúdo é o núcleo de aprendizado do evento,
                            onde o conhecimento e a troca de ideias ganham destaque.
                            Esse espaço foi criado para inspirar e aprofundar o
                            entendimento dos participantes, com uma programação
                            rica! Essa arena oferece um ambiente ideal para expandir
                            conhecimentos, explorar novas perspectivas e se conectar
                            com outras mentes curiosas.
                        </p>
                        <span onClick={handleNavigation}>
                            <Button.Root style="primary">
                                <Button.Content label="Inscreva-se nas atividades" />
                                <Button.Icon icon={Icon.Arrow} />
                            </Button.Root>
                        </span>
                    </div>
                    <img src={conteudo}></img>
                </div>
            </section>
        </>
    );
}
