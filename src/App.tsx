import Headers from "./components/Headers";
import useRouterElement from "./UserRoute";
import FooterCom from "./components/Footer/Footer";
import Layout from "./components/Layout";

function App() {
  const routerElement = useRouterElement();
  return (
    <>
      <Headers />
      <Layout>
        <div>{routerElement}</div>
      </Layout>
      <FooterCom />
    </>
  );
}

export default App;
