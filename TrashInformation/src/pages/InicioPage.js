import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import MapaInfo from "../components/MapaInfo";
import "../styles/App.css";
import "../styles/MapaInfo.css";
import InfoListContacts from "../components/InfoListContacts";

const { Header, Footer, Content } = Layout;

function InicioPage(props) {
  return (
    <Layout>
      <Header className="initialPage-header"> PAGINA DE INICIO</Header>
      <Content className="initialPage-content">
        <Row className="initialPage-columns">
          <Col span={17} className="initialPage-mapaInfo">
            <MapaInfo />
          </Col>
          <Col span={7} className="general-List initialPage-listContacts">
            <InfoListContacts />
          </Col>
        </Row>
      </Content>

      <Footer className="initialPage-footer">Footer</Footer>
    </Layout>
  );
}

export default InicioPage;
