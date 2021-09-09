import styled from "styled-components";
import { Container as _Container } from "components/layouts";

export const Container = styled(_Container)`
  padding: 0 8px;
  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    padding: 0;
  }
`;

export const UnorderedList = styled.ul`
  margin-top: 60px;
  list-style-type: none;
`;
