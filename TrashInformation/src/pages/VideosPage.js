import React, { useEffect, useState } from "react";
import "../styles/App.css";
import CarruselVideos from "../components/CarruselVideos";
import "../styles/VideosPage.css";
import InfoVideosList from "../components/InfoVideosList";
import { Col, Row } from "antd";
import { request } from "../util/request";
import { URL_READ_VIDEOS } from "../config/Constantes";

function VideosPage(props) {
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      let bodyReadRecomendations = {
        user_id: "123abc",
      };
      const videos = await request(URL_READ_VIDEOS, bodyReadRecomendations);
      setVideosList(videos);
    };

    loadVideos();
  }, []);

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
