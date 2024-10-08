import { AnchorHTMLAttributes } from "react";
import {useLocation} from "react-router-dom";
interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export function NavItem({label, ...rest }: NavItemProps) {
  const location = useLocation();

  function verificarRota(name: string, router: string) {
    if (
      (name === "Inicio" && router === "/sescomp") ||
      (name === "Programação" && router === "/sescomp/programacao") ||
      (name === "Manual" && router === "/sescomp/manual") ||
      (name === "Patrocinadores" && router === "/sescomp/patrocinadores")
    ) {
      return true;
    }
    return false;
  }

  return(
    <li style={{ borderBottom: verificarRota(label, location.pathname) ? "3px solid #4361EE" : "none", padding: "8px 0"}}><a {...rest}>{label}</a></li>
  );
}
