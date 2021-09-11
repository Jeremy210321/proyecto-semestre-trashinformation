import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "../styles/InfoNoticias.css";

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
              src={news.image_url}
              className="card_image_news"
            />
          }
          actions={[
            <InfoCircleOutlined
              key="showDetails"
              onClick={handleShowDetails}
            />,
          ]}
        >
          <Meta title={news.title} description={news.small_description} />
        </Card>
      </div>
    </>
  );
}

export default InfoNoticias;
