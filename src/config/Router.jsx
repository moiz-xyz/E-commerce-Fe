import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../Layout/Layout"
import NotFound from "../pages/NotFound"

 
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element= {<Layout/>} >
        <Route path="/" element = {<Home/>} />
        <Route path="*" element = {<NotFound/>} />

        </Route>
      </Routes>
      
    </div>
  )
}

export default AppRouter
