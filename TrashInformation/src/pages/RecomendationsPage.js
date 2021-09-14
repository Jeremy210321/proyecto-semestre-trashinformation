import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/RecomendationsPage.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import RecomendationsMenu from "../components/RecomendationsMenu";
import RecomendationsList from "../components/RecomendationsList";
import { request } from "../util/request";
import { URL_READ_RECOMENDATIONS } from "../config/Constantes";
export * from "../config/Constantes";

function RecomendationsPage(props) {
  const [recomendationsList, setRecomendationsList] = useState([]);
  let match = useRouteMatch();
  //Esto se copia y adapta a lo que se necesita se cambia el URL_READ_*

  //Kevin coloca el user_id desde inicio de sesion

  useEffect(() => {
    const loadRecomendations = async () => {
      let bodyReadRecomendations = {
        user_id: "123abc",
      };
      const recomendations = await request(
        URL_READ_RECOMENDATIONS,
        bodyReadRecomendations
      );
      console.log("recomendations", recomendations);
      setRecomendationsList(recomendations);
    };

    loadRecomendations();
  }, []);

  return (
    <div>
      <RecomendationsMenu />
      <Switch>
        <Route path={`${match.path}/:category`}>
          <RecomendationsList recomendationList={recomendationsList} />
        </Route>
      </Switch>
    </div>
  );
}

export default RecomendationsPage;
