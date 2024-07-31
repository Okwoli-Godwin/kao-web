import img2 from "../../assets/Frame 603.png"
import { Slide } from "react-awesome-reveal";
import img from "../../assets/healthicons_yes.png"

const Values = () => {
  return (
    <div className="w-[100%] flex  items-center mt-[45px] md:mt-[380px] sm:mt-[480px] xsm:mt-[500px] justify-center">
        <div className="w-[90%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex flex-col items-center">

            <div className="w-[100%] flex justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap items-center mt-[50px] sm:mt-[0px] md:mt-[0px] xsm:mt-[0px]">
                <Slide direction="left" duration={2000} className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                {/* <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] overflow-hidden rounded-tl-[15px] rounded-br-[15px]"> */}
                <img src={img2} alt="" className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[320px] xsm:h-[250px] sm:h-[280px] object-cover sm:object-contain xsm:object-contain rounded-[15px]"/>
                {/* </div> */}
                </Slide>
                
                <div className="w-[49%] md:w-[100%] md:mt-[20px] sm:w-[100%] h-[320px] sm:h-[100%] xsm:h-[100%] p-[20px] bg-[#0030AD] rounded-[13px] xsm:w-[100%] flex flex-col">
                    <h3 className="text-[#fff] text-[23px] font-[500]">
                        Values
                    </h3>
                    <div className="w-[100%] flex items-center mt-[12px]">
                        <img src={img} alt="" className="h-[23px]"/>
                        <p className="text-[#fff] text-[18px] font-[500] ml-[12px]">
                            Innovation: Embracing cutting-edge solutions to simplify global commerce
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center mt-[22px]">
                        <img src={img} alt="" className="h-[23px]"/>
                        <p className="text-[#fff] text-[18px] font-[500] ml-[12px]">
                            Trust: Building reliable relationships with customers, manufacturers, and partners
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center mt-[22px]">
                        <img src={img} alt="" className="h-[23px]"/>
                        <p className="text-[#fff] text-[18px] font-[500] ml-[12px]">
                            Accessibility: Connecting the world to new markets and opportunities
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center mt-[22px]">
                        <img src={img} alt="" className="h-[23px]"/>
                        <p className="text-[#fff] text-[18px] font-[500] ml-[12px]">
                            Efficiency: Streamlining processes for swift and seamless transactions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values