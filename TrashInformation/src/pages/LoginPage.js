import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { auth } from "../firebase";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../styles/LoginPage.css";

function LoginPage() {
  const [form] = Form.useForm();

  const onFinish = async ({ email, password }) => {
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
      xs: { span: 8 },
      sm: { span: 8 },
    },
  };

  return (
    <>
      <br />
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
            prefix={<UserOutlined className="site-form-item-icon" />}
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            ¿Olvido la contraseña?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">Registrate ahora!</a>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginPage;
