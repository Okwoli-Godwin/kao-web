import img from "../../assets/Frame 482.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-[100%] flex-col bg-[#0030AD] pt-[20px] pb-[20px] mt-[90px] flex border-t-[7px] border-[#DE801C] items-center">
      <div className="w-[90%] flex justify-between">
        <div className="w-[40%] flex flex-col">
          <img src={img} alt="" className="w-[70px]" />
          <p className="text-[12px] mt-[10px] text-[#fff] font-[200] leading-[30px]">
            Secure wallets provided for sellers, customers, and agents to facilitate seamless transactions and savings for future purchases.
          </p>

          <div className="flex flex-col mt-[23px]">
            <h4 className="text-[#fff] font-[500] text-[13px]">Keep up to date with us</h4>
            <div className="flex items-center mt-[12px]">
              <div className="w-[28px] h-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaFacebookF />
              </div>
              <div className="w-[28px] h-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaTwitter />
              </div>
              <div className="w-[28px] h-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaInstagram />
              </div>
              <div className="w-[28px] h-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaThreads />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[45%] flex justify-between">
          <div className="flex flex-col w-[100px]">
            <h2 className="text-[15px] font-[600] text-[#fff]">ABOUT US</h2>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">Contact Us</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">About Us</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">Product & Services</p>
          </div>
          <div className="flex flex-col w-[100px]">
            <h2 className="text-[15px] font-[600] text-[#fff]">MORE INFO</h2>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">FAQs</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">Affiliates</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">Agents</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[15px] font-[600] text-[#fff]">PEOPLE OF KAO</h2>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">Our culture</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">See all opportunities</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px]">Data & privacy</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[1px] bg-[#fff] mt-[30px]"></div>

      <div className="w-[100%] flex justify-center items-center">
        <p className="text-[11px] text-[#fff] font-[300] mt-[20px]">Copyright © 2023 KAO.com. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer