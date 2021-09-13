import { useState, createContext, useReducer } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div>
      <Context.Provider
        value={{
          info,
          dispatch,
          totalCount,
          setTotalCount,
          isModalOpen,
          setIsModalOpen,
        }}
      >
        <Home />
      </Context.Provider>
    </div>
  );
}
