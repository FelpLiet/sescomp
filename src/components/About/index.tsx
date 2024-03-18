import styles from "./styles.module.scss";
import Background from "../../assets/images/about.png";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { LegacyRef, forwardRef } from "react";
import { Icon } from "../icons";
export function About() {
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
        <button>
          <Icon.Play />
        </button>
      </div>
      <div className={styles.accordionRoot}>
        <Accordion.Root type="single" defaultValue="item-1" collapsible>
          <Accordion.Item className={styles.accordionItem} value="item-1">
            <AccordionTrigger className={styles.accordionTrigger}>
              O que é a Sescomp?
              <Icon.Minus className={styles.accordionMinus} />
              <Icon.Plus className={styles.accordionPlus} />
            </AccordionTrigger>
            <AccordionContent className={styles.accordionContent}>
              A Semana de Engenharia de Software e Ciência da Computação -
              SESCOMP - é um evento realizado anualmente pelos alunos e
              professores dos Cursos de Engenharia de Software e Ciência da
              Computação da Universidade Federal do Ceará - Campus Russas.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className={styles.accordionItem} value="item-2">
            <AccordionTrigger className={styles.accordionTrigger}>
              Pra quem é SESCOMP?
              <Icon.Minus className={styles.accordionMinus} />
              <Icon.Plus className={styles.accordionPlus} />
            </AccordionTrigger>
            <AccordionContent className={styles.accordionContent}>
              A Semana de Engenharia de Software e Ciência da Computação -
              SESCOMP - é um evento realizado anualmente pelos alunos e
              professores dos Cursos de Engenharia de Software e Ciência da
              Computação da Universidade Federal do Ceará - Campus Russas.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className={styles.accordionItem} value="item-3">
            <AccordionTrigger className={styles.accordionTrigger}>
              Por que ir na SESCOMP?
              <Icon.Minus className={styles.accordionMinus} />
              <Icon.Plus className={styles.accordionPlus} />
            </AccordionTrigger>
            <Accordion.Content className={styles.accordionContent}>
              A Semana de Engenharia de Software e Ciência da Computação -
              SESCOMP - é um evento realizado anualmente pelos alunos e
              professores dos Cursos de Engenharia de Software e Ciência da
              Computação da Universidade Federal do Ceará - Campus Russas.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
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
