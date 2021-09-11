import React from "react";
import { Col, Row } from "antd";
import InfoNoticias from "./InfoNoticias";
import "../styles/NewsList.css";

function NewsList({ news }) {
  return (
    <div className="newsList-style">
      <Row justify="space-between" key={news.id}>
        {news.length > 0 ? (
          news.map((news) => (
            <Col>
              <InfoNoticias news={news} />
            </Col>
          ))
        ) : (
          <p>No existen coincidencias</p>
        )}
      </Row>
    </div>
  );
}

export default NewsList;
