import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Icon } from "../icons";
import styles from "./styles.module.scss";

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownMenu.Root onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger className={styles.dropdownMenu}>
                    {isOpen ? <Icon.Close /> : <Icon.Menu />}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={`${styles.dropdownMenuContent} ${
                        isOpen ? styles.dropdownMenuContentOpen : ""
                    }`}
                >
                    {children}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
