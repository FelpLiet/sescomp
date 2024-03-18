import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Icon } from "../icons";
import styles from "./styles.module.scss";
export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.dropdownMenu}>
          <Icon.Menu />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownMenuContent}>{children}</DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
