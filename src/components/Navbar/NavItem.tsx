import { AnchorHTMLAttributes } from "react";
interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export function NavItem({label, ...rest }: NavItemProps) {
  return(
    <li><a {...rest}>{label}</a></li>
  );
}
