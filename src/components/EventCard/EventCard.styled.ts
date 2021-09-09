import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.article`
  position: relative;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 60px;
  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    flex-direction: row;
    height: 440px;
  }

  > img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-radius: 5px 5px 0 0;
    filter: brightness(80%);
    height: 400px;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        `${breakpoints.mobile}px`}) {
      max-width: 50%;
      width: 100%;
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const TextContainer = styled.div`
  padding: 30px 40px 50px;
  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    width: 50%;
    padding: 60px;
  }
  display: flex;
  flex-direction: column;
  ${({ theme: { colors, fontSize } }) => `
    h2 {
        font-size: ${fontSize.subtitle};
        color: ${colors.grey800};
        font-weight: 700;
        line-height: 40px;
        margin-bottom: 32px;
    }

    p, span {
        font-size: ${fontSize.textSmall};
        color: ${colors.grey600};
        line-height: 24px;
    }

    .hover {
        font-size: ${fontSize.textSmall};
        color: ${colors.grey600};
        line-height: 24px;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.1s ease-out;

        &:hover {
          color: ${colors.grey800};
        }
    }

    div {
        margin-top: auto;
        display: flex;
        justify-content: space-between
    }
  `};
`;

export const UnStyledLink = styled(Link)`
  text-decoration: none;
`;
