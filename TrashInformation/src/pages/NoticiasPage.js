import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import "../styles/App.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import NewsList from "../components/NewsList";
import "../styles/NoticiasPage.css";

function NoticiasPage(props) {
  let match = useRouteMatch();
  const list =[
      {
          id: "1",
          title:
              "Reciclar 140 toneladas de aceite usado de cocina al mes en Ecuador es nueva meta de iniciativa de empresa privada",
          small_description:"Nueva bodega se abrió en Durán para duplicar capacidad de recolección de aceite reciclado que se exporta a Europa para ser transformado en biodiésel.",
          type: "reciclaje",
          image_url:"https://www.eluniverso.com/resizer/jVZGGuXnCfnhqhKwasGgDLFInBQ=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/3S3IRVJYXVCFJLBG3RKZTNHYZU.PNG",
          font: "https://www.eluniverso.com/noticias/economia/reciclar-140-toneladas-de-aceite-usado-de-cocina-al-mes-en-ecuador-es-nueva-meta-de-iniciativa-de-empresa-privada-nota/",
      },
      {
          id: "2",
          title:"En Quito, más de 28.000 botellas han sido recicladas en las estaciones de Ecovía y Trolebús",
          small_description:"Las máquinas devuelven dos centavos por botella reciclada a los usuarios.",
          type: "reciclaje",
          image_url:"https://www.eluniverso.com/resizer/KEVAIDzlHWc600rTtkatPDArxjQ=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/RIYVMBPWFVFAZD6UPXYFK4IT4Q.jpeg",
          font: "https://www.eluniverso.com/noticias/ecuador/en-quito-mas-de-28000-botellas-han-sido-recicladas-en-las-estaciones-de-ecovia-y-trolebus-nota/",
      },
      {
          id: "3",
          title:"En Guayarte artistas ecuatorianas exhiben sus productos elaborados con llantas recicladas",
          small_description:"Las manos de las artesanas ecuatorianas hacen de una llanta inservible un objeto útil y decorativo.",
          type: "reciclaje",
          image_url:"https://www.eluniverso.com/resizer/1zvsx2JDENMcojqwaGC5PuA4bYc=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/K3ZHMB7UVNGZVIQYPJHEIYLYQE.jpg",
          font: "https://www.eluniverso.com/guayaquil/comunidad/en-guayarte-artistas-ecuatorianas-exhiben-sus-productos-elaborados-con-llantas-recicladas-nota/",
      },
      {
          id: "4",
          title:"Diez países pesqueros se comprometen a reciclar 1.500 toneladas de redes en desuso",
          small_description: "Se busca apoyar economía circular para elaborar nuevos productos.",
          type: "reciclaje",
          image_url:"https://www.eluniverso.com/resizer/a_axEb0bjkm_WTV5j1XfDVXvTvo=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BNJPCN75JNEMTKZQLTUFKKSKYE.jpg",
          font: "https://www.eluniverso.com/noticias/economia/amazon-destruye-cada-ano-millones-de-articulos-sin-vender-segun-investigacion-nota/",
      },
      {
          id: "5",
          title:"Hallan decenas de medidores de agua en recicladoras del centro de Guayaquil",
          small_description: "Hay un detenido y cinco locales clausurados.",
          type: "reciclaje",
          image_url:"https://www.eluniverso.com/resizer/R9a5ftfvxZjh_Zcfr7e0n4Ht_mA=/480x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/J7YGDHHIUVAB5F6DYZITBFY37E.jpeg",
          font: "https://www.eluniverso.com/guayaquil/comunidad/hallan-decenas-de-medidores-de-agua-en-recicladoras-del-centro-de-guayaquil-nota/",
      },
      {
          id: "6",
          title:"Ecuatorianos desconocen formas de desechar residuos electrónicos que pueden reciclarse",
          small_description: "El primer paso para alcanzar la economía circular es comprender que todos los ciudadanos somos responsables por lo que adquirimos y cómo deshacemos de aquello.",
          type: "reciclaje",
          image_url:"https://www.eluniverso.com/resizer/8Hwg14qPTeA60TMZdP8-tPuN0lg=/178x134/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/N4DZLX5G5BCGBGV4KMXNQLS7QI.jpeg",
          font: "https://www.eluniverso.com/noticias/economia/ecuatorianos-desconocen-formas-de-desechar-residuos-electronicos-que-pueden-reciclarse-nota/",
      },
      {
          id: "7",
          title:"Un tercio de los árboles silvestres del mundo están al borde de la extinción (y cuáles corren más peligro)",
          small_description:"La agricultura, la tala, la ganadería y el desarrollo urbanístico amenazan la biodiversidad de árboles en todo el planeta, según un reciente informe.",
          type: "ambiente",
          image_url:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1346B/production/_120355987_412bf51b-d676-4e56-9bdb-85b85c19801a.jpg",
          font: "https://www.bbc.com/mundo/noticias-58411160",
      },
      {
          id: "8",
          title:"Cómo el Mar Menor pasó de ser un paradisíaco destino en el Mediterráneo a una laguna de aguas verdes",
          small_description:"Sus aguas, que hasta hace cinco años eran cristalinas, se han vuelto turbias y sus costas han sido inundadas en varias ocasiones con gran cantidad de peces y animales muertos. Aquí te contamos qué pasó con el Mar Menor.",
          type: "ambiente",
          image_url:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/116CD/production/_120237317_tv069656199.jpg",
          font: "https://www.bbc.com/mundo/noticias-58325180",
      },
      {
          id: "9",
          title:"La cruzada por salvar el silencio, el 'sonido' más amenazado del mundo",
          small_description:
              "La cruzada por salvar el silencio, el 'sonido' más amenazado del mundo",
          type: "ambiente",
          image_url:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3223/production/_119653821_2.jpg",
          font: "https://www.bbc.com/mundo/vert-tra-58016779",
      },
      {
          id: "10",
          title:"https://www.bbc.com/mundo/noticias-36527829",
          small_description:"Están por todas partes, su zumbido es capaz de enloquecer y no discriminan a la hora de elegir a su presa, estos pequeños insectos son capaces de acabar con pueblos enteros. ¿Qué tanto conoces de este pequeño enemigo?",
          type: "ambiente",
          image_url:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/91D9/production/_89973373_mosquito_cdc.jpg",
          font: "https://www.bbc.com/mundo/noticias-36527829",
      },
      {
          id: "11",
          title:"El fascinante lago mexicano que alberga la forma de vida 'más antigua del planeta' ",
          small_description:"Famoso por sus brillantes siete tonos de azul, el lago mexicano de Bacalar alberga una antigua población de estromatolitos que tienen alrededor de 3.500 millones de años",
          type: "ambiente",
          image_url:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1582E/production/_119901188_b962bbc7-af60-4b83-accb-afd237e284b5.jpg",
          font: "https://www.bbc.com/mundo/vert-tra-58181986",
      },
      {
          id: "12",
          title:"Los puntos clave del informe de la ONU sobre cambio climático y qué dice sobre América Latina",
          small_description:"Con casi 4 mil páginas el nuevo reporte de Naciones Unidas es considerado como una alerta roja para la humanidad y un llamado a actuar contra el cambio climático.",
          type: "ambiente",
          image_url:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/168A1/production/_119912329_ok.jpg",
          font: "https://www.bbc.com/mundo/noticias-58190389",
      },
      {
          id: "13",
          title:"La OMS confirma el peor presagio de Pedro Cavadas sobre las vacunas del coronavirus",
          small_description:"El cirujano alertó hace ahora un año de la evolución «asimétrica» de la pandemia por las desigualdades en el reparto de las dosis",
          type: "coronavirus",
          image_url:"https://r1.abcimg.es/resizer/resizer.php?nuevoancho=233&imagen=%2F%2Fstatic3.abc.es%2Fmedia%2Fespana%2F2021%2F09%2F13%2Fpedro-cavadas-vacuna-coronavirus-ka5F--620x349%40abc.jpg&medio=abc",
          font: "https://www.abc.es/espana/comunidad-valenciana/abci-datos-confirman-presagio-pedro-cavadas-sobre-vacunas-coronavirus-202109131818_noticia.html",
      },
      {
          id: "14",
          title:"La paradoja del fumador y el Covid-19: menos riesgo de infección pero enfermedad más grave",
          small_description:"Los investigadores enfatizan que hay evidencias sólidas que muestran que fumar aumenta la gravedad del Covid-19",
          type: "coronavirus",
          image_url:"https://r1.abcimg.es/resizer/resizer.php?nuevoancho=233&imagen=%2F%2Fstatic2.abc.es%2Fmedia%2Fsalud%2F2021%2F09%2F13%2F1418427547-kKDF--620x349%40abc.jpg&medio=abc",
          font: "https://www.abc.es/salud/enfermedades/abci-paradoja-fumador-y-covid-19-menos-riesgo-infeccion-pero-enfermedad-mas-grave-202109131437_noticia.html",
      },
      {
          id: "15",
          title:"El color sí importa: un estudio concluye que las imágenes a color del coronavirus han hecho que se perciba como menos peligroso",
          small_description:"Las imágenes en blanco y negro, en cambio, inducen a pensar que el virus es más contagioso y generan, atendiendo al informe, mayor pánico en el espectador.",
          type: "coronavirus",
          image_url:"https://r1.abcimg.es/resizer/resizer.php?nuevoancho=233&imagen=%2F%2Fstatic2.abc.es%2Fmedia%2Fespana%2F2021%2F09%2F13%2FVirus-kn5F--620x349%40abc.jpg&medio=abc",
          font: "https://www.abc.es/espana/catalunya/abci-color-si-importa-estudio-concluye-imagenes-color-virus-hecho-perciba-como-menos-peligroso-202109131738_noticia.html",
      },
      {
          id: "16",
          title:"Mu: todo lo que hay que saber sobre la nueva variante del coronavirus",
          small_description:"Tiene diferencias genéticascon las otras variantes conocidas y está causando infecciones en múltiples países, por lo que podría representar una amenaza particular para la salud pública",
          type: "coronavirus",
          image_url:"https://r1.abcimg.es/resizer/resizer.php?nuevoancho=233&imagen=%2F%2Fstatic1.abc.es%2Fmedia%2Fsalud%2F2021%2F09%2F13%2Fcovid-19-concept-kWt--620x349%40abc.jpg&medio=abc",
          font: "https://www.abc.es/salud/enfermedades/abci-todo-saber-sobre-nueva-variante-coronavirus-202109131028_noticia.html",
      },
      {
          id: "17",
          title:"Un bombero lleva durante 10 días al hospital un cartel para animar a su esposa ingresada por coronavirus",
          small_description:"Cada día, iba al apardamiento para que ella pudiera ver su mensaje de ánimo: «Te amo»",
          type: "coronavirus",
          image_url:"https://r1.abcimg.es/resizer/resizer.php?nuevoancho=233&imagen=%2F%2Fstatic1.abc.es%2Fmedia%2Frecreo%2F2021%2F09%2F10%2Fcoronavirus-sanitario-kGcB--620x349%40abc.jpg&medio=abc",
          font: "https://www.abc.es/recreo/abci-bombero-lleva-durante-10-dias-hospital-cartel-para-animar-esposa-ingresada-coronavirus-202109101627_noticia.html",
      },
      {
          id: "18",
          title:"EE.UU. autorizará la vacuna para niños a finales de octubre, según Reuters",
          small_description:"Será a finales de este mes cuando Pfizer solicite autorización a la FDA para inocular el fármaco a menores de 12 años",
          type: "coronavirus",
          image_url:"https://r1.abcimg.es/resizer/resizer.php?nuevoancho=233&imagen=%2F%2Fstatic1.abc.es%2Fmedia%2Fsociedad%2F2021%2F09%2F11%2Fafp-vaccine-ksZB--620x349%40abc.jpg&medio=abc",
          font: "https://www.abc.es/sociedad/abci-eeuu-autorizara-vacuna-para-ninos-finales-octubre-segun-reuters-202109111628_noticia.html",
      }
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
