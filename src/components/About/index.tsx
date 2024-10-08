import styles from "./styles.module.scss";
import Background from "../../assets/images/about.png";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { LegacyRef, forwardRef, useState } from "react";
import { Icon } from "../icons";
import Modal from "../Modal";

export function About() {
  const [isModalOpen, setModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
      <section
          className={styles.about}
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      >
        <div className={styles.title}>
          <h1>
            CONHEÇA A <br />
            SESCOMP
          </h1>
          <button onClick={openModal}>
            <Icon.Play />
          </button>
        </div>
        <div className={styles.accordionRoot}>
          {/* Defina "collapsible" como false para sempre manter um item aberto */}
          <Accordion.Root type="single" defaultValue="item-1" collapsible={false}>
            <Accordion.Item className={styles.accordionItem} value="item-1">
              <AccordionTrigger className={styles.accordionTrigger}>
                O que é a Sescomp?
                <Icon.Minus className={styles.accordionMinus} />
                <Icon.Plus className={styles.accordionPlus} />
              </AccordionTrigger>
              <AccordionContent className={styles.accordionContent}>
                A Semana de Engenharia de Software e Ciência da Computação
                (SESCOMP) é um evento que conecta mentes brilhantes: alunos,
                professores e profissionais que compartilham a paixão pela
                tecnologia. Durante uma semana, você poderá imergir em uma
                programação vibrante, com palestras motivadoras, espaços dinâmicos
                e atividades práticas que irão aprofundar sua paixão pela
                tecnologia e fortalecer suas conexões com outros entusiastas.
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className={styles.accordionItem} value="item-2">
              <AccordionTrigger className={styles.accordionTrigger}>
                Pra quem é SESCOMP?
                <Icon.Minus className={styles.accordionMinus} />
                <Icon.Plus className={styles.accordionPlus} />
              </AccordionTrigger>
              <AccordionContent className={styles.accordionContent}>
                O evento recebe estudantes universitários, de ensino médio, as
                comunidades locais e entusiastas da tecnologia que desejam se
                atualizar, aprender novas habilidades e expandir sua rede de
                contatos. Se você é apaixonado por inovação e busca crescer nesse
                universo, a SESCOMP é para você.
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className={styles.accordionItem} value="item-3">
              <AccordionTrigger className={styles.accordionTrigger}>
                Por que ir na SESCOMP?
                <Icon.Minus className={styles.accordionMinus} />
                <Icon.Plus className={styles.accordionPlus} />
              </AccordionTrigger>
              <Accordion.Content className={styles.accordionContent}>
                O evento busca fomentar o espírito profissional, de ensino e de
                pesquisa, e extensão, promovendo o compartilhamento do
                conhecimento, estimulando a inovação pela colaboração, conectando
                ideias e pessoas, e transformando vidas pela inspiração, em
                benefício da população.A Semana de Engenharia de Software e
                Ciência da Computação - SESCOMP - é um evento realizado anualmente
                pelos alunos e professores dos Cursos de Engenharia de Software e
                Ciência da Computação da Universidade Federal do Ceará - Campus
                Russas.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <Modal show={isModalOpen} onClose={closeModal}>
          {/* Vídeo do YouTube */}
          <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tzrxhuL28RY?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
        </Modal>
      </section>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = forwardRef<HTMLDivElement, AccordionTriggerProps>(
    ({ children, className, ...props }: AccordionTriggerProps, forwardedRef) => (
        <Accordion.Header className={styles.accordionHeader}>
          <Accordion.Trigger
              className={classNames("AccordionTrigger", className)}
              {...props}
              ref={forwardedRef as LegacyRef<HTMLButtonElement>}
          >
            {children}
          </Accordion.Trigger>
        </Accordion.Header>
    )
);

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ children, className, ...props }: AccordionContentProps, forwardedRef) => (
        <Accordion.Content
            className={classNames("AccordionContent", className)}
            {...props}
            ref={forwardedRef}
        >
          <div className={styles.accordionContentText}>{children}</div>
        </Accordion.Content>
    )
);
