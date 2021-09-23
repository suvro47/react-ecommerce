import { useState, createContext } from "react";
import ProductList from "../Components/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Components/Checkout";
import useModalControll from "../Components/useModalControll";

export const Context = new createContext();

export function ContextHandler() {
  const [info, setInfo] = useState([]);
  const { isModalOpen, setIsModalOpen } = useModalControll(false);
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
        <Router>
          <Switch>
            <Route exact path='/'>
              <ProductList />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/*'>
              <div className='flex flex-col items-center mt-48'>
                <h1> 404 not found </h1>
              </div>
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  );
}
