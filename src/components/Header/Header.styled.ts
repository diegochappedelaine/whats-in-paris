import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const FixedWrapper = styled.div`
  background: white;
  width: 100vw;
  position: fixed;
  z-index: 2;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  top: 0;
`;

export const DesktopNav = styled.nav`
  display: none;
  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    display: flex;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    padding: 24px 0;
  }
`;

export const Title = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  ${({ theme: { colors, fontSize } }) => `
    font-size: ${fontSize.heading3};
    color: ${colors.black100}!important;
  `}
`;

export const NavElement = styled(NavLink)`
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
export const UnorderedList = styled.ul`
  display: flex;

  li {
    margin-right: 24px;
  }
`;
