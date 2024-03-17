import { HTMLAttributes } from "react";

interface ButtonContentProps extends HTMLAttributes<HTMLButtonElement>{
  label: string;
}

export default function ButtonContent({label, ...rest}: ButtonContentProps){
  return (
    <button type="button" {...rest}>{label}</button>
  );
}