import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import "../styles/RecomendationsMenu.css";

function RecomendationsMenu(props) {
  let match = useRouteMatch();

  return (
    <div>
      <Menu theme="light" mode="horizontal" className="recomendationsMenu-menu">
        <Menu.Item className="recomendationsMenu-button">
          <Link to={`${match.url}/reciclables`}>Residuos Reciclables</Link>
        </Menu.Item>
        <Menu.Item className="recomendationsMenu-button">
          <Link to={`${match.url}/organicos`}>Residuos Orgánicos</Link>
        </Menu.Item>
        <Menu.Item className="recomendationsMenu-button">
          <Link to={`${match.url}/coronavirus`}>Residuos Coronavirus</Link>
        </Menu.Item>
      </Menu>
      <h1 className="recomendationsMenu-slogan">
        Aprende la forma CORRECTA de manejar y clasificar tus residuos
      </h1>
    </div>
  );
}

export default RecomendationsMenu;
