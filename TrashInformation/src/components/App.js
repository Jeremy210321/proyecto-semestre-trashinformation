import { Layout } from "antd";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import ContactenosPage from "../pages/ContactenosPage";
import VideosPage from "../pages/VideosPage";
import NoticiasPage from "../pages/NoticiasPage";
import MainMenu from "./MainMenu";
import MainFooter from "./MainFooter";
import MainLogo from "./MainLogo";
import MiCuentaPage from "../pages/MiCuentaPage";
import ManageContactsPage from "../pages/ManageContactsPage";
import RecomendationsPage from "../pages/RecomendationsPage";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header className="main-header">
          <>
            {" "}
            <MainLogo />
          </>
          <MainMenu />
        </Header>

        <Content className="main-content">
          <Switch>
            <Route path="/gestionar">
              <ManageContactsPage />
            </Route>
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
              <MiCuentaPage />
            </Route>
            <Route path="/">
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
