import img from "../../assets/Frame 482.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-[100%] flex-col bg-[#0030AD] pt-[20px] pb-[20px] mt-[90px] flex border-t-[7px] border-[#DE801C] items-center">
      <div className="w-[90%] flex justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
        <div className="w-[40%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
          <img src={img} alt="" className="w-[70px] md:w-[100px] sm:w-[100px] xsm:w-[100px]" />
          <p className="text-[12px] md:text-[15px] sm:text-[15px] xsm:text-[15px] mt-[10px] text-[#fff] font-[200] leading-[30px]">
            Secure wallets provided for sellers, customers, and agents to facilitate seamless transactions and savings for future purchases.
          </p>

          <div className="flex flex-col mt-[23px] md:mb-[25px] sm:hidden xsm:hidden">
            <h4 className="text-[#fff] font-[500] text-[13px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">Keep up to date with us</h4>
            <div className="flex items-center mt-[12px]">
              <div className="w-[28px] h-[28px] md:text-[28px] sm:text-[28px] xsm:text-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaFacebookF />
              </div>
              <div className="w-[28px] h-[28px] md:text-[28px] sm:text-[28px] xsm:text-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaTwitter />
              </div>
              <div className="w-[28px] h-[28px] md:text-[28px] sm:text-[28px] xsm:text-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaInstagram />
              </div>
              <div className="w-[28px] h-[28px] bg-[#ffffff34] md:text-[28px] sm:text-[28px] xsm:text-[28px] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaThreads />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[45%] md:w-[100%] sm:w-[100%] xsm:w-[100%] md-mt-[60px] flex justify-between sm:flex-wrap xsm:flex-wrap sm:mt-[40px] xsm:mt-[30px] sm:mb-[20px] xsm:mb-[20px]">
          <div className="flex flex-col w-[100px] md:w-[150px] sm:w-[100%] xsm:w-[100%]">
            <h2 className="text-[15px] md:text-[18px] font-[600] text-[#fff] sm:text-[18px] xsm:text-[18px]">ABOUT US</h2>
            <p className="text-[#fff] font-[200] text-[12px] md:text-[15px] mt-[15px] sm:text-[15px] xsm:text-[15px]">Contact Us</p>
            <p className="text-[#fff] font-[200] text-[12px] md:text-[15px]  mt-[15px] sm:text-[15px] xsm:text-[15px]">About Us</p>
            <p className="text-[#fff] font-[200] text-[12px] md:text-[15px]  mt-[15px] sm:text-[15px] xsm:text-[15px]">Product & Services</p>
          </div>
          <div className="flex flex-col w-[100px] sm:w-[100%] xsm:w-[100%] sm:mt-[40px] xsm:mt-[30px] md:w-[150px]">
            <h2 className="text-[15px] font-[600] text-[#fff] md:text-[18px] sm:text-[18px] xsm:text-[18px]">MORE INFO</h2>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">FAQs</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">Affiliates</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">Agents</p>
          </div>
          <div className="flex flex-col  md:w-[150px] sm:mt-[40px] xsm:mt-[30px]">
            <h2 className="text-[15px] font-[600] text-[#fff] md:text-[18px] sm:text-[18px] xsm:text-[18px]">PEOPLE OF KAO</h2>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">Our culture</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">See all opportunities</p>
            <p className="text-[#fff] font-[200] text-[12px] mt-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">Data & privacy</p>
          </div>
        </div>

        <div className="flex flex-col mt-[23px] md:mb-[25px] hidden sm:flex xsm:flex">
            <h4 className="text-[#fff] font-[500] text-[13px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">Keep up to date with us</h4>
            <div className="flex items-center mt-[12px]">
              <div className="w-[28px] h-[28px] md:text-[28px] sm:text-[28px] xsm:text-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaFacebookF />
              </div>
              <div className="w-[28px] h-[28px] md:text-[28px] sm:text-[28px] xsm:text-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaTwitter />
              </div>
              <div className="w-[28px] h-[28px] md:text-[28px] sm:text-[28px] xsm:text-[28px] bg-[#ffffff34] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaInstagram />
              </div>
              <div className="w-[28px] h-[28px] bg-[#ffffff34] md:text-[28px] sm:text-[28px] xsm:text-[28px] text-[#fff] rounded-full flex justify-center items-center mr-[15px]">
                <FaThreads />
              </div>
            </div>
      </div>
      </div>

      <div className="w-[100%] h-[1px] bg-[#fff] mt-[30px]"></div>

      <div className="w-[100%] flex justify-center items-center">
        <p className="text-[11px] sm:text-[15px] md:text-[15px] xsm:text-[15px] text-[#fff] font-[300] mt-[20px]">Copyright © 2023 KAO.com. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer