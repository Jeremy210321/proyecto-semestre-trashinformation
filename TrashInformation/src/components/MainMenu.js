import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "../styles/MainMenu.css"
import "../styles/App.css"

const MainMenu = () => {
  return (
    <Menu
        theme="dark"
      mode="horizontal"
      className="main-menu"
    >
      <Menu.Item className="main-button">
        <Link to="/" className="item">Inicio</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/maneja-tus-desechos" className="item">Maneja tus desechos</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/contactenos" className="item">Contáctenos</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/videos" className="item">Videos</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/noticias" className="item">Noticias</Link>
      </Menu.Item>
      <Menu.Item className="main-button">
        <Link to="/gestionar" className="item">Gestionar</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
