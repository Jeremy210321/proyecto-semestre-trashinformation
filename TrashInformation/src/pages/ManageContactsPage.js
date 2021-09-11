import React, { useRef, useState } from "react";
import { Col, message, Row } from "antd";
import "../styles/App.css";
import ContactsForm from "../components/ContactsForm";
import ContactsList from "../components/ContactsList";

function ManageContactsPage(props) {
  const infoContact = [
    {
      Service: "Albañil",
      Name: "Daniel",
      Lastname: "Guachamin",
      Direction: "San Carlos",
      Telephone: "0998663322",
    },
    {
      Service: "Carpintero",
      Name: "Guillermo",
      Lastname: "Gutiérrez",
      Direction: "San José",
      Telephone: "0987099923",
    },
    {
      Service: "Carpintero",
      Name: "Guillermo",
      Lastname: "Gutiérrez",
      Direction: "San José",
      Telephone: "0987099923",
    },
  ];

  const [infoListContacts, setInfoListContacts] = useState(infoContact);
  const [contactIndexToModify, setContactIndexToModify] = useState();
  const [contactInfoToModify, setContactInfoToModify] = useState();
  const formRef = useRef(null);

  const handleAddContact = (values) => {
    const newContact = values;
    setInfoListContacts((prevState) => [...prevState, newContact]);
    formRef.current.resetFields();
    message.success("Se ha agregado el contacto correctamente");
  };

  const handleShowContact = (index) => {
    const contactID = index;
    setContactIndexToModify(contactID);
    formRef.current.setFieldsValue({
      Service: infoListContacts[index].Service,
      Name: infoListContacts[index].Name,
      Lastname: infoListContacts[index].Lastname,
      Direction: infoListContacts[index].Direction,
      Telephone: infoListContacts[index].Telephone,
    });
  };

  const handleTakeModifyContact = (changedValues, allValues) => {
    const contacto = formRef.current.getFieldsValue(true);
    setContactInfoToModify(contacto);
  };

  const handleModifyContact = () => {
    const newContactsList = [...infoListContacts];
    newContactsList[contactIndexToModify] = contactInfoToModify;
    setInfoListContacts(newContactsList);
    formRef.current.resetFields();
    message.success("Se ha modificado el contacto correctamente");
  };

  const handleDeleteContact = () => {
    const contactToDelete = infoListContacts.filter(
      (todo, taskPosition) => taskPosition !== contactIndexToModify
    );
    setInfoListContacts(contactToDelete);
    formRef.current.resetFields();
    message.info("Se ha eliminado el contacto correctamente");
  };

  return (
    <div>
      <Row>
        <Col span={16} className="manageContacts-form">
          <ContactsForm
            contactList={infoListContacts}
            handleAddContact={handleAddContact}
            handleModifyContact={handleModifyContact}
            handleTakeModifyContact={handleTakeModifyContact}
            handleDeleteContact={handleDeleteContact}
            formRef={formRef}
          />
        </Col>
        <Col span={8} className="manageContacts-list">
          <ContactsList
            contactList={infoListContacts}
            handleTakeIndex={handleShowContact}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ManageContactsPage;
