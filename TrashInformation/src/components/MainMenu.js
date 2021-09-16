import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "../styles/MainMenu.css";
import "../styles/App.css";

const MainMenu = ({ user }) => {
  return (
    <Menu theme="dark" mode="horizontal" className="main-menu">
      <Menu.Item className="main-button">
        <Link to="/initio" className="item">
          Inicio
        </Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/maneja-tus-desechos/reciclables" className="item">
          Maneja tus desechos
        </Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/contactenos" className="item">
          Contáctenos
        </Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/videos" className="item">
          Videos
        </Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/noticias/reciclaje" className="item">
          Noticias
        </Link>
      </Menu.Item>
      {user === null ? null : user === false ? (
        <>
          <Menu.Item className="main-button">
            <Link to="/registro" className="item">
              Registrarse
            </Link>
          </Menu.Item>
          <Menu.Item className="main-button">
            <Link to="/login" className="item">
              Ingresar
            </Link>
          </Menu.Item>
        </>
      ) : null}
    </Menu>
  );
};

export default MainMenu;
