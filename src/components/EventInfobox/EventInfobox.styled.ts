import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 60px;
  font-weight: 700;
  line-height: 55px;
  ${({ theme: { colors, fontSize } }) => `
    color: ${colors.grey800};
    font-size: ${fontSize.articleHeading};
  `}
`;

export const Wrapper = styled.div`
  background: ${({ theme: { colors } }) => colors.grey100};
  width: 100%;
  margin-top: 24px;
  margin-bottom: 60px;
  padding: 20px 30px;
  box-sizing: border-box;

  h3 {
    margin-bottom: 8px;
    font-weight: 500;
  }

  p {
    margin-bottom: 16px;
  }

  a {
    color: ${({ theme: { colors } }) => colors.grey600};
  }

  nav {
    margin-top: 16px;
    a {
      margin-right: 16px;
      font-size: 24px;
    }
  }
`;
