const API_URL = `${process.env.REACT_APP_API_URL}`;

export const SEARCH_EVENTS_URL =
  API_URL + `catalog/datasets/que-faire-a-paris-/records/?&sort=updated_at`;

export const GET_EVENT_BY_ID =
  API_URL + "catalog/datasets/que-faire-a-paris-/records";

export const RETREIVE_LAST_EVENT =
  API_URL +
  "catalog/datasets/que-faire-a-paris-/records/?&rows=1&sort=updated_at";
