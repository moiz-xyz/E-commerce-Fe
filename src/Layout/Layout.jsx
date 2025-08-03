import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div>
      <Outlet/>

      </div>
      <Footer/>
    </>
  )
}

export default Layout
