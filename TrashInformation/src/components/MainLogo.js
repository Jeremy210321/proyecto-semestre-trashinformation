import React from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "../styles/App.css";
function MainLogo(props) {
  return (
    <Row className="main-logo">
      <Col span={12}>
        <img
          src="https://i.ibb.co/ZxQJ0Kp/titulo.png"
          alt="titulo"
          border="0"
          className="header-image header-title"
        />
      </Col>
      <Col span={3} />
      <Col span={9} className="col-logo">
        <Button className="count-button">
          <Link to="/mi-cuenta">Mi cuenta</Link>
        </Button>
        <img
          src="https://i.ibb.co/NV4v5Ww/Logo-Trash-Info.png"
          alt="Logo-TrashInfo"
          border="0"
          className="header-image header-logo"
        />
      </Col>
    </Row>
  );
}

export default MainLogo;
