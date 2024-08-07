import img from "../assets/easy-wireless-yechnology-payment 1.png"
import img2 from "../assets/man-red-shirt-using-digital-tablet 1.png"
import { Slide } from "react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[150px] sm:pt-[120px] xsm:pt-[50px] md:pt-[70px] justify-center overflow-hidden">
        <div className="w-[90%] flex justify-between sm:flex-wrap md:flex-wrap xsm:flex-wrap">
            <Slide className="w-[48%] sm:w-[100%] xsm:w-[100%] md:w-[100%]" duration={2000}>
                <div className="w-[100%] flex flex-col mt-[90px] sm:mt-[10px] sm:w-[100%] xsm:w-[100%] md:w-[100%]">
                <h1 className="text-[57px] sm:text-[40px] md:text-[48px] xsm:text-[38px] w-[500px] sm:w-[100%] md:w-[100%] xsm:w-[100%] font-[500] sm:font-[500] md:font-[500] xsm:font-[500] leading-tight">Your online store that allows you</h1>

                <TypeAnimation
                    sequence={[
                        'Pay with Crypto',
                        1000,
                        'Pay with Debit Cards',
                        1000,
                        'Pay with Digital Wallet',
                        1000,
                        'Pay with Vouchers and Gift Cards',
                        1000,
                        'Pay with Bank Transfers'
                    ]} 
                    speed={10}
                    className="text-[48px] sm:text-[35px] xsm:text-[30px] md:text-[48px] font-[600] text-[#0030AD]"
                    repeat={Infinity}
                />

                <p className="text-[18px] mt-[10px] font-[500] w-[460px] leading-[30px] sm:w-[100%] md:w-[100%] xsm:w-[100%]">
                    At KAO online stores we create pathways to connect vendors directly to International manufacturers, bridging the gap to thriving markets in China, Japan and beyond.
                </p>
                               
                <Link to="/about">
                    <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">
                    About Kao
                    </button>
                </Link>
            </div>
            </Slide>
            

                <div className="w-[48%] sm:w-[100%] md:w-[100%] xsm:w-[100%] flex mt-[40px] justify-between">
                <Slide direction="right" duration={2000} className="w-[48%]">
                    <div className="w-[100%] flex flex-col overflow-hidden h-[380px] xsm:h-[320px] bg-[#0030AD] rounded-tl-[20px] rounded-bl-[50px] pt-[45px]">
                    <div className="w-[100%] h-[25px] bg-[#fff]"></div>
                    
                    <div className="w-[100%] h-[100%] overflow-hidden">
                        <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                </div>
                </Slide>
                
                <Slide direction="right" duration={2000} className="w-[48%]">
                    <div className="w-[100%] flex flex-col overflow-hidden h-[380px] xsm:h-[320px] bg-[#DE801C] rounded-tr-[50px] rounded-bl-[20px] mt-[100px] sm:mt-[70px] xsm:mt-[50px] pb-[45px]">
                    <div className="w-[100%] h-[100%] overflow-hidden">
                        <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                    
                    <div className="w-[100%] h-[25px] bg-[#fff]"></div>
                </div>
                </Slide>
            </div>

        </div>
    </div>
  )
}

export default Hero