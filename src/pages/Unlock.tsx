import { Link } from "react-router-dom"
import img from "../assets/Frame 500.png"
import { Slide, Zoom } from "react-awesome-reveal";

const Unlock = () => {
  return (
    <div className="w-[100%] flex items-center justify-center mt-[70px]">
        <div className="w-[80%] md:w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap sm:w-[90%] xsm:w-[90%] flex items-center justify-between">
            <Zoom duration={3000} className="w-[49%] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[580px] sm:h-[380px] xsm:h-[350px] rounded-tr-[20px] rounded-bl-[20px] overflow-hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-contain"/>
            </div>
            </Zoom>
            
            <Slide direction="right" className="w-[49%] sm:w-[100%] xsm:w-[100%] md:w-[100%]" duration={2000}>
                <div className="w-[100%] sm:mt-[18px] xsm:mt-[18px] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mt-[12px] flex flex-col">
                <h1 className="text-[35px] sm:text-[30px] xsm:text-[27px] w-[350px] md:w-[100%] sm:w-[100%] xsm:w-[100%] font-[600] text-[#0030AD]">
                    Unlock exclusive deals and earn rewards
                </h1>
                <p className="text-[18px] mt-[10px] font-[500] w-[580px] leading-[30px] sm:w-[100%] md:w-[100%] xsm:w-[100%]">
                    Our affiliate program connects you with top brands and products from around the world. Earn commissions, enjoy exclusive discounts, and get ahead of the curve with the latest trends.
                </p>
                <Link to="/agent">
                    <button className="w-[150px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">
                    Earn rewards
                    </button>
                </Link>
            </div>
            </Slide>
        </div>
    </div>
  )
}

export default Unlock