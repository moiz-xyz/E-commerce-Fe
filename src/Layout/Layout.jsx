import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <main className="pt-[80px]"> 
        <Outlet />
      </main>

      <Footer/>
    </>
  )
}

export default Layout
