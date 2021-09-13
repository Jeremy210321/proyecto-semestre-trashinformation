import React, { useState } from "react";
import "../styles/App.css";
import CarruselVideos from "../components/CarruselVideos";
import "../styles/VideosPage.css";
import InfoVideosList from "../components/InfoVideosList";
import { Col, Row } from "antd";

function VideosPage(props) {
  const videos = [
    {
      title: "Botellas de plástico",
      credites: "Canal de youtube",
      videourl: "https://www.youtube.com/watch?v=lcJrxd2tZYw",
      videolocal: "https://www.youtube.com/watch?v=C1M8WdkqXMA",
      portal:
        "https://services.meteored.com/img/article/dia-mundial-del-reciclaje-generamos-471-kg-de-residuos-al-ano-335531-1.jpg",
    },
    {
      title: "Cartones cafeses",
      credites: "Canal de youtube",
      videourl: "https://www.youtube.com/watch?v=f6-BXv8Ryoc",
      videolocal: "https://www.youtube.com/watch?v=C1M8WdkqXMA",
      portal:
        "https://www.liderdelemprendimiento.com/wp-content/uploads/2020/03/Reciclaje-empresarial-3000x3000.jpg",
    },
    {
      title: "Plantitas en el hogar",
      credites: "Canal de youtube",
      videourl: "https://www.youtube.com/watch?v=rWVgn2NjfGA",
      videolocal: "https://www.youtube.com/watch?v=C1M8WdkqXMA",
      portal:
        "https://twenergy.com/wp-content/uploads/2019/11/formas-recicla-plastico.jpg",
    },
  ];

  const [videosList, setVideosList] = useState(videos);

  return (
    <>
      <div className="videosPage-content">
        <h1 className="videosPage-slogan">
          Los mejores videos sobre tratamiento de la basura y temas relacionados
        </h1>
        <CarruselVideos />
        <div className="videosPage-cards">
          <Row justify="space-between">
            {videosList.length > 0 ? (
              videosList.map((video) => (
                <Col>
                  <InfoVideosList videos={video} />
                </Col>
              ))
            ) : (
              <p>No existen coincidencias</p>
            )}
          </Row>
        </div>
      </div>
    </>
  );
}

export default VideosPage;
