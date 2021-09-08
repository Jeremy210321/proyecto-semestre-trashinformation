import React, { useState } from "react";
import "../styles/App.css";
import InfoRecomendations from "../components/InfoRecomendations";
import { Col, Row } from "antd";

function RecomendationsPage(props) {
  const recomendations = [
    {
      Title: "Botellas de plástico",
      Category: "Reciclables",
      Description: "Las botellas y su descripción",
      PortalImage:
        "https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      ProfileImage:
        "https://images.unsplash.com/photo-1616118134296-63970235de49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      Title: "Cartones reutilizables",
      Category: "Reciclables",
      Description: "Los cartones que puedes usar de nuevo",
      PortalImage:
        "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      ProfileImage:
        "https://images.unsplash.com/photo-1615090525174-0131ad9367f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    },
    {
      Title: "Compostaje cacero",
      Category: "Orgánicos",
      Description: "El compostaje hace bien al planeta",
      PortalImage:
        "https://images.unsplash.com/photo-1621460248137-1656be874a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
      ProfileImage:
        "https://images.unsplash.com/photo-1597942524158-76a19366f4f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    },
    {
      Title: "La importancia de los fertilizantes",
      Category: "Orgánicos",
      Description:
        "El fertilizante como un aliado contra el calentamiento global",
      PortalImage:
        "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      ProfileImage:
        "https://images.unsplash.com/photo-1581578017306-7334b15283df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      Title: "Basura contaminada",
      Category: "Coronavirus",
      Description:
        "Los residuos contaminados son mas peligrosos de lo que se cree",
      PortalImage:
        "https://images.unsplash.com/photo-1558497513-f0133e055abf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      ProfileImage:
        "https://images.unsplash.com/photo-1547671916-8dfb17579d01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80",
    },
    {
      Title: "Mascarillas, seguro de vida",
      Category: "Coronavirus",
      Description: "A menudo las mascarillas no son tratadas como se debería",
      PortalImage:
        "https://images.unsplash.com/photo-1591870036007-2d195e054914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      ProfileImage:
        "https://images.unsplash.com/photo-1584634428004-1180accbcc9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
    },
  ];

  const [recomendationsList, setRecomendationsList] = useState(recomendations);

  return (
    <div>
      <h1>Aqui van las recomendaciones</h1>
      <Row justify="space-between">
        {recomendationsList.length > 0 ? (
          recomendationsList.map((recomendation) => (
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

export default RecomendationsPage;
