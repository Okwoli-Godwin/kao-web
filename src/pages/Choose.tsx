import { Link } from "react-router-dom";
import img from "../assets/Frame 531.png"
import img2 from "../assets/young-woman-doing-shopping-online 1.png"


const Choose = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[30px]">
        <div className="w-[80%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex justify-between md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse">
            <div className="flex flex-col w-[48%] h-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
                  <h3 className="text-[25px] font-[600] w-[280px]">
                    Why Choose KAO For Your Online Shopping 
                </h3>
                <p className="text-[18px] font-[500] sm:font-[500] xsm:font-[500] mt-[10px] leading-[30px]">
                  KAO Online Stores aims to serve a broad and diverse audience, catering to individuals of all ages,
                </p>
                
                <Link to="/product&service">
                  <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] mb-[20px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] mt-[40px] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px] text-[20px] font-[400]">Global Accessibility</h3>
                      <p className="text-[15px] text-[#fff] font-[200]">Access stores from around the world and shop with ease</p>
                    </div>
                  </div>
                </div>
                </Link>
                
                <Link to="/product&service">
                  <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] mb-[20px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px] text-[20px]">Payment Flexibility</h3>
                      <p className="text-[15px] text-[#fff] font-[200]">Pay with cryptocurrency or any currency, providing unmatched convenience.</p>
                    </div>
                  </div>
                </div>
                </Link>
                
                <Link to="/product&service">
                  <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] mb-[20px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px] text-[20px]">Fast Shipping</h3>
                      <p className="text-[15px] text-[#fff] font-[200]">Enjoy swift delivery options to your desired destination</p>
                    </div>
                  </div>
                </div>
                </Link>
                
                <Link to="/product&service">
                  <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px] text-[20px]">Secure Transactions</h3>
                      <p className="text-[15px] text-[#fff] font-[200]">Trust our platform for secure transactions and data protection.</p>
                    </div>
                  </div>
                </div>
                </Link>
            </div>
            
              <div className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[570px] sm:h-[400px] xsm:h-[350px] overflow-hidden rounded-tr-[15px] rounded-bl-[15px]">
              <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>

        </div>
    </div>
  )
}

export default Choose