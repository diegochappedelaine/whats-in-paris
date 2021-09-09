import styled from "styled-components";
import { Container as _Container } from "components/layouts";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 32px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}px) {
    flex-direction: row;
  }
`;

export const Container = styled(_Container)`
  padding: 0 8px;
  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    padding: 0;
  }

  form {
    padding: 0 32px;
  }
`;

export const OrderedList = styled.ol`
  margin-top: 60px;
  list-style-type: none;
`;
