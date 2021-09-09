import { useLocation } from "react-router-dom";

function useQuery(): {
  [k: string]: string;
} {
  const location = useLocation();

  return Object.fromEntries(new URLSearchParams(location.search));
}

export default useQuery;
