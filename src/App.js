import {Fragment,useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.js/Cart";

function App() {
  const [cartIsShow,setCartIsShown] = useState(false);

  const showCartHandle = () => {
    setCartIsShown(true);
  };

  const hideCartHandle = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShow && <Cart onClose={hideCartHandle}/>}
      <Header onShowCart ={showCartHandle} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
