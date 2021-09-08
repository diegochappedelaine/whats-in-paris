import React, { useState, useRef } from "react";
import { StyledBurger } from "./BurgerMenu.styled";
import Menu from "./Menu";

import { useOnClickOutside } from "hooks";

export type NavigationElements = {
  url: string;
  label: string;
}[];

type BurgerMenuProps = {
  navigationElements: NavigationElements;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ navigationElements }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const toggleOpen = () => setIsOpen((state) => !state);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <StyledBurger ref={ref} onClick={toggleOpen} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu
        navigationElements={navigationElements}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
      />
    </div>
  );
};

export default BurgerMenu;
