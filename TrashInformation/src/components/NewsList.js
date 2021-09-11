import React from 'react';
import {Col, Row} from "antd";
import InfoNoticias from "./InfoNoticias";

function NewsList({news}) {
    return (
        <div>
            {/*<h1>Aqui van las recomendaciones</h1>*/}
            <Row justify="space-between" key={news.id}>
                {news.length > 0 ? (
                    news.map((news) => (
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