import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import InfoNoticias from "./InfoNoticias";
import "../styles/NewsList.css";
import {useParams} from "react-router-dom";

function NewsList({newsList}) {
    const [filteredNews, setFilteredNews] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        const categories = {
            todos:"",
            reciclaje: "reciclaje",
            ambiente: "medio-ambiente",
            coronavirus: "coronavirus",
        };
        const newListNews = newsList.filter(
            (news) => news.type === categories[category]
        );
        setFilteredNews(newListNews);
    }, [category, newsList]);

    return (
        <div className="newsList-style">
            <Row justify="space-between" key={filteredNews.id}>
                {filteredNews.length > 0 ? (
                    filteredNews.map((news) => (
                        <Col>
                            <InfoNoticias news={news}/>
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
