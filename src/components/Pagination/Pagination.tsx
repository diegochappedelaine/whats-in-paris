import { getPageChoices, queryToString } from "utils";
import { useQuery } from "hooks";
import { useHistory } from "react-router-dom";
import {
  PaginationWrapper,
  PaginationButton,
  PageChoiceButton,
} from "./Pagination.styled";
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

const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage }) => {
  const history = useHistory();
  const queries = useQuery();
  const pagesChoices = getPageChoices(currentPage, lastPage, 2);

  const generateNewPageUrl = (page: number): string => {
    const newQueries = queryToString({ ...queries, page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
