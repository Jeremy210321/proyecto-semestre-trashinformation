import React from 'react';
import {Row, Col, Form, Input, Button,Upload} from "antd";
import "../styles/App.css"
import "../styles/MiCuenta.css"
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

function MiCuentaPage(props) {
    const user = [{
        names: " Jeremy León",
        email: "jeremy.leon@gmail.com"
    }

    ]
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
    return (
        <Row className="count-container">
            <Col span={12} className="col-load">
                <Form>
                    <Form.Item
                        name="load"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="Agregue su foto de perfil"
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Col>

            <Col>
                <Form
                >
                    <Form.Item
                        names="Nombres"
                        label="Nombres y apellidos"
                        hasFeedback

                        rules={[
                            {

                                required: true,
                                message:
                                    "El campo no debe estar vacío, por favor ingresa tu nombre y apellido",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Correco electrónico"
                        rules={[
                            {
                                type: 'email',
                                message: "El contenido del campo debe ser un correo electrónico",
                            },
                            {
                                required: true,
                                message: 'El campo no debe estar vacío, por favor ingresa tu correo electrónico',
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item
                        name="Direction"
                        label="Dirección"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message:
                                    "El campo no debe estar vacío, por favor ingresa una dirección",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label="Nombre de usuario"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message:
                                    "El campo no debe estar vacío, por favor ingresa un nombre de usuario",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item
                        name="Telephone"
                        label="Número de teléfono"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message:
                                    "El campo no debe estar vacío, por favor ingresa un número de teléfono",
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>

                    <Form.Item {...tailLayout} className="count-buttons">
                        <Button  htmlType="submit" className="secondary-button">
                            Cerrar Sesión
                        </Button>
                        <Button  htmlType="submit" className="primary-button">
                            Guardar
                        </Button>

                    </Form.Item>
                </Form>
            </Col>


        </Row>
    );
}

export default MiCuentaPage;