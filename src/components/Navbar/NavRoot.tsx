import { ReactNode } from "react";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import { DropdownMenu } from "../DropdownMenu";
import Dropdown from "../Dropdown";
interface NavRootProps {
  children: ReactNode;
}

export function NavRoot({ children }: NavRootProps) {
  const handleNavigation = () => {
    window.open('https://www.even3.com.br/sescomp-vii/', '_blank');
  };

  return (
    <nav className={styles.navbar}>
      <Icon.Sescomp />
      <div className={styles.content}>
        <ul>
          {children}
          <Dropdown />
        </ul>
        <Button.Root>
          <Button.Content label="Participar do Evento" onClick={handleNavigation}></Button.Content>
        </Button.Root>
      </div>
      <div className={styles.menu}>
        <DropdownMenu.Root>
          <DropdownMenu.Item>
            <ul>{children}
            <Dropdown listView={true} />
            </ul>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Button.Root>
              <Button.Content label="Participar do Evento" onClick={handleNavigation}></Button.Content>
            </Button.Root>
          </DropdownMenu.Item>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
}
