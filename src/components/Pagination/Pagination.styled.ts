import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 64px;
`;

export const PaginationButton = styled(Link)<{ $isDisabled: boolean }>`
  margin: 0 8px;
  transition: color 0.1s ease-out;
  ${({ $isDisabled, theme: { colors } }) => `
    pointer-events: ${$isDisabled ? "none" : "auto"}; 
    cursor: ${$isDisabled ? "not-allowed" : "pointer"};
    color: ${$isDisabled ? "lightgrey" : "black"};

    &:hover {
     color: ${$isDisabled ? "inherit" : colors.primary};
    }
  `}
`;

export const PageChoiceButton = styled(Link)<{ $isCurrentPage: boolean }>`
  padding: 10px 16px;
  text-decoration: none;
  border: 1px solid lightgrey;
  transition: color 0.1s ease-out;

  ${({ $isCurrentPage, theme: { colors } }) => `
    background-color: ${$isCurrentPage ? colors.primary : "white"};
    color: ${$isCurrentPage ? "white" : "black"};

    &:hover {
     color: ${$isCurrentPage ? "lightgrey" : colors.primary};
    }
  `};
`;
