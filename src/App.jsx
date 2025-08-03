import { BrowserRouter } from "react-router-dom"
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
