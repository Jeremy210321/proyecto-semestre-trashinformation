import React, { useState } from "react";
import { Card, Row, Col, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "../styles/InfoNoticias.css";
import ModalNoticias from "./ModalNoticias";

const { Meta } = Card;

function InfoNoticias({ news }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  return (
    <>
      <div>
        <Card
          className="infoNoticias-card"
          cover={
            <img
              alt={news.title}
              src={news.imageUrl}
              className="card_image_news"
            />
          }
          actions={[
            <Button type="primary" onClick={handleShowDetails}>
              <a href={news.font}>
                <InfoCircleOutlined key="showDetails" /> Ver más
              </a>
            </Button>,
          ]}
        >
          <Meta title={news.title} description={news.smallDescription} />
        </Card>
      </div>
    </>
  );
}

export default InfoNoticias;
