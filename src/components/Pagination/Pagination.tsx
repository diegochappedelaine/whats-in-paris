import styled from "styled-components";
import { getPageChoices, queryToString } from "utils";
import { useQuery } from "hooks";
import { Link, useHistory } from "react-router-dom";

import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

type PaginationProps = {
  currentPage: number;
  lastPage: number;
};

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 64px;
`;

const PaginationButton = styled(Link)<{ $isDisabled: boolean }>`
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

const PageChoiceButton = styled(Link)<{ $isCurrentPage: boolean }>`
  padding: 10px 16px;
  text-decoration: none;
  border: 1px solid lightgrey;
  transition: color 0.1s ease-out;

  ${({ $isCurrentPage, theme: { colors } }) => `
    background-color: ${$isCurrentPage ? colors.primary : "white"};
    color: ${$isCurrentPage ? "white" : "black"};
  `};
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage }) => {
  const history = useHistory();
  const queries = useQuery();
  const pagesChoices = getPageChoices(currentPage, lastPage, 2);

  const generateNewPageUrl = (page: number): string => {
    const newQueries = queryToString({ ...queries, page: page.toString() });
    window.scrollTo({ top: 0 });
    return history.createHref({
      pathname: history.location.pathname,
      search: newQueries,
    });
  };

  return (
    <PaginationWrapper>
      <PaginationButton
        $isDisabled={currentPage === 1}
        to={generateNewPageUrl(1)}
      >
        <FaAngleDoubleLeft />
      </PaginationButton>
      <PaginationButton
        $isDisabled={currentPage === 1}
        to={generateNewPageUrl(currentPage - 1)}
      >
        <FaAngleLeft />
      </PaginationButton>
      {pagesChoices.map((pageChoice, index) => {
        const isActive = currentPage === pageChoice;
        return (
          <PageChoiceButton
            $isCurrentPage={isActive}
            key={index}
            to={generateNewPageUrl(pageChoice)}
          >
            {pageChoice}
          </PageChoiceButton>
        );
      })}
      <PaginationButton
        $isDisabled={currentPage === lastPage}
        to={generateNewPageUrl(currentPage + 1)}
      >
        <FaAngleRight />
      </PaginationButton>
      <PaginationButton
        $isDisabled={currentPage === lastPage}
        to={generateNewPageUrl(lastPage)}
      >
        <FaAngleDoubleRight />
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
