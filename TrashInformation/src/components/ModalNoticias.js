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
          Aqui va un modal
          <div>
              <iframe
                  src="https://www.eluniverso.com/noticias/economia/diez-paises-pesqueros-se-compromoten-a-reciclar-1500-toneladas-de-redes-en-desuso-nota/"
                  style="border:0px #ffffff none;" name="myiFrame" scrolling="yes" frameBorder="1" marginHeight="0px"
                  marginWidth="0px" height="500px" width="700px" allowFullScreen key={newsDetails.id}/>
          </div>

      </Modal>
    </div>
  );
}

export default ModalNoticias;
