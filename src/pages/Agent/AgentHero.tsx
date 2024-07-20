import img from "../../assets/man-introducing-himself-employers-office-job-interview 1.png"

const AgentHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[130px] justify-center">
        <div className="w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap flex justify-between items-center">
            <div className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col md:mb-[50px] sm:mb-[40px] xsm:mb-[35px]">
                <h1 className="text-[38px] text-[#0030AD] md:text-[30px] md:font-[600] sm:font-[600] xsm:font-[600]">Agent:</h1>

                <p className="text-[15px] mt-[10px] leading-[30px] md:text-[17px] sm:text-[17px] xsm:text-[17px]">
                    Individuals can apply as agents responsible for verifying and approving stores before they can be listed on KAO Online Stores.
                </p>

                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Get Started</button>
            </div>

            <div className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[400px] overflow-hidden rounded-tl-[15px] rounded-br-[15px]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default AgentHero