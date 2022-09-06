import styled, { css } from "styled-components";

interface Props {
  variant?: "iconLeft";
}
export const ExternalLinkContainer = styled.a<Props>`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors["brand-blue"]};
  font-size: ${(props) => props.theme.textSizes["components-link"]};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.55rem;
    height: 0.55rem;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors["brand-blue"]};
  }

  ${(props) =>
    props.variant === "iconLeft" &&
    css`
      flex-direction: row-reverse;
    `}
`;
