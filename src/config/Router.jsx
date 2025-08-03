import Layout from "../Layout/Layout"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import About from "../pages/About"
import { Route, Routes } from "react-router-dom"

 
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element= {<Layout/>} >
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="*" element = {<NotFound/>} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default AppRouter
