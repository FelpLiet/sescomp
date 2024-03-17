import styles from "./styles.module.scss";
interface ButtonRootProps {
  style?:string;
  children: React.ReactNode;
}
export default function ButtonRoot({
  style = "secondary",
  children,
}: ButtonRootProps) {
  return (
    <div
      className={`${styles.button} ${
        style == "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </div>
  );
}
