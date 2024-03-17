import { ElementType, SVGProps } from "react";

interface ButtonIconProps extends SVGProps<SVGSVGElement>{
  icon: ElementType
}

export default function ButtonIcon({icon: Icon, ...rest}: ButtonIconProps) {
  return (
    <Icon {...rest} />
  );
}