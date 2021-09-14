import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import "../styles/App.css";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import NewsList from "../components/NewsList";
import "../styles/NoticiasPage.css";
import {request} from "../util/request";
import {URL_READ_NEWS} from "../config/Constantes";
import NewsMenu from "../components/NewsMenu";


export * from "../config/Constantes";

function NoticiasPage(props) {
    let match = useRouteMatch();


    const [newsList, setNewsList] = useState(list);
    const [newsReciclaje, setNewsReciclaje] = useState([]);
    const [newsAmbiente, setNewsAmbiente] = useState([]);
    const [newsCoronavirus, setnewsCoronavirus] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            let bodyReadNews = {
                user_id: "123abc",
            };
            const news = await request(
                URL_READ_NEWS,
                bodyReadNews
            );
            console.log("news", news);
            setNewsList(news);
        };

        loadNews();
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
                <NewsMenu/>
                <Switch>
                    <Route path={`${match.path}/:category`}>
                        <NewsList newsList={newsList}/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default NoticiasPage;
