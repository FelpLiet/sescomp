import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
export function DropdownMenuItem({ children }: { children: ReactNode} ) {
  return (
    <>
      <DropdownMenu.Item>{children}</DropdownMenu.Item>
    </>
  );
}
