import React from "react";
import { Button, Col, Row } from "antd";
import Modal from "antd/es/modal/Modal";

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
        width={464}
      >
        <Row>
          <Col flex={2}>
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
          <Col flex={3}>
              <div className="modalRecomendations-content">
            <h2>{recomendationsDetail.Title}</h2>
            <h3>
                {`Categoría: ${recomendationsDetail.Category}`}
            </h3>
              <p>
                  {recomendationsDetail.Description}
              </p>
              </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default ModalRecomendations;
