import React from "react";
import "../styles/App.css";
import "../styles/ContactsList.css";
import "../styles/InfoListContacts.css";

function ContactsList({ contactList, handleTakeIndex }) {
  return (
    <div className="contactsList-content">
      <div className="contactsList-header">
        <h1>LISTA DE CONTACTOS</h1>
      </div>
      <div className="contactsList-list">
        {contactList.map((contact, index) => (
          <div
            className="infoListContacts-info"
            onClick={() => handleTakeIndex(index)}
          >
            <p>
              <strong>Servicio:</strong>
            </p>
            <p className="infoListContacts-text">{contact.Service}</p>
            <p>
              <strong>Nombre y Apellido:</strong>
            </p>
            <p className="infoListContacts-text">
              {contact.Name + " " + contact.Lastname}
            </p>
            <p>
              <strong>Dirección:</strong>
            </p>
            <p className="infoListContacts-text">{contact.Direction}</p>
            <p>
              <strong>Número telefónico:</strong>
            </p>
            <p className="infoListContacts-text">{contact.Telephone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsList;
