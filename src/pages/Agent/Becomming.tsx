import img from "../../assets/Frame 531 (3).png"
import img2 from "../../assets/Frame 655.png"
import { Slide } from "react-awesome-reveal";

const Becomming = () => {
  return (
    <div className="w-[100%] flex  items-center mt-[120px] sm:mt-[80px] xsm:mt-[70px] justify-center">
        <div className="w-[75%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex flex-col items-center">
            <h1 className="text-[33px] sm:text-[28px] xsm:text-[23px] font-[700] text-[#0030AD]">
                Becoming KAO Agent
            </h1>

            <div className="w-[100%] flex justify-centern items-center mt-[50px]">
                <div className="w-[49%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
                    <h2 className="text-[28px] sm:text-[23px] xsm:text-[23px] font-[600] text-[#0030AD]">
                        1. Verification Process
                    </h2>
                    <Slide direction="right" duration={2000} className="w-[48%] md:mt-[14px] hidden md:flex sm:flex xsm:flex md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                    {/* <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] overflow-hidden rounded-tl-[15px] rounded-br-[15px]"> */}
                    <img src={img2} alt="" className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] xsm:h-[250px] sm:h-[280px] object-cover sm:object-contain xsm:object-contain rounded-[15px]"/>
                    {/* </div> */}
                    </Slide>
                    <div className="w-[100%] flex items-center mt-[12px] md:mt-[20px]">
                        <img src={img} alt="" className="h-[20px]"/>
                        <div className="w-[50%] h-[2px] bg-[#0030AD] ml-[13px]"></div>
                    </div>
                    <p className="text-[18px] font-[500] text-[#000] mt-[18px]">
                        Clear guidelines and procedures for store verification, ensuring compliance with quality standards and regulations.
                    </p>
                </div>

                <Slide direction="right" duration={2000} className="w-[48%] md:hidden sm:hidden xsm:hidden md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                {/* <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] overflow-hidden rounded-tl-[15px] rounded-br-[15px]"> */}
                <img src={img2} alt="" className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] xsm:h-[250px] sm:h-[280px] object-cover sm:object-contain xsm:object-contain rounded-[15px]"/>
                {/* </div> */}
                </Slide>
            </div>
        </div>
    </div>
  )
}

export default Becomming