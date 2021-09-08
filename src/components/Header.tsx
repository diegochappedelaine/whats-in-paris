import styled from "styled-components";
import { Container } from "components/layouts";
import { Link, NavLink } from "react-router-dom";

import { theme } from "core/Theme";

const FixedWrapper = styled.div`
  background: white;
  width: 100vw;
  position: fixed;
  z-index: 2;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  top: 0;
`;

const NavigationElements = [
  { url: "/", label: "Actus" },
  { url: "/events", label: "Sorties" },
  { url: "/favorites", label: "Favoris" },
];

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px;
  @media (min-width: 800px) {
    padding: 24px 0;
  }
`;

const Title = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  ${({ theme: { colors, fontSize } }) => `
    font-size: ${fontSize.heading3};
    color: ${colors.black100}!important;
  `}
`;

const NavElement = styled(NavLink)`
  font-weight: 400;
  text-decoration: none;
  transition: color 0.1s ease-out;
  ${({ theme: { colors, fontSize } }) => `
    font-size: ${fontSize.textMedium};
    color: ${colors.grey600};

    &:hover {
        color: ${colors.primary};
    }
  `}
`;

const UnorderedList = styled.ul`
  display: flex;

  li {
    margin-right: 24px;
  }
`;

const Header = () => {
  return (
    <FixedWrapper>
      <Container>
        <HeaderContainer>
          <Title to="/">QuoiDeNeuf</Title>
          <nav>
            <UnorderedList>
              {NavigationElements.map(({ url, label }, index) => (
                <li>
                  <NavElement
                    strict
                    exact
                    activeStyle={{
                      color: theme.colors.black100,
                    }}
                    to={url}
                    key={index}
                  >
                    {label}
                  </NavElement>
                </li>
              ))}
            </UnorderedList>
          </nav>
        </HeaderContainer>
      </Container>
    </FixedWrapper>
  );
};

export default Header;
