import { BrowserRouter } from "react-router"
import AppRouter from "./config/Router"

const App = () => {
  return (
    <>
  {/* This is where routing is being done */}
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>

    </>
  )
}

export default App
