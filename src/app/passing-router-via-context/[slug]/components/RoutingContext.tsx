import { createContext } from "react";

type Routing = {
  navigate: (path: string) => void
}

const defaults: Routing = {
  navigate: () => {
    /* do nothing */
  }
}

export const RoutingContext = createContext<Routing>(defaults)
