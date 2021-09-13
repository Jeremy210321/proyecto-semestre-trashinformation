import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import "../styles/RegisterPage.css";
import { Option } from "antd/lib/mentions";
import { auth, db } from "../firebase";

function RegisterPage() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Valores del formulario ", values);

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      // Signed in
      const user = userCredential.user;
      console.log("user", user);
      //...

      await db.ref("users/" + user.uid).set({
        id: user.uid,
        email: values.email,
        name: values.name,
        lastname: values.lastname,
        address: values.address,
        user: values.user,
        number: values.number,
      });
      message.success("Usuario registrado correctamente");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code", errorCode);
      console.log("Message", errorMessage);
      message.error(errorCode);
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <h1> Aqui esta la pagina de REGISTRO </h1>
      <Form {...formItemLayout} form={form} name="register" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: "Ingrese sus nombres!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastname"
          label="Apellido"
          rules={[
            {
              required: true,
              message: "Ingrese sus apellidos!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Direccion"
          rules={[
            {
              required: true,
              message: "Ingrese su direccion!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="user"
          label="Nombre de usuario"
          rules={[
            {
              required: true,
              message: "Ingrese el nombre de usuario!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="number"
          label="Telefono"
          rules={[
            {
              required: true,
              message: "Ingrese su telefono!",
            },
          ]}
          hasFeedback
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Ingrese un correo valido!",
            },
            {
              required: true,
              message: "Porfavor ingrese su correo",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: "Porfavor ingrese su contraseña!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirmar contraseña"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Porfavor confirme su contraseña!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Las contraseñas no coinciden!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            REGISTRARME
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterPage;
