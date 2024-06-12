import img from "../assets/Frame 531.png"
import img2 from "../assets/young-woman-doing-shopping-online 1.png"

const Choose = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[30px]">
        <div className="w-[80%] flex justify-between">
            <div className="flex flex-col w-[48%]">
                <h3 className="text-[23px] font-[600] w-[280px]">
                    Why Choose KAO For Your Online Shopping 
                </h3>
                <p className="text-[17px] font-[400] mt-[10px] leading-[30px]">
                  KAO Online Stores aims to serve a broad and diverse audience, catering to individuals of all ages,
                </p>
                
                <div className="w-[83%] mb-[20px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] mt-[40px] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px]">Global Accessibility</h3>
                      <p className="text-[12px] text-[#fff] font-[200]">Access stores from around the world and shop with ease</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-[83%] mb-[20px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px]">Payment Flexibility</h3>
                      <p className="text-[12px] text-[#fff] font-[200]">Pay with cryptocurrency or any currency, providing unmatched convenience.</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-[83%] mb-[20px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px]">Fast Shipping</h3>
                      <p className="text-[12px] text-[#fff] font-[200]">Enjoy swift delivery options to your desired destination</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-[83%] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#0030AD] rounded-tl-[12px] rounded-br-[12px]">
                  <div className="flex">
                    <div>
                      <img src={img} alt="" />
                    </div>
                    <div className="flex flex-col ml-[13px]">
                      <h3 className="text-[#fff] p-0 mt-[-5px]">Secure Transactions</h3>
                      <p className="text-[12px] text-[#fff] font-[200]">Trust our platform for secure transactions and data protection.</p>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="w-[48%] h-[100%] overflow-hidden rounded-tr-[15px] rounded-bl-[15px]">
              <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Choose