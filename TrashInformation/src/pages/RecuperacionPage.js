import React from 'react';
import {Button, Card, Form, Input, Layout} from "antd";
import MainLogo from "../components/MainLogo";
import {Link} from "react-router-dom";
const {Header, Footer, Content} = Layout;
function RecuperacionPage(props) {
    return (
        <Layout>
            <Header>
                <MainLogo />
            </Header>
            <Content>
                <Card>
                    <Form>
                        <Form.Item>
                            <h1>Recupera tu cuenta</h1>
                            <h4>Te enviaremos un mensaje a tu correo. Ingresa tu correo electrónico</h4>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Correo electrónico"
                            rules={[
                                {
                                    type: "email",
                                    message:
                                        "El contenido del campo debe ser un correo electrónico",
                                },
                                {
                                    required: true,
                                    message:
                                        "El campo no debe estar vacío, por favor ingresa tu correo electrónico",
                                },
                            ]}
                        >
                            <Input allowClear />
                            <hr/>
                        </Form.Item>
                        <Form.Item>
                            <Button>
                                <Link to="/login">Cancelar</Link>
                                </Button>
                            <Button>Enviar</Button>
                        </Form.Item>
                    </Form>

                </Card>

            </Content>
            <Footer>

            </Footer>
        </Layout>
    );
}

export default RecuperacionPage;