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
    <div className="infoRecomendations-cards">
      <div>
        <Card
          style={{ width: 300 }}
          cover={
            <img alt={recomendations.Title} src={recomendations.PortalImage} />
          }
          actions={[
            <InfoCircleOutlined
              key="showDetails"
              onClick={handleShowDetails}
            />,
          ]}
        >
          <Meta title="Card title" />
        </Card>

        <ModalRecomendations
          recomendationsDetail={recomendations}
          onShow={handleShowDetails}
          onClose={handleCloseDetails}
        />
      </div>
    </div>
  );
}

export default InfoRecomendations;
