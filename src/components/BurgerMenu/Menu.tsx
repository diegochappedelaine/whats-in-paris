import { UnorderedList, StyledMenu } from "./BurgerMenu.styled";
import { NavElement } from "components/Header/Header.styled";
import { theme } from "core/Theme";

import { NavigationElements } from "./BurgerMenu";

type MenuProps = {
  toggleOpen: () => void;
  isOpen: boolean;
  navigationElements: NavigationElements;
};

const Menu: React.FC<MenuProps> = ({
  isOpen,
  navigationElements,
  toggleOpen,
}) => {
  return (
    <StyledMenu isOpen={isOpen}>
      <UnorderedList>
        {navigationElements.map(({ url, label }, index) => (
          <li key={index}>
            <NavElement
              onClick={toggleOpen}
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
    </StyledMenu>
  );
};

export default Menu;
