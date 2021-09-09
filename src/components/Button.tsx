import styled from "styled-components";

const ButtonStyled = styled.button`
  color: white;
  transition: background-color 0.1s ease-out;
  border: none;
  padding: 0 32px;
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
  margin-top: 16px;
  ${({ theme: { colors } }) => `
  background-color: ${colors.primary};
  
  &:hover {
    background-color: ${colors.primaryLight};
  }
  `}

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}px) {
    margin-left: 16px;
    margin-top: 0;
  }
`;

const Button: React.FC = ({ children }) => {
  return <ButtonStyled type="submit">{children}</ButtonStyled>;
};

export default Button;
