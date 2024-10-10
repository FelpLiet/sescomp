import styles from "./styles.module.scss";

interface BigNumberProps {
  number: string;
  label: string;
}

function BigNumber({ number, label }: BigNumberProps){
  return (
    <div className={styles.bigNumber}>
      <div className={styles.number}>{number}</div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

// Componente principal que utiliza o BigNumber
function BigNumbers(){
  const data = [
    { number: '1k+', label: 'inscritos' },
    { number: '80+', label: 'atividades' },
    { number: '100+', label: 'palestrantes' },
    { number: '180h+', label: 'horas de conteúdo' },
  ];

  return (
    <div className={styles.bigNumbersContainer}>
      <h2 className={styles.title}>big numbers</h2>
      <p className={styles.subtitle}>como foi a sescomp23 em números</p>
      <div className={styles.numbersGrid}>
        {data.map((item, index) => (
          <BigNumber key={index} number={item.number} label={item.label} />
        ))}
      </div>
    </div>
  );
}

export default BigNumbers;
