import { useState, useEffect } from "react";
import { useAppContext } from "provider/AppProvider";
import { GET_EVENT_BY_ID } from "api/end-points";
import { GetEventByIdQuery } from "types";

function useFetchFavoritesEvents(): {
  error: unknown;
  loading: boolean;
  data: GetEventByIdQuery[] | undefined;
} {
  const { favoritesEvents } = useAppContext();

  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<GetEventByIdQuery[]>();

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      try {
        const detailsData = favoritesEvents?.map(async (id: string) => {
          const preFetchData = await fetch(`${GET_EVENT_BY_ID}/${id}`);
          return preFetchData.json();
        });
        const payload = await Promise.all(detailsData);
        setData(payload);
      } catch (error) {
        setError(error);
      }
      return setLoading(false);
    };
    fetchDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, loading, data };
}

export default useFetchFavoritesEvents;
