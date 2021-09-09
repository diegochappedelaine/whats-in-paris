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

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Pagination: React.FC<PaginationProps> = ({ currentPage, lastPage }) => {
  const history = useHistory();
  const queries = useQuery();
  const pagesChoices = getPageChoices(currentPage, lastPage, 2);

  const generateNewPageUrl = (page: number) => {
    const newQueries = queryToString({ ...queries, page: page.toString() });
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
        onClick={scrollToTop}
      >
        <FaAngleDoubleLeft />
      </PaginationButton>
      <PaginationButton
        $isDisabled={currentPage === 1}
        to={generateNewPageUrl(currentPage - 1)}
        onClick={scrollToTop}
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
            onClick={scrollToTop}
          >
            {pageChoice}
          </PageChoiceButton>
        );
      })}
      <PaginationButton
        $isDisabled={currentPage === lastPage}
        to={generateNewPageUrl(currentPage + 1)}
        onClick={scrollToTop}
      >
        <FaAngleRight />
      </PaginationButton>
      <PaginationButton
        $isDisabled={currentPage === lastPage}
        to={generateNewPageUrl(lastPage)}
        onClick={scrollToTop}
      >
        <FaAngleDoubleRight />
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
