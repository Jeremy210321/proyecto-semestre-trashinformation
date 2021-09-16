import { Layout } from "antd";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import ContactenosPage from "../pages/ContactenosPage";
import VideosPage from "../pages/VideosPage";
import NoticiasPage from "../pages/NoticiasPage";
import MainMenu from "./MainMenu";
import MainFooter from "./MainFooter";
import MainLogo from "./MainLogo";
import MiCuentaPage from "../pages/MiCuentaPage";
import RecomendationsPage from "../pages/RecomendationsPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const { Header, Footer, Content } = Layout;

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user", uid);
        console.log("usuario", authUser);
        // ...
        setAuthUser(user);
      } else {
        // User is signed out
        console.log("No hay sesion activa");
        setAuthUser(false);
      }
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Header className="main-header">
          <>
            {" "}
            <MainLogo />
          </>
          <MainMenu user={authUser} />
        </Header>
        <Content className="main-content">
          <Switch>
            <Route path="/noticias">
              <NoticiasPage />
            </Route>
            <Route path="/videos">
              <VideosPage />
            </Route>
            <Route path="/contactenos">
              <ContactenosPage />
            </Route>
            <Route path="/maneja-tus-desechos">
              <RecomendationsPage />
            </Route>
            <Route path="/mi-cuenta">
              <MiCuentaPage user={authUser} />
            </Route>
            <Route path="/registro">
              {authUser === null ? (
                "Cargando.."
              ) : authUser === false ? (
                <RegisterPage />
              ) : (
                <Redirect to="/initio" />
              )}
            </Route>
            <Route path="/login">
              {authUser === null ? (
                <h2>CARGANDO...</h2>
              ) : authUser === false ? (
                <LoginPage />
              ) : (
                <Redirect to="/initio" />
              )}
            </Route>

            <Route path="/initio">
              <InicioPage />
            </Route>
          </Switch>
        </Content>
        <Footer className="main-footer">
          <MainFooter />{" "}
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
