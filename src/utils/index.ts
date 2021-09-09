export const retreiveRandomElementFromArray = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const handlePagination = (page: number, EVENTS_PER_PAGE: number) => {
  const pageIndex = page - 1;

  if (pageIndex === 0) {
    return { offset: 0 };
  }
  return { offset: EVENTS_PER_PAGE * pageIndex + 1 };
};

const getRange = (start: number, stop: number, step: number = 1) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
};

export const getPageChoices = (
  currentPage: number,
  maxPages: number,
  pageRange: number
) => {
  let rangeStart = currentPage - pageRange;
  let rangeStop = currentPage + pageRange;

  if (rangeStart <= 1) {
    rangeStart = 1;
    rangeStop = Math.min(pageRange * 2 + 1, maxPages);
  }

  if (rangeStop > maxPages) {
    rangeStop = maxPages;
    rangeStart = maxPages - pageRange * 2;
  }

  return getRange(rangeStart, rangeStop);
};

export const queryToString = (obj: { [k: string]: string }): string =>
  new URLSearchParams(obj).toString();
