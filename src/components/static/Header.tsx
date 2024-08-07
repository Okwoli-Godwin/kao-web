import img from "../../assets/KAO_Logo_PNG (1).png"
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react"
import { NavLink, Link } from "react-router-dom";

const Header = () => {

  const [show, setShow] = useState(false)

  const ToggleShow = () => {
    setShow(!show)
  }

  const closeSidebar = () => {
    setShow(false)
  }

  return (
    <div className="w-[100%] bg-[#fff] h-[70px] flex items-center justify-center fixed  z-[20]">
      <div className="w-[90%] h-[100%] flex items-center justify-between">
          <Link to="/">
            <img src={img} alt="" className="h-[85px] ml-[-5px]"/>
          </Link>
        <div className="flex items-center md:hidden sm:hidden xsm:hidden mr-[-25px]">
          <NavLink
            to="/product&service"
            style={({ isActive }) => ({
              textDecoration: "none",
              background: "none",
              color: isActive ? "#0030AD" : ""
            })}
          >
            {({ isActive }) => (
              <h3 className="flex flex-col mr-[35px] cursor-pointer items-center">
                <p className="text-[18px] font-[500]">Product & Services</p>
                {isActive && (
                  <div className="w-[5px] h-[5px] bg-[#0030AD] rounded-[100%]"></div>
                )}
              </h3>
            )}
          </NavLink>
          <NavLink
            to="/agent"
            style={({ isActive }) => ({
              textDecoration: "none",
              background: "none",
              color: isActive ? "#0030AD" : ""
            })}
          >
            {({ isActive }) => (
              <h3 className="flex flex-col mr-[35px] cursor-pointer items-center">
                <p className="text-[18px] font-[500]">Agent</p>
                {isActive && (
                  <div className="w-[5px] h-[5px] bg-[#0030AD] rounded-[100%]"></div>
                )}
              </h3>
            )}
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: "none",
              background: "none",
              color: isActive ? "#0030AD" : ""
            })}
          >
            {({ isActive }) => (
              <h3 className="flex flex-col mr-[35px] cursor-pointer items-center">
                <p className="text-[18px] font-[500]">About</p>
                {isActive && (
                  <div className="w-[5px] h-[5px] bg-[#0030AD] rounded-[100%]"></div>
                )}
              </h3>
            )}
          </NavLink>
          <NavLink
            to="/affiliate"
            style={({ isActive }) => ({
              textDecoration: "none",
              background: "none",
              color: isActive ? "#0030AD" : ""
            })}
          >
            {({ isActive }) => (
              <h3 className="flex flex-col mr-[35px] cursor-pointer items-center">
                <p className="text-[18px] font-[500]">Affiliate</p>
                {isActive && (
                  <div className="w-[5px] h-[5px] bg-[#0030AD] rounded-[100%]"></div>
                )}
              </h3>
            )}
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: "none",
              background: "none",
              color: isActive ? "#0030AD" : ""
            })}
          >
            {({ isActive }) => (
              <h3 className="flex flex-col mr-[35px] cursor-pointer items-center">
                <p className="text-[18px] font-[500]">Contact us</p>
                {isActive && (
                  <div className="w-[5px] h-[5px] bg-[#0030AD] rounded-[100%]"></div>
                )}
              </h3>
            )}
          </NavLink>
        </div>

        {show ? (
          <MdClose onClick={ToggleShow} className="hidden md:flex sm:flex xsm:flex text-[24px] cursor-pointer" />
        ) : (
          <MdMenu onClick={ToggleShow} className="hidden md:flex sm:flex xsm:flex text-[24px] cursor-pointer" />
        )}
      </div>

      {show ? (
        <div onClick={closeSidebar} className={`fixed w-full h-screen bg-[rgba(0,0,0,0.5)] top-[70px] left-0 transition-transform duration-300 ease-in-out ${
          show ? "transform translate-x-0" : "transform translate-x-full"
        } md:flex sm:flex xsm:flex justify-end`}>
        <div className="w-[30%] sm:w-[45%] xsm:w-[55%] h-[100%] bg-[#fff] pt-[20px] pl-[15px] flex flex-col">
          <NavLink to="/product&service" style={({ isActive }) => ({
            textDecoration: "none",
            background: "none",
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className=" text-[16px] font-[500] cursor-pointer pb-[20px]">Product & Services</h3>
          </NavLink>
          <NavLink onClick={closeSidebar} to="/agent" style={({ isActive }) => ({
            textDecoration: "none",
            background: "none",
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[500] cursor-pointer pb-[20px]">Agent</h3>
          </NavLink>
          <NavLink onClick={closeSidebar} to="/about" style={({ isActive }) => ({
            textDecoration: "none",
            background: "none",
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[500] cursor-pointer pb-[20px]">About</h3>
          </NavLink>
          <NavLink onClick={closeSidebar} to="/affiliate" style={({ isActive }) => ({
            textDecoration: "none",
            background: "none",
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[500] cursor-pointer pb-[20px]">Affiliate</h3>
          </NavLink>
          <NavLink onClick={closeSidebar} to="/contact" style={({ isActive }) => ({
            textDecoration: "none",
            background: "none",
            color: isActive ? "#0030AD" : ""
          })}>
            <h3 className="text-[16px] font-[500] cursor-pointer pb-[20px]">Contact us</h3>
          </NavLink>
        </div>
      </div>
      ) : null}
    </div>
  )
}

export default Header