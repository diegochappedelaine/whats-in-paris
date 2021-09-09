import { Container } from "components/layouts";
import { BurgerMenu } from "components";
import { useWindowSize } from "hooks";
import {
  FixedWrapper,
  DesktopNav,
  HeaderContainer,
  Title,
  NavElement,
  UnorderedList,
} from "./Header.styled";

import { theme } from "core/Theme";

const NAVIGATION_ELEMENTS = [
  { url: "/", label: "Actus" },
  { url: "/events", label: "Sorties" },
  { url: "/favorites", label: "Favoris" },
];

const Header = () => {
  const { width } = useWindowSize();

  return (
    <FixedWrapper>
      <Container>
        <HeaderContainer>
          <Title to="/">QuoiDeNeuf</Title>
          <DesktopNav>
            <UnorderedList>
              {NAVIGATION_ELEMENTS.map(({ url, label }, index) => (
                <li key={index}>
                  <NavElement
                    strict
                    exact
                    activeStyle={{
                      color: theme.colors.black100,
                    }}
                    to={url}
                  >
                    {label}
                  </NavElement>
                </li>
              ))}
            </UnorderedList>
          </DesktopNav>
          {width < 800 && (
            <BurgerMenu navigationElements={NAVIGATION_ELEMENTS} />
          )}
        </HeaderContainer>
      </Container>
    </FixedWrapper>
  );
};

export default Header;
