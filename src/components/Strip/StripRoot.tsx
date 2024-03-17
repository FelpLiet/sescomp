import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface StripRootProps {
  children: ReactNode;
}

export function StripRoot({ children }: StripRootProps) {
  return <div className={styles.strip}>{children}</div>;
}