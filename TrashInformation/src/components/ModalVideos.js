import React, { useEffect, useState } from "react";
import Modal from "antd/es/modal/Modal";
import { Button } from "antd";
import ReactPlayer from "react-player";
import "../styles/ModalVideos.css";
import "../styles/App.css";

function ModalVideos({ videosDetail, onClose, onShow, reproducir }) {
  return (
    <div>
      <Modal
        width={800}
        visible={onShow}
        onCancel={onClose}
        footer={[
          <Button key="close" type="primary" onClick={onClose}>
            Lo tengo
          </Button>,
        ]}
      >
        <div className="modalVideos-videosize">
          <ReactPlayer
            url={videosDetail.videourl}
            className="react-player"
            playing={reproducir}
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
        <h2>{videosDetail.title}</h2>
        <p>{`Créditos especiales a: ${videosDetail.credites}`}</p>
      </Modal>
    </div>
  );
}

export default ModalVideos;
