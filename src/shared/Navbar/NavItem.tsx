import { AnchorHTMLAttributes } from "react";
import { useLocation } from "react-router-dom";

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export function NavItem({ label, ...rest }: NavItemProps) {
  const location = useLocation();

  function verificarRota(name: string, router: string) {
    if (
      (name === "Inicio" && router === "/") ||
      (name === "Programação" && router === "/programacao") ||
      (name === "Manual" && router === "/manual") ||
      (name === "Patrocinadores" && router === "/patrocinadores") ||
      (name === "Loja" && router === "/loja")
    ) {
      return true;
    }
    return false;
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <li
      style={{
        borderBottom: verificarRota(label, location.pathname) ? "3px solid #4361EE" : "none",
        padding: "8px 0"
      }}
    >
      <a {...rest} onClick={handleClick}>{label}</a>
    </li>
  );
}