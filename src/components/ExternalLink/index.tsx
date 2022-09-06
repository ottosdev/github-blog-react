import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styled";
import { FaExternalLinkAlt } from "react-icons/fa";
type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
};

export default function ExternalLink({
  text,
  icon,
  ...rest
}: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      {icon ?? <FaExternalLinkAlt />}
    </ExternalLinkContainer>
  );
}
