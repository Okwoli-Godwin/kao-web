import { Link } from "react-router-dom"
import img from "../assets/Frame 568.png"

const Experienced = () => {
  return (
    <div className="w-[100%] flex items-center justify-center mt-[70px]">
        <div className="w-[80%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex sm:flex-col-reverse xsm:flex-col-reverse md:flex-col-reverse items-center justify-between">
                <div className="w-[49%] sm:mt-[18px] xsm:mt-[18px] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mt-[12px] flex flex-col">
                <h1 className="text-[35px] sm:text-[30px] xsm:text-[27px] w-[350px] md:w-[100%] sm:w-[100%] xsm:w-[100%] font-[600] text-[#0030AD]">
                    Our experienced Agents
                </h1>
                <p className="text-[18px] mt-[10px] font-[500] w-[580px] leading-[30px] sm:w-[100%] md:w-[100%] xsm:w-[100%]">
                    Our experienced agents are fully equipped to provide expert guidance and propel your business into the international stage.
                </p>
                <Link to="/agent">
                    <button className="w-[150px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">
                    About our Agent
                    </button>
                </Link>
            </div>

                <div className="w-[47%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[480px] sm:h-[380px] xsm:h-[350px] rounded-tr-[20px] rounded-bl-[20px] overflow-hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-contain"/>
            </div>
        </div>
    </div>
  )
}

export default Experienced