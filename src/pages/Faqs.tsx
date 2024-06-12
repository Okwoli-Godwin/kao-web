import img from "../assets/Frame 546.png"
import Accordion from "../components/Ui/Accordion"

const Faqs = () => {
  return (
    <div className="w-[100%] flex mt-[90px] justify-center mb-[90px]">
      <div className="w-[70%] flex flex-col justify-center items-center">
        <h3 className="text-[20px] font-[500]">Frequently Asked Questions</h3>

        <div className="w-[100%] flex justify-between mt-[40px]">
          <div className="w-[48%] flex flex-col">
            <h3 className="w-[100%] text-[18px] font-[500]">
              We are <span className="text-[#0030AD]">always here</span> for your back up
            </h3>
            <p className="leading-[30px] text-[13px] w-[100%] mt-[20px]">
              KAO Online Stores aims to serve a broad and diverse audience, catering to individuals of all ages, backgrounds, and interests.
            </p>

            <div className="w-[100%] flex flex-col mt-[30px]">
              <div className="flex ">
                {/* <div> */}
                  <img src={img} alt="" className="h-[33px]" />
                {/* </div> */}
                <div className="flex flex-col ml-[12px]">
                  <h5 className="text-[16px] font-[500]">24/7 hour service</h5>
                  <p className="text-[12px] font-[400] mt-[3px] leading-[30px]">
                    secure wallets provided for sellers, customers, and agents to facilitate seamless transactions and savings for future purchases.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[100%] flex flex-col mt-[30px]">
              <div className="flex ">
                {/* <div> */}
                  <img src={img} alt="" className="h-[33px]" />
                {/* </div> */}
                <div className="flex flex-col ml-[12px]">
                  <h5 className="text-[16px] font-[500]">Prompt response from support</h5>
                  <p className="text-[12px] font-[400] mt-[3px] leading-[30px]">
                    Secure wallets provided for sellers, customers, and agents to facilitate seamless transactions and savings for future purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[48%]">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs