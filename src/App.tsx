import Headers from './components/Headers'
import useRouterElement from './UserRoute'
import FooterCom from './components/Footer/Footer'

function App() {
  const routerElement=useRouterElement()
  return (
    <>
    <Headers/>
    <div>{routerElement}</div>
    <FooterCom/>
    </>
  )
}

export default App
