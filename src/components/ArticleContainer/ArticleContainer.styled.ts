import styled from "styled-components";
import { HandleFavorite as _HandleFavorite } from "components";

export const HandleFavorite = styled(_HandleFavorite)`
  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    right: -40px;
  }
`;

export const Container = styled.article`
  position: relative;
  max-width: 765px;
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    padding: O;
  }

  ${({ theme: { colors, fontSize } }) => `
    h1 {
      color: ${colors.grey800};
      font-size: ${fontSize.articleHeading};
      font-weight: 700;
      line-height: 55px;
      margin-bottom: 8px;
    }

    h2 {
      color: ${colors.grey800};
      font-size: ${fontSize.textMedium};
      font-weight: 700;
      margin-bottom: 24px;

      span {
        color: ${colors.grey600};
        font-weight: 300;
      }
    }

    p {
      color: ${colors.grey600};
      font-size: ${fontSize.textMedium};
      font-weight: 300;
      line-height: 24px;
    } 
    `}
`;

export const ParsedContent = styled.div`
  * {
    margin-bottom: 16px;
    img {
      max-width: 100%;
    }
  }
`;
