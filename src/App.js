import React, { useEffect } from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Provider} from "react-redux";

import Store from "./store";

import Aside from "./components/layout/aside/Aside";

import Home from "./views/home/Home";

import Invoice from "./views/invoice/Invoice";

function App() {

  // the title
  useEffect( () => {

    let lang = document.documentElement.getAttribute("lang");
    if (lang === "en") {
      document.title = "invoyz"
    } else {
      document.title = "الفواتير"
    }

  });

  return (
    <BrowserRouter>
      <div className="App">
        <section className="page d-flex justify-content-end">

          <Aside />

          <section className="other-side">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/invoice/:id" component={Invoice} />
            </Switch>
          </section>

        </section>
      </div>
    </BrowserRouter>
  );
}

function ReduxProvider() {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  )
}

export default ReduxProvider;
