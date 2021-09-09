import styled from "styled-components";
import { getPageChoices, queryToString } from "utils";
import { useQuery } from "hooks";
import { Link, useHistory } from "react-router-dom";

type PaginationProps = {
  currentPage: number;
  lastPage: number;
};

const PaginationButton = styled(Link)<{ $isDisabled: boolean }>`
  ${({ $isDisabled }) => `
    pointer-events: ${$isDisabled ? "none" : "auto"}; 
    cursor: ${$isDisabled ? "not-allowed" : "pointer"}; 
  `}
`;

const PageChoiceButton = styled(Link)<{ $isCurrentPage: boolean }>`
  background: ${({ $isCurrentPage }) => ($isCurrentPage ? `red` : "blue")};
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage }) => {
  const history = useHistory();

  const queries = useQuery();

  const pagesChoices = getPageChoices(currentPage, lastPage, 2);

  const generateNewPageUrl = (page: number): string => {
    const newQueries = queryToString({ ...queries, page: page.toString() });
    return history.createHref({
      pathname: history.location.pathname,
      search: newQueries,
    });
  };

  return (
    <div>
      <PaginationButton
        $isDisabled={currentPage === 1}
        to={generateNewPageUrl(1)}
      >{`<<`}</PaginationButton>
      <PaginationButton
        $isDisabled={currentPage === 1}
        to={generateNewPageUrl(currentPage - 1)}
      >
        {`<`}
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
        {`>`}
      </PaginationButton>
      <PaginationButton
        $isDisabled={currentPage === lastPage}
        to={generateNewPageUrl(lastPage)}
      >
        {`>>`}
      </PaginationButton>
    </div>
  );
};

export default Pagination;
