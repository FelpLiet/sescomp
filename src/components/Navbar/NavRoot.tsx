import { ReactNode } from "react";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import { Button } from "../Button";
interface NavRootProps {
  children: ReactNode;
}

export function NavRoot({ children }: NavRootProps) {
  return (
    <nav className={styles.navbar}>
      <Icon.Sescomp />
      <ul>{children}</ul>
      <Button.Root>
        <Button.Content label="Participar do Evento"></Button.Content>
        <Button.Icon
          icon={Icon.Arrow} 
        />
      </Button.Root>
    </nav>
  );
}
