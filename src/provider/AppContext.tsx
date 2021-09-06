import { createContext } from "react";

export type ContextProps = {
  favoritesEvents: string[];
  handleFavoriteEvent: (id: string) => void;
  clearFavorites: () => void;
};

const AppContext = createContext<Partial<ContextProps>>({});

export default AppContext;
