import React, { useState } from "react";
import { Button, Card } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "../styles/InfoVideosList.css";
import ModalVideos from "./ModalVideos";

const { Meta } = Card;

function InfoVideosList({ videos }) {
  const [showDetails, setShowDetails] = useState(false);
  const [playVideo, setplayVideo] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
    setplayVideo(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setplayVideo(false);
  };

  return (
    <div>
      <Card
        className="infoVideos-card"
        cover={
          <img
            className="infoVideos-image"
            alt={videos.title}
            src={videos.portal}
          />
        }
        actions={[
          <Button type="primary" onClick={handleShowDetails}>
            <InfoCircleOutlined key="showDetails" /> Ver más
          </Button>,
        ]}
      >
        <Meta title={videos.title} />
      </Card>
      <ModalVideos
        videosDetail={videos}
        onShow={showDetails}
        onClose={handleCloseDetails}
        reproducir={playVideo}
      />
    </div>
  );
}

export default InfoVideosList;
