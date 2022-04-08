import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SimpleForm from "./components/chat-bot/chat-bot.component.jsx";
import { checkUserAuthentication } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Spiner from "./components/spiner/spiner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import "./App.css";
import ChatPage from './pages/chatpage/Chatpage.component';
import { createStructuredSelector } from "reselect";
const SignIn = React.lazy(() => import("./pages/singIn/signIn.component"));
const Homepage = React.lazy(() => import("./pages/homepage/homepage.component"));
const Shop = React.lazy(() => import("./pages/shop/shop.component"));
const Checkout = React.lazy(() => import("./pages/checkout/checkout.component"));

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuthentication());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <React.Suspense fallback={<Spiner />}>
          <Route
            path="/"
            exact
            render={props => (
              <ErrorBoundary {...props}>
                <Homepage />
              </ErrorBoundary>
            )}
          />
          <Route path="/checkout" component={Checkout} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/chat" exact component={ChatPage} />
        </React.Suspense>
      </Switch>
      <SimpleForm />
    </div>
  );
}




export default App;
