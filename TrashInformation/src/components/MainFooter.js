import React from "react";
import { Row, Col } from "antd";
import "../styles/App.css";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
function MainFooter(props) {
  return (
    <Row>
      <Col span={12}>
        <h1>Contenidos</h1>
        <p>
          TransInformation la mejor fuente de información sobre el servicio de
          recolección de basura, su clasificación y tratamiento.
        </p>
      </Col>
      <Col span={2}></Col>
      <Col span={10}>
        <h1>Social</h1>
        <Row>
          <Col span={2}>
            <MailOutlined className="icons" />
          </Col>
          <Col>
            <p>
              <a href="mailto:trash.information@gmail.com">
                trash.information@gmail.com
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <WhatsAppOutlined className="icons" />
          </Col>
          <Col>
            <p>
              <a href="https://wa.me/+593984530789?text=Hola%20vengo%20de%20TrashInformation%20necesito%20ayuda.">
                (+593) 984530789
              </a>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MainFooter;
