import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeStyled = styled.div`
  margin: 5rem auto;
  max-width: 70dvw;
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Img = styled.img`
  width: 18.6rem;
  height: 18.6rem;
`;
const Heading = styled.h2`
  font-size: 2.2rem;
`;

const Button = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--rpdc-color);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 3.4rem;

    text-decoration: none;
    background-color: var(--rpdc-color-v2);
    box-shadow: var(--shadow-lg);
  }
`;

export default function Home() {
  return (
    <HomeStyled>
      <Img src="/rpdc.png" alt="img" />
      <Heading>RPDC Auto Generate Certificates</Heading>
      <Button to={"/temCert"}>Proceed to Main Page</Button>
    </HomeStyled>
  );
}
