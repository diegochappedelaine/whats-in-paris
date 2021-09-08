import styled from "styled-components";

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  li {
    text-align: left;
    margin-bottom: 24px;
  }

  a {
    font-size: 40px;
  }
`;

export const StyledMenu = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme: { colors } }) => colors.grey200};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  width: fit-content;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledBurger = styled.button<{ isOpen: boolean }>`
  position: absolute;
  right: 2rem;
  top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media (min-width: 800px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme: { colors }, isOpen }) =>
      isOpen ? colors.black100 : colors.grey700};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
