import React, { useState } from "react";
import { Card } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "../styles/InfoRecomendations.css";
import ModalRecomendations from "./ModalRecomendations";

const { Meta } = Card;

function InfoRecomendations({ recomendations }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div>
      <div>
        <Card
          className="infoRecomendations-card"
          cover={
            <img
              className="infoRecomendations-image"
              alt={recomendations.Title}
              src={recomendations.PortalImage}
            />
          }
          actions={[
            <InfoCircleOutlined
              key="showDetails"
              onClick={handleShowDetails}
            />,
          ]}
        >
          <Meta title={recomendations.Title} />
        </Card>

        <ModalRecomendations
          recomendationsDetail={recomendations}
          onShow={showDetails}
          onClose={handleCloseDetails}
        />
      </div>
    </div>
  );
}

export default InfoRecomendations;
