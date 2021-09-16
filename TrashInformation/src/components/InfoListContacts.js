import React, { useEffect, useState } from "react";
import "../styles/InfoListContacts.css";

import { URL_READ_CONTACTS } from "../config/Constantes";
import { request } from "../util/request";
export * from "../config/Constantes";

function InfoListContacts() {
  const [infoListContacts, setInfoListContacts] = useState([]);

  useEffect(() => {
    const loadContacts = async () => {
      let bodyReadRecomendations = {
        user_id: "123abc",
      };
      const contacts = await request(URL_READ_CONTACTS, bodyReadRecomendations);
      setInfoListContacts(contacts);
      console.log("contactos", contacts);
    };

    loadContacts();
  }, []);

  return (
    <div>
      <div>
        <h1>Lista de Recicladores</h1>
        <p>
          Apoya a personas que hacen reciclaje en las calles donando chatarra o
          material reciclable:
        </p>
      </div>
      <div className="infoListContacts-list">
        {infoListContacts.map((contact, index) => (
          <div className="infoListContacts-info">
            <p>
              <strong>Servicio:</strong>
            </p>
            <p className="infoListContacts-text">{contact.Service}</p>
            <p>
              <strong>Nombre y Apellido:</strong>
            </p>
            <p className="infoListContacts-text">
              {contact.name + " " + contact.lastname}
            </p>
            <p>
              <strong>Dirección:</strong>
            </p>
            <p className="infoListContacts-text">{contact.address}</p>
            <p>
              <strong>Número telefónico:</strong>
            </p>
            <p className="infoListContacts-text">{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoListContacts;
