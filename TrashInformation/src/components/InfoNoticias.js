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
              src={news.image_url}
              className="card_image_news"
            />
          }
          actions={[
            <Button type="primary" >
                <a href={news.font}><InfoCircleOutlined key="showDetails" /> Ver más</a>

            </Button>,
          ]}
        >
          <Meta title={news.title} description={news.small_description} />
        </Card>
        <ModalNoticias
          newsDetails={news}
          onShow={showDetails}
          onClose={handleCloseDetails}
        />
      </div>
    </>
  );
}

export default InfoNoticias;
