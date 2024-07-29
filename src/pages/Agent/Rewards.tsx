import img2 from "../../assets/image 19.png"
import { Slide } from "react-awesome-reveal";
import img from "../../assets/Frame 531 (3).png"

const Rewards = () => {
  return (
    <div className="w-[100%] flex  items-center mt-[45px] sm:mt-[22px] xsm:mt-[22px] justify-center">
        <div className="w-[75%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex flex-col items-center">

            <div className="w-[100%] flex justify-between items-center mt-[50px] sm:mt-[0px] md:mt-[0px] xsm:mt-[0px]">
                
                
                <div className="w-[49%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
                    <h2 className="text-[28px] sm:text-[23px] xsm:text-[23px] font-[600] text-[#0030AD]">
                        3. Rewards and Recognition
                    </h2>
                    <Slide direction="right" duration={2000} className="w-[48%] md:mt-[14px] hidden md:flex sm:flex xsm:flex md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                    {/* <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] overflow-hidden rounded-tl-[15px] rounded-br-[15px]"> */}
                    <img src={img2} alt="" className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] xsm:h-[250px] sm:h-[280px] object-cover sm:object-contain xsm:object-contain rounded-[15px]"/>
                    {/* </div> */}
                    </Slide>
                    <div className="w-[100%] flex items-center mt-[12px] md:mt-[20px]">
                        <img src={img} alt="" className="h-[20px]"/>
                        <div className="w-[50%] sm:w-[100%] xsm:w-[100%] h-[2px] bg-[#0030AD] ml-[13px]"></div>
                    </div>
                    <p className="text-[18px] font-[500] text-[#000] mt-[18px]">
                         Incentives and rewards for agents based on their performance and contribution to maintaining the integrity of the platform.
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

export default Rewards