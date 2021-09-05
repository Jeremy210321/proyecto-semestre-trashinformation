import React, { useEffect, useState } from "react";
import "../styles/InfoListContacts.css";

function InfoListContacts() {
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

  useEffect(() => {
    console.log("info", infoContact);
    console.log("info", infoListContacts);
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

export default InfoListContacts;
