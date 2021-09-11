import React from "react";
import { Col, Row } from "antd";
import InfoRecomendations from "./InfoRecomendations";
import "../styles/RecomendationsPage.css";

function RecomendationsListOrg({ recomendationList }) {
  return (
    <div className="recomendationsList-style">
      <Row justify="space-between">
        {recomendationList.length > 0 ? (
          recomendationList.map((recomendation) => (
            <Col>
              <InfoRecomendations recomendations={recomendation} />
            </Col>
          ))
        ) : (
          <p>No existen coincidencias</p>
        )}
      </Row>
    </div>
  );
}

export default RecomendationsListOrg;
