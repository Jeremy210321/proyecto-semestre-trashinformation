import "../styles/App.css";
import { Button } from "antd";
import { useState } from "react";
import InicioPage from "../pages/InicioPage";

function App() {
  /*
  const [usuarioLogin, setUsuarioLogin] = useState(null);

  const usuarioInfoList = [
    {
      mail: "danielg",
      password: "12345",
      type: "admin",
    },
    {
      mail: "monito",
      password: "12345",
      type: "ciud",
    },
  ];

  setUsuarioLogin(usuarioInfoList);

   */

  return (
    <div className="App">
      <InicioPage />
    </div>
  );
}

export default App;
