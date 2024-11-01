import { ReactNode } from "react";
import { Icon } from "../../components/icons";
import styles from "./styles.module.scss";
import { Button } from "../../components/Button";
import { DropdownMenu } from "../../components/DropdownMenu";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
import React from "react";

interface NavRootProps {
  children: ReactNode;
}

export function NavRoot({ children }: NavRootProps) {
  const handleNavigation = () => {
    window.open('https://www.even3.com.br/sescomp-vii/', '_blank');
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <Icon.Sescomp />
        </Link>
      </div>
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
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}
