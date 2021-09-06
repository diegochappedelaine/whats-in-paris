import { useReducer, useContext, ReactNode, useEffect } from "react";
import AppContext, { ContextProps } from "./AppContext";

const STORAGE_KEY = "WHATS_IN_PARIS";

const initialState = {
  favoritesEvents: [],
};

const reducer = (
  state: { favoritesEvents: string[] },
  action: { type: string; value: string }
) => {
  switch (action.type) {
    case "add-event":
      return {
        ...state,
        favoritesEvents: [...state.favoritesEvents, action.value],
      };

    case "remove-event":
      return {
        ...state,
        favoritesEvents: [
          ...state.favoritesEvents.filter(
            (favorite) => favorite !== action.value
          ),
        ],
      };

    case "clear-favorites":
      return {
        ...state,
        favoritesEvents: [],
      };

    default:
      throw new Error();
  }
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (state) => {
    const localStorageCard = localStorage.getItem(STORAGE_KEY);
    const favoritesEvents = localStorageCard
      ? JSON.parse(localStorageCard)
      : [];
    return { ...state, favoritesEvents };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favoritesEvents));
  }, [state.favoritesEvents]);

  const handleFavoriteEvent = (value: string) => {
    if (state.favoritesEvents.includes(value)) {
      return dispatch({ type: "remove-event", value });
    }
    return dispatch({ type: "add-event", value });
  };

  const clearFavorites = () => dispatch({ type: "clear-favorites", value: "" });

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleFavoriteEvent,
        clearFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext) as ContextProps;
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { useAppContext };

export default AppProvider;
