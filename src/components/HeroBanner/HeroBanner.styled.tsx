import styled from "styled-components";

export const Background = styled.div`
  background: ${({ theme: { colors } }) => colors.grey100};
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 100px 0;

  > div {
    width: 100%;
    text-align: center;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        `${breakpoints.mobile}px`}) {
      width: 50%;
    }
  }

  > div:last-child {
    display: none;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        `${breakpoints.mobile}px`}) {
      display: block;
    }
  }

  img {
    width: 80%;
  }
`;

export const TextSection = styled.div`
  ${({ theme: { colors, fontSize, breakpoints } }) => `
    h1 {
      font-size: ${fontSize.heading2};
      font-weight: 700;
      line-height: 73px;
      margin-bottom: 16px;
    }

    p {
      color: ${colors.grey700};
      text-transform: lowercase;
      font-size: ${fontSize.textBig};
    }

    @media (min-width: ${breakpoints.mobile}px) {
      h1 {
        font-size: ${fontSize.heading1};
      }

      p {
        font-size: ${fontSize.subtitle};
      }
    }
  `}
`;
