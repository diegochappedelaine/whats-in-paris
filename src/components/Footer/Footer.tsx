import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  ${({ theme: { colors, fontSize } }) => `
    font-size: ${fontSize.heading3};
    color: ${colors.grey600};
  `}
`;

const Background = styled.div`
  margin-top: auto;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.grey100};
`;

const FooterContainer = styled.footer`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 88px;

  p {
    ${({ theme: { colors, fontSize } }) => `
        font-size: ${fontSize.textMedium};
        color: ${colors.grey600};
   `}
  }

  a {
    ${({ theme: { colors, fontSize } }) => `
        font-size: ${fontSize.textMedium};
        color: ${colors.grey600};
        transition: color 0.1s ease-out;

        &:hover {
          color: ${colors.primary};
        }
   `}
  }
`;

const Footer = () => {
  return (
    <Background>
      <FooterContainer>
        <Title to="/">QuoiDeNeuf</Title>
        <p>Build with React</p>
        <a
          href="https://github.com/diegochappedelaine"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          @diegochappedelaine
        </a>
      </FooterContainer>
    </Background>
  );
};

export default Footer;
