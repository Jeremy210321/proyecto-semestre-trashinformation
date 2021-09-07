import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import "../styles/ContactsForm.css";
import { message, Button, Form, Input } from "antd";

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

function ContactsForm({
  handleModifyContact,
  formRef,
  handleAddContact,
  handleTakeModifyContact,
  handleDeleteContact,
}) {
  return (
    <div className="contactsForm-form">
      <h1>Gestionar contactos</h1>
      <p>
        Puede agregar, modificar y eliminar la información de contacto de
        personas que realizan servicios de reciclaje o chatarrería
      </p>
      <Form
        {...layout}
        ref={formRef}
        name="control-ref"
        onFinish={handleAddContact}
        onValuesChange={handleTakeModifyContact}
      >
        <Form.Item
          name="Service"
          label="Servicio"
          hasFeedback
          rules={[
            {
              required: true,
              message:
                "El campo no debe estar vacío, por favor ingresa un servicio",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item
          name="Name"
          label="Nombre"
          hasFeedback
          rules={[
            {
              required: true,
              message:
                "El campo no debe estar vacío, por favor ingresa un nombre",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item
          name="Lastname"
          label="Apellido"
          hasFeedback
          rules={[
            {
              required: true,
              message:
                "El campo no debe estar vacío, por favor ingresa un apellido",
            },
          ]}
        >
          <Input allowClear />
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
          <Input allowClear />
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
          <Input allowClear />
        </Form.Item>

        <Form.Item {...tailLayout} className="contactsform-buttons">
          <Button type="primary" htmlType="submit">
            Agregar
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={handleDeleteContact}
          >
            Eliminar
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={handleModifyContact}
          >
            Modificar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default ContactsForm;
