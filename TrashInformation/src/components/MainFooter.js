import React from 'react';
import {  Row, Col } from "antd";
import "../styles/App.css"
import { WhatsAppOutlined , MailOutlined} from '@ant-design/icons';
function MainFooter(props) {
    return (
        <Row>
            <Col span={12}>
                <h1>Contenidos</h1>
                <p>TransInformation la mejor fuente de información sobre el servicio de recolección de basura, su clasificación y tratamiento.</p>
            </Col>
            <Col span={2}></Col>
            <Col span={10}>
                <h1>Social</h1>
                <Row>
                    <Col span={2}>
                        <MailOutlined className="icons"/>
                    </Col>
                    <Col>
                        <p><a href="mailto:trash.information@gmail.com">trash.information@gmail.com</a></p>

                    </Col>

                </Row>
                <Row>
                    <Col span={2}>
                        <WhatsAppOutlined className="icons"/>
                    </Col>
                    <Col>
                        <p><a  href="https://wa.me/+593984530789?text=Hola,%20c%C3%B3mo%20est%C3%A1s.%20Gracias%20por%20contactarte%20con%20TrashInformation!%20%C2%BFC%C3%B3mo%20podemos%20ayudarte?.">(+593) 984530789</a></p>

                    </Col>

                </Row>

            </Col>
        </Row>
    );
}

export default MainFooter;