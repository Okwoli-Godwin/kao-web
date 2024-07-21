import img from "../../assets/Frame 531 (2).png"

const AgentProcess = () => {
  return (
    <div className="w-[100%] bg-[#0030AD] py-[55px] flex justify-center mt-[80px]">
        <div className="w-[90%] flex justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
            <div className="flex flex-col w-[400px] md:mb-[23px] sm:mb-[23px] xsm:mb-[23px] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="flex items-center">
                  <img src={img} alt="" className="h-[20px]"/>
                  <div className="h-[2px] w-[350px] bg-[#fff] ml-[12px]"></div>
                </div>
                
                <h3 className="text-[#fff] text-[23px] md:text-[25px] sm:text-[20px] xsm:text-[18px] font-[500] mt-[26px]">
                  Verification Process
                </h3>
                
                <p className="text-[#fff] text-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px] font-[400] leading-[30px] mt-[15px]">
                  Clear guidelines and procedures for store verification, ensuring compliance with quality standards and regulations
                </p>
            </div>
            <div className="flex flex-col w-[400px] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mb-[23px] sm:mb-[23px] xsm:mb-[23px]">
                <div className="flex items-center">
                  <img src={img} alt="" className="h-[20px]"/>
                  <div className="h-[2px] w-[350px] bg-[#fff] ml-[12px]"></div>
                </div>
                
                <h3 className="text-[#fff] text-[23px] md:text-[25px] font-[500] mt-[26px] sm:text-[20px] xsm:text-[18px]">
                  Training and Support
                </h3>
                
                <p className="text-[#fff] text-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px] font-[400] leading-[30px] mt-[15px]">
                  Comprehensive training and support provided to agents to effectively carry out their roles and responsibilities.
                </p>
            </div>
            <div className="flex flex-col w-[350px] md:mb-[23px] sm:mb-[23px] xsm:mb-[23px] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="flex items-center">
                  <img src={img} alt="" className="h-[20px]"/>
                  <div className="h-[2px] w-[350px] bg-[#fff] ml-[12px]"></div>
                </div>
                
                <h3 className="text-[#fff] text-[23px] md:text-[25px] font-[500] mt-[26px] sm:text-[20px] xsm:text-[18px]">
                  Rewards and Recognition
                </h3>
                
                <p className="text-[#fff] text-[15px] font-[400] leading-[30px] mt-[15px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">
                   Incentives and rewards for agents based on their performance and contribution to maintaining the integrity of the platform.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AgentProcess