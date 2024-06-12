import img from "../../assets/Frame 531 (2).png"

const AgentProcess = () => {
  return (
    <div className="w-[100%] bg-[#0030AD] py-[55px] flex justify-center mt-[80px]">
        <div className="w-[90%] flex justify-between">
            <div className="flex flex-col w-[400px]">
                <div className="flex items-center">
                  <img src={img} alt="" className="h-[20px]"/>
                  <div className="h-[2px] w-[350px] bg-[#fff] ml-[12px]"></div>
                </div>
                
                <h3 className="text-[#fff] text-[20px] font-[200] mt-[26px]">
                  Verification Process
                </h3>
                
                <p className="text-[#fff] text-[13px] font-[100] leading-[30px] mt-[15px]">
                  Clear guidelines and procedures for store verification, ensuring compliance with quality standards and regulations
                </p>
            </div>
            <div className="flex flex-col w-[400px]">
                <div className="flex items-center">
                  <img src={img} alt="" className="h-[20px]"/>
                  <div className="h-[2px] w-[350px] bg-[#fff] ml-[12px]"></div>
                </div>
                
                <h3 className="text-[#fff] text-[20px] font-[200] mt-[26px]">
                  Training and Support
                </h3>
                
                <p className="text-[#fff] text-[13px] font-[100] leading-[30px] mt-[15px]">
                  Comprehensive training and support provided to agents to effectively carry out their roles and responsibilities.
                </p>
            </div>
            <div className="flex flex-col w-[350px]">
                <div className="flex items-center">
                  <img src={img} alt="" className="h-[20px]"/>
                  <div className="h-[2px] w-[350px] bg-[#fff] ml-[12px]"></div>
                </div>
                
                <h3 className="text-[#fff] text-[20px] font-[200] mt-[26px]">
                  Rewards and Recognition
                </h3>
                
                <p className="text-[#fff] text-[13px] font-[100] leading-[30px] mt-[15px]">
                   Incentives and rewards for agents based on their performance and contribution to maintaining the integrity of the platform.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AgentProcess