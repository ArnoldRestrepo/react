import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import HomeBadge from "../pages/HomeBadge";
import Badges from "../pages/Badges";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeBadge} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
