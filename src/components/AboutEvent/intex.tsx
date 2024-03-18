import styles from "./styles.module.scss";
export function AboutEvent() {
  return (
    <section className={styles.aboutEvent}>
      <div>
        <h1>
          O QUE <br />
          ESPERAR?
        </h1>
      </div>{" "}
      padding: 16px 50px; width: 20%;
      <div>
        <div className={styles.card}>
          <h2>Programação</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Programação</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Programação</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
