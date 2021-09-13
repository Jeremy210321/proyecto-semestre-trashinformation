import React from "react";
import {Layout, Row, Col, Card} from "antd";
import {Button, Checkbox, Form, Input} from "antd";
import {auth} from "../firebase";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import "../styles/LoginPage.css";
import MainFooter from "../components/MainFooter";
import {Link} from "react-router-dom";

const {Header, Footer, Content} = Layout;

function LoginPage() {
    const [form] = Form.useForm();


    const onFinish = async ({email, password}) => {
        console.log("", email);
        console.log("", password);
        try {
            const userCredential = await auth.signInWithEmailAndPassword(
                email,
                password
            );

            // Signed in
            const user = userCredential.user;
            console.log("user", user);
            // ...
        } catch (error) {
            const errorCode = error.code;
            console.log("error", errorCode);
            const cid = error.message;
            console.log("", cid);
        }

        console.log("Boton de envio de formulario");
    };

    const formItemLayout = {
        wrapperCol: {
            xs: {span: 8},
            sm: {span: 24},
        },
    };

    return (
        <Layout>
            <Header className="login-header">Consulta, navega y aprende sobre tus desperdicios.</Header>
            <Content className="login-content">
                <Row>
                    <Col span={12} >
                        <Row>
                            <img src="https://i.ibb.co/xGRQfG3/Principal-Logo.png" alt="Principal-Logo" border="0"
                                 className="principalLogo"/>
                            <h5 >¡Fomentemos juntos una cultura ambiental responsable!</h5>
                        </Row>

                    </Col>

                    <Col span={8}>
                        <Card>
                            <Form
                                form={form}
                                {...formItemLayout}
                                name="normal_login"
                                className="login-form"
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Porfavor ingrese su email!",
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<UserOutlined className="site-form-item-icon"/>}
                                        placeholder="E-mail"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Porfavor ingrese su contraseña!",
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Recordarme</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                    >
                                        Iniciar Sesión
                                    </Button>

                                </Form.Item>
                                <Form.Item>
                                    <hr/>
                                    <Link className="login-form-forgot" to="/recuperacion">
                                        Recuperar contraseña
                                    </Link>
                                </Form.Item>


                                <Form.Item>
                                    <Button className="register-form-button">
                                        <Link to="/registro">Crear cuenta nueva</Link>
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>

                    </Col>
                </Row>
            </Content>
            <Footer className="main-footer">
                <MainFooter/>{" "}
            </Footer>
        </Layout>


    );
}

export default LoginPage;
