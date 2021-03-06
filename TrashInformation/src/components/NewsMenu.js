import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import "../styles/NoticiasPage.css";

function NewsMenu(props) {
  let match = useRouteMatch();

  return (
    <div>
      <Menu theme="light" mode="horizontal" className="noticiasPage-menu">
        <Menu.Item>
          <Link to={`${match.url}/reciclaje`}>Reciclaje</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`${match.url}/ambiente`}>Medio Ambiente</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`${match.url}/coronavirus`}>Desechos coronavirus</Link>
        </Menu.Item>
      </Menu>
      <h1 className="noticiasPage-slogan">
        Infórmate y cuida nuestro planeta con las noticias más actuales
      </h1>
    </div>
  );
}

export default NewsMenu;
