import { styled } from "solid-styled-components";
import { Link } from "@solidjs/router";
import A from "solid-start";

export const Navbar = styled.nav`
  background-color: #235c91;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export const Links = styled.ol`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: relative;
  z-index: 15;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-weight: 300;
`;
