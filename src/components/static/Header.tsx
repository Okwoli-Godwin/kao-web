import img from "../../assets/kaologo.png"
import { MdMenu } from "react-icons/md";
import { useState } from "react"
import { NavLink } from "react-router-dom";

const Header = () => {

  const [show, setShow] = useState(false)

  const ToggleShow = () => {
    setShow(!show)
  }

  return (
    <div className="w-[100%] h-[70px]  flex items-center justify-center fixed bg-[#fff] z-[20]">
      <div className="w-[90%] h-[100%] flex items-center justify-between">
        <NavLink to="/" style={{textDecoration: "none", background: "none", }}>
          <img src={img} alt="" className=""/>
        </NavLink>

        <div className="flex items-center md:hidden sm:hidden xsm:hidden">
          <h3 className="text-[16px] font-[400] mr-[28px] cursor-pointer">Product & Services</h3>
          <NavLink to="/agent" style={({ isActive }) => ({
            textDecoration: "none", 
            background: "none", 
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[400] mr-[28px] cursor-pointer">Agent</h3>
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => ({
            textDecoration: "none", 
            background: "none", 
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[400] mr-[28px] cursor-pointer">About</h3>
          </NavLink>
          <NavLink to="/affiliate" style={({ isActive }) => ({
            textDecoration: "none", 
            background: "none", 
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[400] mr-[28px] cursor-pointer">Affiliate</h3>
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({
            textDecoration: "none", 
            background: "none", 
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[400] mr-[28px] cursor-pointer">Contact us</h3>
          </NavLink>
        </div>

        <MdMenu onClick={ToggleShow} className="hidden md:flex sm:flex xsm:flex  text-[24px] cursor-pointer"/>
      </div>

      {show ? (
        <div className="w-[100%] h-[100vh] absolute bg-[rgba(0,0,0,0.5)] top-[70px] left-0 hidden md:flex sm:flex xsm:flex justify-end">
        <div className="w-[30%] sm:w-[45%] xsm:w-[55%] h-[100%] bg-[#fff] pt-[20px] pl-[15px] flex flex-col">
          <h3 className="text-[15px] cursor-pointer pb-[20px]">Product & Services</h3>
          <h3 className="text-[15px] cursor-pointer pb-[20px]">Agent</h3>
          <h3 className="text-[15px] cursor-pointer pb-[20px]">About</h3>
          <h3 className="text-[15px] cursor-pointer pb-[20px]">Affiliate</h3>
          <h3 className="text-[15px] cursor-pointer pb-[20px]">Contact us</h3>
        </div>
      </div>
      ) : null}
    </div>
  )
}

export default Header