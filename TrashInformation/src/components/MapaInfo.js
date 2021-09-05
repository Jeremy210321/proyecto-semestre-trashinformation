import React, { useState } from "react";
import { Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import "../styles/MapaInfo.css";
import Modal from "antd/es/modal/Modal";

function MapaInfo(props) {
  const [mostrarDetalleMapa, setMostrarDetalleMapa] = useState(false);

  const handleClose = () => {
    setMostrarDetalleMapa(false);
  };

  const handleShowMapaInfo = () => {
    setMostrarDetalleMapa(true);
  };

  return (
    <div>
      <div className="mapaInfo-header">
        <h1>Mapa interactivo por zonas de recolección</h1>
        <Button
          type="primary"
          icon={<QuestionCircleOutlined />}
          onClick={handleShowMapaInfo}
        >
          Cómo Usarlo
        </Button>
      </div>
      <p>
        Busca en el mapa la zona en la que resides y podrás visualizar
        información importante sobre el servicio de recoleeción de basura.
      </p>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1BZPF3nfB5_hEXaFTcf4zTlIILa4"
        width="663"
        height="626"
      ></iframe>
      <Modal
        visible={mostrarDetalleMapa}
        onCancel={handleClose}
        footer={[
          <Button key="close" type="primary" onClick={handleClose}>
            Entendido
          </Button>,
        ]}
        width={464}
      >
        <p>
          1.- Navega a través del mapa o elije un sector en la lista
          predeterminada (Botón a la izquierda de "FRECUENCIA DE RECOLECCIÓN")
        </p>
        <p>2.- Se abrirá un listado de sectores a la izquierda</p>
        <p>
          3.- Elige un sector y consulta la información que necesites sobre
          horarios, días y rutas
        </p>
      </Modal>
    </div>
  );
}

export default MapaInfo;
