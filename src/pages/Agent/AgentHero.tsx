import img from "../../assets/man-introducing-himself-employers-office-job-interview 1.png"
import { Slide } from "react-awesome-reveal";

const AgentHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[150px] sm:pt-[120px] xsm:pt-[120px] md:pt-[70px] justify-center">
        <div className="w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap flex justify-between items-center">
            <Slide className="w-[48%] sm:w-[100%] xsm:w-[100%] md:w-[100%]" duration={2000}>
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col md:mb-[50px] sm:mb-[40px] xsm:mb-[35px]">
                <h1 className="text-[55px] font-[600] text-[#0030AD] md:text-[40px] sm:text-[35px] xsm:text-[33px] md:font-[600] sm:font-[600] xsm:font-[600]">Agent:</h1>

                <p className="text-[18px] font-[500] mt-[10px] leading-[30px] md:text-[17px] sm:text-[17px] xsm:text-[17px]">
                    Individuals can apply as agents responsible for verifying and approving stores before they can be listed on KAO Online Stores.
                </p>

                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Get Started</button>
            </div>
            </Slide>

            <Slide direction="right" duration={2000} className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] overflow-hidden rounded-tl-[15px] rounded-br-[15px]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            </Slide>
        </div>
    </div>
  )
}

export default AgentHero