import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;

  max-width: 60dvw;
  margin: 3rem auto;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledLing = styled(NavLink)`
  &:link,
  &:visited {
    color: white;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
`;

const ListStyle = styled.li`
  background-color: var(--rpdc-color);
  padding: 1rem 0.5rem;

  border-radius: var(--border-radius-lg);
  box-shadow: 0px 0.6rem 2.4rem var(--color-indigo-700);
`;

export default function Navigation() {
  return (
    <nav>
      <NavList>
        <ListStyle>
          <StyledLing to={"/rpdc_autogenerate_certificate/temCert"}>
            Template Provided for you
          </StyledLing>
        </ListStyle>
        <ListStyle>
          <StyledLing to={"/rpdc_autogenerate_certificate/uploadowncert"}>
            Upload your own Template
          </StyledLing>
        </ListStyle>
      </NavList>
    </nav>
  );
}
