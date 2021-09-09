import styled from "styled-components";
import { Container as _Container } from "components/layouts";
import { Link } from "react-router-dom";
import { EventCard as _EventCard } from "components";

export const Container = styled(_Container)`
  margin-top: 60px;
`;

export const EventCard = styled(_EventCard)`
  margin-top: 40px;
`;

export const Redirect = styled(Link)`
  ${({ theme: { colors, fontSize } }) => `
    font-size: ${fontSize.heading3};
    font-weight: 700;
    color: ${colors.grey800};
    margin: 60px auto 140px;
  `}
`;
