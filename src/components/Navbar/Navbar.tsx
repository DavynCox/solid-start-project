import { Links, StyledLink, Navbar as StyledNav } from "./styles";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <StyledNav>
      <Links>
        <div>
          <StyledLink href="/" class="dropdown-item unstyle">
            Home
          </StyledLink>
          <StyledLink href="/my-recipes" class="dropdown-item unstyle">
            My Recipes
          </StyledLink>
        </div>
        <div>
          <img src={logo} style={{ width: "50px", "padding-right": "20px" }} />
        </div>
      </Links>
    </StyledNav>
  );
}
