import React from "react";
import Modal from "antd/es/modal/Modal";
import { Button } from "antd";

function ModalNoticias({ newsDetails, onClose, onShow }) {
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
        HOLA AQUI HAY UN MODAL
      </Modal>
    </div>
  );
}

export default ModalNoticias;
