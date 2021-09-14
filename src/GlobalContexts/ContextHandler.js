import { useState, createContext } from "react";
import Home from "../Components/Home";

export const Context = new createContext();

export function ContextHandler() {
  const [info, setInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div>
      <Context.Provider
        value={{
          info,
          setInfo,
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
