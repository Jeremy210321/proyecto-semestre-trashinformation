import React from "react";
import { Button, Col, Row } from "antd";
import Modal from "antd/es/modal/Modal";
import "../styles/ModalRecomendations.css";

function ModalRecomendations({ recomendationsDetail, onClose, onShow }) {
  return (
    <div>
      <Modal
        visible={onShow}
        onCancel={onClose}
        footer={[
          <Button key="close" type="primary" onClick={onClose}>
            Entendido
          </Button>,
        ]}
        width={700}
      >
        <Row>
          <Col span={10}>
            <Row>
              <img
                src={recomendationsDetail.PortalImage}
                alt={recomendationsDetail.Title}
                className="modalRecomendations-image"
              />
            </Row>
            <Row>
              <img
                src={recomendationsDetail.ProfileImage}
                alt={recomendationsDetail.Title}
                className="modalRecomendations-image"
              />
            </Row>
          </Col>
          <Col span={14}>
            <div className="modalRecomendations-content">
              <h2>{recomendationsDetail.Title}</h2>
              <h3>{`Categoría: ${recomendationsDetail.Category}`}</h3>
              <p>{recomendationsDetail.Description}</p>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default ModalRecomendations;
