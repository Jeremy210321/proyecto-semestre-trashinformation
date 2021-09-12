import React, { useState } from "react";
import { Carousel } from "antd";
import "../styles/CarruselVideos.css";

function CarruselVideos(props) {
  const imagesList = [
    {
      title: "imagen1",
      image:
        "https://t2.ev.ltmcdn.com/es/posts/5/9/4/frases_motivadoras_sobre_reciclar_1495_3_600.jpg",
    },

    {
      title: "imagen2",
      image:
        "https://t1.ev.ltmcdn.com/es/posts/5/9/4/las_mejores_frases_de_reciclaje_1495_paso_4_600.jpg",
    },
    {
      title: "imagen3",
      image:
        "https://ecologiahoy.net/wp-content/uploads/2016/05/Ambientefrases-de-reciclaje-5-638.jpg",
    },
    {
      title: "imagen4",
      image:
        "https://www.encontrarse.com/notas/fotos/encontrarse.com.textos.74957.JPG",
    },

    {
      title: "imagen5",
      image: "https://pbs.twimg.com/media/EX5511CX0AAymIF.jpg",
    },
  ];

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const [imagesListCarousel, setimagesListCarousel] = useState(imagesList);

  return (
    <div className="carruselVideos-carousel">
      <Carousel autoplay>
        {imagesListCarousel.map((image) => (
          <div>
            <img
              className="carruselVideos-images"
              src={image.image}
              alt={image.title}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarruselVideos;
