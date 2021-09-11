import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import "../styles/App.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import NewsList from "../components/NewsList";
import "../styles/NoticiasPage.css";

function NoticiasPage(props) {
  let match = useRouteMatch();
  const list = [
    {
      id: "1",
      title:
        "En Guayarte artistas ecuatorianas exhiben sus productos elaborados con llantas recicladas",
      small_description:
        "Las manos de las artesanas ecuatorianas hacen de una llanta inservible un objeto útil y decorativo.",
      type: "reciclaje",
      image_url:
        "https://www.eluniverso.com/resizer/6eIfOUDeAINlwjBU07BklAfDAqs=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/K3ZHMB7UVNGZVIQYPJHEIYLYQE.jpg",
      content:
        "Gremios de pesca industrial de diez países de América Latina se comprometieron a recuperar 1.500 toneladas de redes y aparejos en desuso para su reciclaje y posterior elaboración de nuevos productos. La iniciativa, que busca apoyar la economía circular, involucra a Ecuador, Argentina, Uruguay, Brasil, México, Costa Rica, El Salvador, Colombia, Perú y Chile. El compromiso de reciclar las redes se fijó en la sexta reunión de la Alianza Latinoamericana para la Pesca Sustentable y la Seguridad Alimentaria (Alpescas), de la cual es parte la Cámara Nacional de Pesquería de Ecuador. Este acuerdo se firmó con Bureo Inc., una empresa que elabora gorras a partir de reciclaje de redes. Con este acuerdo se pretende proteger los océanos de redes fantasmas, reducir la huella de carbono asociado al uso de esta materia prima, generar nuevos productos con valor agregado y aportar a los cumplimientos de los Objetivos de Desarrollo Sostenible de Naciones Unidas. Osciel Velásquez, presidente de Alpescas, dijo que no existe un precedente a nivel mundial de una iniciativa similar, que agrupe a la industria de todo un continente. “Hoy la economía circular permite un aprovechamiento integral de los recursos pesqueros, reciclando y reutilizando diversos desechos del proceso para generar nuevos productos, contribuyendo a más negocios y a la utilización de residuos biológicos y técnicos”, agregó Velásquez. Humberto Becerra, presidente de la Cámara Nacional de las Industrias Pesquera y Acuícola (Canainpesca), expresó la importancia de fortalecer la coordinación de las empresas para seguir impulsando la sostenibilidad de las pesquerías y adecuarse al mercado para fomentar el consumo. Durante la cita de los gremios de pesca industrial también se abordaron otros temas, como el impacto del COVID-19 y la pesca ilegal. Ray Hilborn, biólogo marino y profesor de Ciencias Acuáticas y Pesqueras en la Universidad de Washington, subrayó que la pesca no es la principal amenaza para los océanos, pues produce alimentos a un costo ambiental mucho menor que la agricultura. Pero enfatizó que es necesario gestionarla de manera sustentable. “La pesca no modifica los océanos, y en comparación con otras amenazas, es de relativamente bajo impacto y manejable”, dijo. Julio Berdegué, representante regional para América Latina y el Caribe de la FAO, expuso que el 40 % de la población en América Latina y el Caribe vive en inseguridad alimentaria, y reconoció que sin la pesca no podrá alcanzarse el objetivo de hambre cero. “Productividad, con sostenibilidad e inclusión social, es la ecuación para la pesca en este siglo; si no se resuelve, el futuro será muy incierto”, dijo al recordar que el año pasado, en un solo año, 44 millones de personas adicionales se unieron al grupo de quienes viven en inseguridad alimentaria. “Ese es el impacto de la pandemia. Ninguna otra región del mundo tuvo un incremento tan grande”, refirió. (I)",
      font: "https://www.eluniverso.com/guayaquil/comunidad/en-guayarte-artistas-ecuatorianas-exhiben-sus-productos-elaborados-con-llantas-recicladas-nota/",
    },
    {
      id: "2",
      title:
        "Diez países pesqueros se comprometen a reciclar 1.500 toneladas de redes en desuso",
      small_description:
        "Se busca apoyar economía circular para elaborar nuevos productos.",
      type: "reciclaje",
      image_url:
        "https://www.eluniverso.com/resizer/ECr6MYK72dvmLRbLNpTidKMarro=/834x644/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BNJPCN75JNEMTKZQLTUFKKSKYE.jpg",
      content:
        "Gremios de pesca industrial de diez países de América Latina se comprometieron a recuperar 1.500 toneladas de redes y aparejos en desuso para su reciclaje y posterior elaboración de nuevos productos. La iniciativa, que busca apoyar la economía circular, involucra a Ecuador, Argentina, Uruguay, Brasil, México, Costa Rica, El Salvador, Colombia, Perú y Chile. El compromiso de reciclar las redes se fijó en la sexta reunión de la Alianza Latinoamericana para la Pesca Sustentable y la Seguridad Alimentaria (Alpescas), de la cual es parte la Cámara Nacional de Pesquería de Ecuador. Este acuerdo se firmó con Bureo Inc., una empresa que elabora gorras a partir de reciclaje de redes. Con este acuerdo se pretende proteger los océanos de redes fantasmas, reducir la huella de carbono asociado al uso de esta materia prima, generar nuevos productos con valor agregado y aportar a los cumplimientos de los Objetivos de Desarrollo Sostenible de Naciones Unidas. Osciel Velásquez, presidente de Alpescas, dijo que no existe un precedente a nivel mundial de una iniciativa similar, que agrupe a la industria de todo un continente. “Hoy la economía circular permite un aprovechamiento integral de los recursos pesqueros, reciclando y reutilizando diversos desechos del proceso para generar nuevos productos, contribuyendo a más negocios y a la utilización de residuos biológicos y técnicos”, agregó Velásquez. Humberto Becerra, presidente de la Cámara Nacional de las Industrias Pesquera y Acuícola (Canainpesca), expresó la importancia de fortalecer la coordinación de las empresas para seguir impulsando la sostenibilidad de las pesquerías y adecuarse al mercado para fomentar el consumo. Durante la cita de los gremios de pesca industrial también se abordaron otros temas, como el impacto del COVID-19 y la pesca ilegal. Ray Hilborn, biólogo marino y profesor de Ciencias Acuáticas y Pesqueras en la Universidad de Washington, subrayó que la pesca no es la principal amenaza para los océanos, pues produce alimentos a un costo ambiental mucho menor que la agricultura. Pero enfatizó que es necesario gestionarla de manera sustentable. “La pesca no modifica los océanos, y en comparación con otras amenazas, es de relativamente bajo impacto y manejable”, dijo. Julio Berdegué, representante regional para América Latina y el Caribe de la FAO, expuso que el 40 % de la población en América Latina y el Caribe vive en inseguridad alimentaria, y reconoció que sin la pesca no podrá alcanzarse el objetivo de hambre cero. “Productividad, con sostenibilidad e inclusión social, es la ecuación para la pesca en este siglo; si no se resuelve, el futuro será muy incierto”, dijo al recordar que el año pasado, en un solo año, 44 millones de personas adicionales se unieron al grupo de quienes viven en inseguridad alimentaria. “Ese es el impacto de la pandemia. Ninguna otra región del mundo tuvo un incremento tan grande”, refirió. (I)",
      font: "https://www.eluniverso.com/noticias/economia/diez-paises-pesqueros-se-compromoten-a-reciclar-1500-toneladas-de-redes-en-desuso-nota/",
    },
    {
      id: "3",
      title:
        "En Guayarte artistas ecuatorianas exhiben sus productos elaborados con llantas recicladas",
      small_description:
        "Las manos de las artesanas ecuatorianas hacen de una llanta inservible un objeto útil y decorativo.",
      type: "ambiente",
      image_url:
        "https://www.eluniverso.com/resizer/6eIfOUDeAINlwjBU07BklAfDAqs=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/K3ZHMB7UVNGZVIQYPJHEIYLYQE.jpg",
      content:
        "Gremios de pesca industrial de diez países de América Latina se comprometieron a recuperar 1.500 toneladas de redes y aparejos en desuso para su reciclaje y posterior elaboración de nuevos productos. La iniciativa, que busca apoyar la economía circular, involucra a Ecuador, Argentina, Uruguay, Brasil, México, Costa Rica, El Salvador, Colombia, Perú y Chile. El compromiso de reciclar las redes se fijó en la sexta reunión de la Alianza Latinoamericana para la Pesca Sustentable y la Seguridad Alimentaria (Alpescas), de la cual es parte la Cámara Nacional de Pesquería de Ecuador. Este acuerdo se firmó con Bureo Inc., una empresa que elabora gorras a partir de reciclaje de redes. Con este acuerdo se pretende proteger los océanos de redes fantasmas, reducir la huella de carbono asociado al uso de esta materia prima, generar nuevos productos con valor agregado y aportar a los cumplimientos de los Objetivos de Desarrollo Sostenible de Naciones Unidas. Osciel Velásquez, presidente de Alpescas, dijo que no existe un precedente a nivel mundial de una iniciativa similar, que agrupe a la industria de todo un continente. “Hoy la economía circular permite un aprovechamiento integral de los recursos pesqueros, reciclando y reutilizando diversos desechos del proceso para generar nuevos productos, contribuyendo a más negocios y a la utilización de residuos biológicos y técnicos”, agregó Velásquez. Humberto Becerra, presidente de la Cámara Nacional de las Industrias Pesquera y Acuícola (Canainpesca), expresó la importancia de fortalecer la coordinación de las empresas para seguir impulsando la sostenibilidad de las pesquerías y adecuarse al mercado para fomentar el consumo. Durante la cita de los gremios de pesca industrial también se abordaron otros temas, como el impacto del COVID-19 y la pesca ilegal. Ray Hilborn, biólogo marino y profesor de Ciencias Acuáticas y Pesqueras en la Universidad de Washington, subrayó que la pesca no es la principal amenaza para los océanos, pues produce alimentos a un costo ambiental mucho menor que la agricultura. Pero enfatizó que es necesario gestionarla de manera sustentable. “La pesca no modifica los océanos, y en comparación con otras amenazas, es de relativamente bajo impacto y manejable”, dijo. Julio Berdegué, representante regional para América Latina y el Caribe de la FAO, expuso que el 40 % de la población en América Latina y el Caribe vive en inseguridad alimentaria, y reconoció que sin la pesca no podrá alcanzarse el objetivo de hambre cero. “Productividad, con sostenibilidad e inclusión social, es la ecuación para la pesca en este siglo; si no se resuelve, el futuro será muy incierto”, dijo al recordar que el año pasado, en un solo año, 44 millones de personas adicionales se unieron al grupo de quienes viven en inseguridad alimentaria. “Ese es el impacto de la pandemia. Ninguna otra región del mundo tuvo un incremento tan grande”, refirió. (I)",
      font: "https://www.eluniverso.com/guayaquil/comunidad/en-guayarte-artistas-ecuatorianas-exhiben-sus-productos-elaborados-con-llantas-recicladas-nota/",
    },
    {
      id: "4",
      title:
        "Diez países pesqueros se comprometen a reciclar 1.500 toneladas de redes en desuso",
      small_description:
        "Se busca apoyar economía circular para elaborar nuevos productos.",
      type: "ambiente",
      image_url:
        "https://www.eluniverso.com/resizer/ECr6MYK72dvmLRbLNpTidKMarro=/834x644/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BNJPCN75JNEMTKZQLTUFKKSKYE.jpg",
      content:
        "Gremios de pesca industrial de diez países de América Latina se comprometieron a recuperar 1.500 toneladas de redes y aparejos en desuso para su reciclaje y posterior elaboración de nuevos productos. La iniciativa, que busca apoyar la economía circular, involucra a Ecuador, Argentina, Uruguay, Brasil, México, Costa Rica, El Salvador, Colombia, Perú y Chile. El compromiso de reciclar las redes se fijó en la sexta reunión de la Alianza Latinoamericana para la Pesca Sustentable y la Seguridad Alimentaria (Alpescas), de la cual es parte la Cámara Nacional de Pesquería de Ecuador. Este acuerdo se firmó con Bureo Inc., una empresa que elabora gorras a partir de reciclaje de redes. Con este acuerdo se pretende proteger los océanos de redes fantasmas, reducir la huella de carbono asociado al uso de esta materia prima, generar nuevos productos con valor agregado y aportar a los cumplimientos de los Objetivos de Desarrollo Sostenible de Naciones Unidas. Osciel Velásquez, presidente de Alpescas, dijo que no existe un precedente a nivel mundial de una iniciativa similar, que agrupe a la industria de todo un continente. “Hoy la economía circular permite un aprovechamiento integral de los recursos pesqueros, reciclando y reutilizando diversos desechos del proceso para generar nuevos productos, contribuyendo a más negocios y a la utilización de residuos biológicos y técnicos”, agregó Velásquez. Humberto Becerra, presidente de la Cámara Nacional de las Industrias Pesquera y Acuícola (Canainpesca), expresó la importancia de fortalecer la coordinación de las empresas para seguir impulsando la sostenibilidad de las pesquerías y adecuarse al mercado para fomentar el consumo. Durante la cita de los gremios de pesca industrial también se abordaron otros temas, como el impacto del COVID-19 y la pesca ilegal. Ray Hilborn, biólogo marino y profesor de Ciencias Acuáticas y Pesqueras en la Universidad de Washington, subrayó que la pesca no es la principal amenaza para los océanos, pues produce alimentos a un costo ambiental mucho menor que la agricultura. Pero enfatizó que es necesario gestionarla de manera sustentable. “La pesca no modifica los océanos, y en comparación con otras amenazas, es de relativamente bajo impacto y manejable”, dijo. Julio Berdegué, representante regional para América Latina y el Caribe de la FAO, expuso que el 40 % de la población en América Latina y el Caribe vive en inseguridad alimentaria, y reconoció que sin la pesca no podrá alcanzarse el objetivo de hambre cero. “Productividad, con sostenibilidad e inclusión social, es la ecuación para la pesca en este siglo; si no se resuelve, el futuro será muy incierto”, dijo al recordar que el año pasado, en un solo año, 44 millones de personas adicionales se unieron al grupo de quienes viven en inseguridad alimentaria. “Ese es el impacto de la pandemia. Ninguna otra región del mundo tuvo un incremento tan grande”, refirió. (I)",
      font: "https://www.eluniverso.com/noticias/economia/diez-paises-pesqueros-se-compromoten-a-reciclar-1500-toneladas-de-redes-en-desuso-nota/",
    },
    {
      id: "5",
      title:
        "En Guayarte artistas ecuatorianas exhiben sus productos elaborados con llantas recicladas",
      small_description:
        "Las manos de las artesanas ecuatorianas hacen de una llanta inservible un objeto útil y decorativo.",
      type: "coronavirus",
      image_url:
        "https://www.eluniverso.com/resizer/6eIfOUDeAINlwjBU07BklAfDAqs=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/K3ZHMB7UVNGZVIQYPJHEIYLYQE.jpg",
      content:
        "Gremios de pesca industrial de diez países de América Latina se comprometieron a recuperar 1.500 toneladas de redes y aparejos en desuso para su reciclaje y posterior elaboración de nuevos productos. La iniciativa, que busca apoyar la economía circular, involucra a Ecuador, Argentina, Uruguay, Brasil, México, Costa Rica, El Salvador, Colombia, Perú y Chile. El compromiso de reciclar las redes se fijó en la sexta reunión de la Alianza Latinoamericana para la Pesca Sustentable y la Seguridad Alimentaria (Alpescas), de la cual es parte la Cámara Nacional de Pesquería de Ecuador. Este acuerdo se firmó con Bureo Inc., una empresa que elabora gorras a partir de reciclaje de redes. Con este acuerdo se pretende proteger los océanos de redes fantasmas, reducir la huella de carbono asociado al uso de esta materia prima, generar nuevos productos con valor agregado y aportar a los cumplimientos de los Objetivos de Desarrollo Sostenible de Naciones Unidas. Osciel Velásquez, presidente de Alpescas, dijo que no existe un precedente a nivel mundial de una iniciativa similar, que agrupe a la industria de todo un continente. “Hoy la economía circular permite un aprovechamiento integral de los recursos pesqueros, reciclando y reutilizando diversos desechos del proceso para generar nuevos productos, contribuyendo a más negocios y a la utilización de residuos biológicos y técnicos”, agregó Velásquez. Humberto Becerra, presidente de la Cámara Nacional de las Industrias Pesquera y Acuícola (Canainpesca), expresó la importancia de fortalecer la coordinación de las empresas para seguir impulsando la sostenibilidad de las pesquerías y adecuarse al mercado para fomentar el consumo. Durante la cita de los gremios de pesca industrial también se abordaron otros temas, como el impacto del COVID-19 y la pesca ilegal. Ray Hilborn, biólogo marino y profesor de Ciencias Acuáticas y Pesqueras en la Universidad de Washington, subrayó que la pesca no es la principal amenaza para los océanos, pues produce alimentos a un costo ambiental mucho menor que la agricultura. Pero enfatizó que es necesario gestionarla de manera sustentable. “La pesca no modifica los océanos, y en comparación con otras amenazas, es de relativamente bajo impacto y manejable”, dijo. Julio Berdegué, representante regional para América Latina y el Caribe de la FAO, expuso que el 40 % de la población en América Latina y el Caribe vive en inseguridad alimentaria, y reconoció que sin la pesca no podrá alcanzarse el objetivo de hambre cero. “Productividad, con sostenibilidad e inclusión social, es la ecuación para la pesca en este siglo; si no se resuelve, el futuro será muy incierto”, dijo al recordar que el año pasado, en un solo año, 44 millones de personas adicionales se unieron al grupo de quienes viven en inseguridad alimentaria. “Ese es el impacto de la pandemia. Ninguna otra región del mundo tuvo un incremento tan grande”, refirió. (I)",
      font: "https://www.eluniverso.com/guayaquil/comunidad/en-guayarte-artistas-ecuatorianas-exhiben-sus-productos-elaborados-con-llantas-recicladas-nota/",
    },
    {
      id: "6",
      title:
        "Diez países pesqueros se comprometen a reciclar 1.500 toneladas de redes en desuso",
      small_description:
        "Se busca apoyar economía circular para elaborar nuevos productos.",
      type: "coronavirus",
      image_url:
        "https://www.eluniverso.com/resizer/ECr6MYK72dvmLRbLNpTidKMarro=/834x644/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BNJPCN75JNEMTKZQLTUFKKSKYE.jpg",
      content:
        "Gremios de pesca industrial de diez países de América Latina se comprometieron a recuperar 1.500 toneladas de redes y aparejos en desuso para su reciclaje y posterior elaboración de nuevos productos. La iniciativa, que busca apoyar la economía circular, involucra a Ecuador, Argentina, Uruguay, Brasil, México, Costa Rica, El Salvador, Colombia, Perú y Chile. El compromiso de reciclar las redes se fijó en la sexta reunión de la Alianza Latinoamericana para la Pesca Sustentable y la Seguridad Alimentaria (Alpescas), de la cual es parte la Cámara Nacional de Pesquería de Ecuador. Este acuerdo se firmó con Bureo Inc., una empresa que elabora gorras a partir de reciclaje de redes. Con este acuerdo se pretende proteger los océanos de redes fantasmas, reducir la huella de carbono asociado al uso de esta materia prima, generar nuevos productos con valor agregado y aportar a los cumplimientos de los Objetivos de Desarrollo Sostenible de Naciones Unidas. Osciel Velásquez, presidente de Alpescas, dijo que no existe un precedente a nivel mundial de una iniciativa similar, que agrupe a la industria de todo un continente. “Hoy la economía circular permite un aprovechamiento integral de los recursos pesqueros, reciclando y reutilizando diversos desechos del proceso para generar nuevos productos, contribuyendo a más negocios y a la utilización de residuos biológicos y técnicos”, agregó Velásquez. Humberto Becerra, presidente de la Cámara Nacional de las Industrias Pesquera y Acuícola (Canainpesca), expresó la importancia de fortalecer la coordinación de las empresas para seguir impulsando la sostenibilidad de las pesquerías y adecuarse al mercado para fomentar el consumo. Durante la cita de los gremios de pesca industrial también se abordaron otros temas, como el impacto del COVID-19 y la pesca ilegal. Ray Hilborn, biólogo marino y profesor de Ciencias Acuáticas y Pesqueras en la Universidad de Washington, subrayó que la pesca no es la principal amenaza para los océanos, pues produce alimentos a un costo ambiental mucho menor que la agricultura. Pero enfatizó que es necesario gestionarla de manera sustentable. “La pesca no modifica los océanos, y en comparación con otras amenazas, es de relativamente bajo impacto y manejable”, dijo. Julio Berdegué, representante regional para América Latina y el Caribe de la FAO, expuso que el 40 % de la población en América Latina y el Caribe vive en inseguridad alimentaria, y reconoció que sin la pesca no podrá alcanzarse el objetivo de hambre cero. “Productividad, con sostenibilidad e inclusión social, es la ecuación para la pesca en este siglo; si no se resuelve, el futuro será muy incierto”, dijo al recordar que el año pasado, en un solo año, 44 millones de personas adicionales se unieron al grupo de quienes viven en inseguridad alimentaria. “Ese es el impacto de la pandemia. Ninguna otra región del mundo tuvo un incremento tan grande”, refirió. (I)",
      font: "https://www.eluniverso.com/noticias/economia/diez-paises-pesqueros-se-compromoten-a-reciclar-1500-toneladas-de-redes-en-desuso-nota/",
    },
  ];

  const [newsList, setNewsList] = useState(list);
  const [newsReciclaje, setNewsReciclaje] = useState([]);
  const [newsAmbiente, setNewsAmbiente] = useState([]);
  const [newsCoronavirus, setnewsCoronavirus] = useState([]);

  useEffect(() => {
    const newListRec = newsList.filter(
      (recomendation, index) => newsList[index].type === "reciclaje"
    );
    setNewsReciclaje(newListRec);
    const newListAmb = newsList.filter(
      (recomendation, index) => newsList[index].type === "ambiente"
    );
    setNewsAmbiente(newListAmb);
    const newListCor = newsList.filter(
      (recomendation, index) => newsList[index].type === "coronavirus"
    );
    setnewsCoronavirus(newListCor);
  }, []);

  return (
    <>
      <div>
        <Menu theme="light" mode="horizontal" className="noticiasPage-menu">
          <Menu.Item>
            <Link to={`${match.url}/novedades`}>Temas a seguir</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`${match.url}/reciclaje`}>Reciclaje</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`${match.url}/ambiente`}>Medio Ambiente</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`${match.url}/coronavirus`}>Desechos coronavirus</Link>
          </Menu.Item>
        </Menu>
        <h1 className="noticiasPage-slogan">
          Infórmate y cuida nuestro planeta con las noticias más actuales
        </h1>
        <Switch>
          <Route path={`${match.path}/novedades`}>
            <NewsList news={newsList} />
          </Route>
          <Route path={`${match.path}/reciclaje`}>
            <NewsList news={newsReciclaje} />
          </Route>
          <Route path={`${match.path}/ambiente`}>
            <NewsList news={newsAmbiente} />
          </Route>
          <Route path={`${match.path}/coronavirus`}>
            <NewsList news={newsCoronavirus} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default NoticiasPage;
