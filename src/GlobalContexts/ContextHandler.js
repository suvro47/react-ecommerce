import { createContext, useReducer } from "react";
import Home from "../Components/Home";

export const Context = new createContext();

const iState = [];

function reducer(state, payload) {
  state[payload.id] = payload;
  console.log(state[payload.id]);
  return state;
}

export function ContextHandler() {
  const [info, dispatch] = useReducer(reducer, iState);
  return (
    <div>
      <Context.Provider value={{ info, dispatch }}>
        <Home />
      </Context.Provider>
    </div>
  );
}
