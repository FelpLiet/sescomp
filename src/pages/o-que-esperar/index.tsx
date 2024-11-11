import styles from "./o-que-esperar.module.scss";
import { Button } from "../../components/Button";
import { Icon } from "../../components/icons";
import conteudoImg from "../../assets/o-que-esperar/conteudo.png";
import entretenimentoImg from "../../assets/o-que-esperar/entretenimento.png";
import zenImg from "../../assets/o-que-esperar/zen.png";
import { conteudo as conteudoData } from "../../data/conteudo";
import { entretenimento as entretenimentoData } from "../../data/entretenimento";

export function OQueEsperar() {
    const handleNavigation = () => {
        window.open("https://www.even3.com.br/sescomp-vii/", "_blank");
    };

    function editalLink(link: string) {
        window.open(link, "_blank");
    }

    return (
        <>
            <section id="o-que-esperar" className={styles.OQueEsperar}>
                <div className={styles.infoContainer}>
                    <div className={styles.indicator}>
                        <p>Início &gt; <span>O que esperar</span></p>
                    </div>
                    <div className={styles.info}>
                        <h1>Conteúdo</h1>
                        <p>
                            A Arena de Conteúdo é o núcleo de aprendizado do
                            evento, onde o conhecimento e a troca de ideias
                            ganham destaque. Esse espaço foi criado para
                            inspirar e aprofundar o entendimento dos
                            participantes, com uma programação rica! Essa arena
                            oferece um ambiente ideal para expandir
                            conhecimentos, explorar novas perspectivas e se
                            conectar com outras mentes curiosas.
                        </p>
                        <span onClick={handleNavigation}>
                            <Button.Root style="primary">
                                <Button.Content label="Inscreva-se nas atividades" />
                                <Button.Icon icon={Icon.Arrow} />
                            </Button.Root>
                        </span>
                    </div>
                    <img className={styles.conteudoImg} src={conteudoImg}></img>
                </div>
                <div className={styles.conteudo}>
                    {conteudoData.map((conteudo) => (
                        <div key={conteudo.title} className={styles.card}>
                            <h2>{conteudo.title}</h2>
                            <p>{conteudo.description}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h1>Entretenimento</h1>
                        <p>
                            A Arena de Entretenimento é o coração vibrante do
                            evento, onde a descontração e a criatividade se
                            encontram. Esse espaço foi pensado para proporcionar
                            momentos de conexão, diversão e cultura aos
                            participantes, com uma programação repleta de
                            atividades envolventes como competições,
                            apresentações ao vivo, é o espaço ideal para
                            aproveitar ao máximo o evento, conectando-se com
                            novas pessoas e recarregando as energias.
                        </p>
                    </div>
                    <img
                        className={styles.entretenimentoImg}
                        src={entretenimentoImg}
                    ></img>
                </div>
                <div className={styles.entretenimento}>
                    {entretenimentoData.map((entretenimento) => (
                        <div key={entretenimento.title} className={styles.card}>
                            <div className={styles.details}>
                                <div className={styles.text}>
                                    <h2>{entretenimento.title}</h2>
                                    <p>{entretenimento.description}</p>
                                </div>
                                <div className={styles.premios}>
                                    {entretenimento.prize &&
                                        entretenimento.prize.length > 0 && (
                                            <>
                                                <h3>Prêmios:</h3>
                                                <ul>
                                                    {entretenimento.prize.map(
                                                        (prize, index) => (
                                                            <li key={index}>
                                                                {prize}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </>
                                        )}
                                </div>
                            </div>
                            {entretenimento.link && (
                                <span
                                    onClick={() =>
                                        editalLink(entretenimento.link)
                                    }
                                >
                                    <Button.Root style="secondary">
                                        <Button.Content label="Ver edital" />
                                        <Button.Icon icon={Icon.Arrow} />
                                    </Button.Root>
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <h1>Zen</h1>
                        <p>
                            A Arena Zen é o espaço dedicado ao descanso e ao
                            bem-estar dos participantes, proporcionando um
                            ambiente tranquilo para quem deseja relaxar e
                            recarregar as energias. Focada em promover momentos
                            de pausa em meio à agitação do evento. Esse é o
                            lugar ideal para quem busca equilíbrio e calma,
                            garantindo uma experiência renovadora que permite
                            aproveitar o evento ao máximo.
                        </p>
                    </div>
                    <img
                        className={styles.zenImg}
                        src={zenImg}
                    ></img>
                </div>
            </section>
        </>
    );
}
