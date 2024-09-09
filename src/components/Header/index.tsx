import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink title="timer" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
