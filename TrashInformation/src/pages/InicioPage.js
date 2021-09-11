import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import MapaInfo from "../components/MapaInfo";
import "../styles/App.css";
import InfoListContacts from "../components/InfoListContacts";

function InicioPage(props) {
  return (
    <Row className="initialPage-columns">
      <Col span={17} className="initialPage-mapaInfo">
        <MapaInfo />
      </Col>
      <Col span={7} className="general-List initialPage-listContacts">
        <InfoListContacts />
      </Col>
    </Row>
  );
}

export default InicioPage;
