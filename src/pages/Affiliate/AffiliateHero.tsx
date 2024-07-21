import img from "../../assets/happy-business-colleagues-rejoicing-team-success 1.png"
import img2 from "../../assets/medium-shot-woman-work 1.png"
import img3 from "../../assets/Frame 605 (2).png"
import img4 from "../../assets/Frame 605 (3).png"
import img5 from "../../assets/Frame 605 (4).png"
import img6 from "../../assets/Frame 605 (5).png"
import { Slide } from "react-awesome-reveal";

const AffiliateHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[190px] sm:pt-[120px] xsm:pt-[120px] flex-col items-center justify-center overflow-hidden">
        <div className="w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap flex items-center justify-between">
            <Slide className="w-[49%] sm:w-[100%] xsm:w-[100%] md:w-[100%]" duration={2000}>
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col md:mb-[40px] sm:mb-[40px] xsm:mb-[40px]">
                <h1 className="text-[38px] text-[#0030AD] font-[600]">Be An Affiliate</h1>

                <p className="text-[18px] font-[500] mt-[10px] leading-[30px]">
                    KAO Online Stores was founded with the vision of breaking down barriers in global commerce. Our journey began with a commitment to providing a platform that empowers buyers and sellers worldwide
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

        <div className="w-[90%] flex justify-between mt-[190px] md:mt-[0px] sm:mt-[40px] xsm:mt-[40px]  md:flex-wrap sm:flex-wrap xsm:flex-wrap">
            <div className="w-[24%] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mb-[25px] sm:mb-[25px] xsm:mb-[25px] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img3} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[20px] font-[600] w-[250px] mt-[12px] sm:text-[22px] xsm:-[22px]">
                    Individuals can apply as affiliate marketers
                </h3>

                <p className="text-[15px] font-[500] mt-[20px] md:text-[15px] sm:text-[15px] xsm:text[15px] ">
                    Gaining access to a dashboard where they can easily copy product links, promote them, and earn commissions on sales generated through their referrals.
                </p>
            </div>
            <div className="w-[24%] md:mb-[25px] sm:mb-[25px] xsm:mb-[25px]  md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img4} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[20px] font-[600] w-[250px] mt-[12px] sm:text-[22px] xsm:-[22px]">
                    Commission Structure
                </h3>

                <p className="text-[15px] font-[500] mt-[20px] md:text-[15px] sm:text-[15px] xsm:text[15px] ">
                    Clear and transparent commission structure outlining the percentage of commission earned on each sale made through affiliate links.
                </p>
            </div>
            <div className="w-[24%] md:mb-[25px] sm:mb-[25px] xsm:mb-[25px]  md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img5} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[20px] font-[600] w-[250px] mt-[12px] sm:text-[22px] xsm:-[22px]">
                    Marketing Materials
                </h3>

                <p className="text-[15px] font-[500] md:text-[15px] sm:text-[15px] xsm:text[15px]  mt-[20px]">
                    Access to marketing materials such as banners, product images, and promotional content to assist affiliates in their marketing efforts.
                </p>
            </div>
            <div className="w-[24%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img6} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[20px] md:text-[22px] sm:text-[22px] xsm:-[22px] font-[600] w-[250px] mt-[12px]">
                    Payouts
                </h3>

                <p className="text-[15px] md:text-[15px] sm:text-[15px] xsm:text[15px] font-[500] mt-[20px]">
                    Timely and secure payouts of affiliate commissions through preferred payment methods.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AffiliateHero