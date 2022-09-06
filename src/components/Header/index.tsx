import React from "react";
import logo from "../../assets/logo3.svg";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
    </HeaderContainer>
  );
}
