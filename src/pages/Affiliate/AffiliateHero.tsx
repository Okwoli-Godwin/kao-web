import img from "../../assets/happy-business-colleagues-rejoicing-team-success 1.png"
import img2 from "../../assets/medium-shot-woman-work 1.png"
import { Slide } from "react-awesome-reveal";

const AffiliateHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[190px] sm:pt-[120px] xsm:pt-[120px] flex-col items-center justify-center overflow-hidden">
        <div className="w-[90%]  md:flex-wrap sm:flex-wrap xsm:flex-wrap flex items-center justify-between">
            <Slide className="w-[49%] sm:w-[100%] xsm:w-[100%] md:w-[100%]" duration={2000}>
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col md:mb-[40px] sm:mb-[40px] xsm:mb-[40px]">
                <h1 className="text-[38px] text-[#0030AD] font-[600]">Join the KAO Affiliate Program</h1>

                <p className="text-[18px] font-[500] mt-[10px] leading-[30px]">
                    Are you passionate about online marketing and eager to monetize your influence? Do you want to promote innovative products and earn commissions on every sale generated from your unique ads?
                </p>

                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Get Started</button>
            </div>
            </Slide>
            
            <Slide direction="right" duration={2000} className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex h-[300px] md:h-[400px] overflow-hidden rounded-[12px]">
                <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            </Slide>
        </div>

        <div className="w-[100%] md:hidden sm:hidden xsm:hidden h-[450px] mt-[50px]">
            <img src={img} alt="" className="sm:h-[100%] xsm:h-[100%] sw-[100%] xsm:w-[100%] sm:object-cover xsm:object-cover"/>
        </div>
    </div>
  )
}

export default AffiliateHero