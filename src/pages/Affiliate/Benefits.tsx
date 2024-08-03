import img from "../../assets/young-woman-doing-shopping-online 1.png"
import img2 from "../../assets/healthicons_yes (1).png"

const Benefits = () => {
  return (
    <div className="w-[100%] flex justify-center items-center mt-[40px] md:mt-[60px] sm:mt-[50px] xsm:mt-[40px]">
        <div className="w-[57%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex flex-col items-center">

            <h2 className="text-[26px] xsm:text-center w-[100%] flex justify-center sm:text-[23px] xsm:text-[22px] text-[#0030AD] font-[600]">
                        Benefits of a KAO affiliate marketer
            </h2>
            
            <div className="w-[48%] sm:mt-[25px] xsm:mt-[25px] md:mt-[40px] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[450px] relative rounded-tr-[12px] rounded-bl-[12px] hidden md:flex sm:flex xsm:flex overflow-hidden">
                    <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                </div>

            <div className="w-[100%] flex items-center mt-[90px] md:mt-[10px] sm:mt-[15px] xsm:mt-[40px] justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
                  <div className="w-[48%] md:w-[100%] md:mt-[5px] sm:mt-[5px] xsm:mt-[-10px] sm:w-[100%] h-[320px] sm:h-[100%] xsm:h-[100%] rounded-[13px] xsm:w-[100%] flex flex-col">
                      
                    <h2 className="text-[26px] md:hidden sm:hidden xsm:hidden sm:text-[23px] xsm:text-[22px] text-[#0030AD] font-[600]">
                        Benefits of a KAO affiliate marketer
                    </h2>
                    
                    <div className="w-[100%] flex items-center mt-[12px]">
                        <img src={img2} alt="" className="h-[23px]"/>
                        <p className="text-[18px] xsm:text-[17px] font-[500] ml-[12px]">
                            Earn up to 18% commission on every sale
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center mt-[22px]">
                        <img src={img2} alt="" className="h-[23px]"/>
                        <p className="text-[18px] xsm:text-[17px] font-[500] ml-[12px]">
                            Access exclusive deals and promotions
                        </p>
                    </div>
                   
                    <div className="w-[100%] flex items-center mt-[22px]">
                        <img src={img2} alt="" className="h-[23px]"/>
                        <p className="text-[18px] xsm:text-[17px] font-[500] ml-[12px]">
                            Partner with top brands and products
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center mt-[22px]">
                        <img src={img2} alt="" className="h-[23px]"/>
                        <p className="text-[18px] xsm:text-[17px] font-[500] ml-[12px]">
                            Get real-time tracking and support
                        </p>
                    </div>
                </div>
                  <div className="w-[48%] md:hidden sm:hidden xsm:hidden md:mt-[40px] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[450px] relative rounded-tr-[12px] rounded-bl-[12px] overflow-hidden">
                    <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits