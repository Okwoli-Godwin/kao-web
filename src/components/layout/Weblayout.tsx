import { Header, Footer } from "../static"
import {Outlet} from "react-router-dom"

const Weblayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Weblayout