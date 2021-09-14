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
                src={recomendationsDetail.portalImage}
                alt={recomendationsDetail.title}
                className="modalRecomendations-image"
              />
            </Row>
            <Row>
              <img
                src={recomendationsDetail.profileImage}
                alt={recomendationsDetail.title}
                className="modalRecomendations-image"
              />
            </Row>
          </Col>
          <Col span={14}>
            <div className="modalRecomendations-content">
              <h2>{recomendationsDetail.title}</h2>
              <h3>{`Categoría: ${recomendationsDetail.category}`}</h3>
              <p>{recomendationsDetail.description}</p>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default ModalRecomendations;
