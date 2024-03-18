import { ReactNode } from "react";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import { DropdownMenu } from "../DropdownMenu";
interface NavRootProps {
  children: ReactNode;
}

export function NavRoot({ children }: NavRootProps) {
  return (
    <nav className={styles.navbar}>
      <Icon.Sescomp />
      <div className={styles.content}>
        <ul>{children}</ul>
        <Button.Root>
          <Button.Content label="Participar do Evento"></Button.Content>
        </Button.Root>
      </div>
      <div className={styles.menu}>
        <DropdownMenu.Root>
          <DropdownMenu.Item>
            <ul>{children}</ul>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Button.Root>
              <Button.Content label="Participar do Evento"></Button.Content>
            </Button.Root>
          </DropdownMenu.Item>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
}
