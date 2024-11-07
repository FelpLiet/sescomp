import { ReactNode } from "react";
import { Icon } from "../../components/icons";
import styles from "./styles.module.scss";
import { Button } from "../../components/Button";
import { DropdownMenu } from "../../components/DropdownMenu";
import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";

interface NavRootProps {
  children: ReactNode;
}

export function NavRoot({ children }: NavRootProps) {
  const handleNavigation = () => {
    window.open('https://www.even3.com.br/sescomp-vii/', '_blank');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={handleLogoClick}>
          <Icon.Sescomp />
        </Link>
      </div>
      <div className={styles.content}>
        <ul>
          {children}
          <Dropdown />
        </ul>
        <div className={styles.desktop} onClick={handleNavigation}>
          <Button.Root>
            <Button.Content label="Participar do Evento"></Button.Content>
          </Button.Root>
        </div>
      </div>
      <div className={styles.menu}>
        <DropdownMenu.Root>
          <DropdownMenu.Item>
            <ul>{children}
            <Dropdown listView={true} />
            </ul>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <div className={styles.participarButton} onClick={handleNavigation}>
              <>
                <Button.Root>
                  <Button.Content label="Participar do Evento"></Button.Content>
                </Button.Root>
              </>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
}
