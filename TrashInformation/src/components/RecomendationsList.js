import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import InfoRecomendations from "./InfoRecomendations";
import "../styles/RecomendationsPage.css";
import { useParams } from "react-router-dom";

function RecomendationsList({ recomendationList }) {
  const [filteredRecommendations, setFiltereRecommendations] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const categories = {
      reciclables: "Reciclables",
      organicos: "Orgánicos",
      coronavirus: "Coronavirus",
    };
    const newListRec = recomendationList.filter(
      (recomendation) => recomendation.category === categories[category]
    );
    setFiltereRecommendations(newListRec);
  }, [category, recomendationList]);
  return (
    <div className="recomendationsList-style">
      <Row justify="space-between">
        {filteredRecommendations.length > 0 ? (
          filteredRecommendations.map((recomendation) => (
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

export default RecomendationsList;
