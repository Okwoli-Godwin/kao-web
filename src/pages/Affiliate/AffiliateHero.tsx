import img from "../../assets/happy-business-colleagues-rejoicing-team-success 1.png"
import img2 from "../../assets/medium-shot-woman-work 1.png"
import img3 from "../../assets/Frame 605.png"
import img4 from "../../assets/Frame 605 (1).png"

const AffiliateHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[130px] flex-col items-center justify-center">
        <div className="w-[90%] flex items-center justify-between">
            <div className="w-[49%] flex flex-col">
                <h1 className="text-[38px] text-[#0030AD] font-[600]">Be An Affiliate</h1>

                <p className="text-[15px] mt-[10px] leading-[30px]">
                    KAO Online Stores was founded with the vision of breaking down barriers in global commerce. Our journey began with a commitment to providing a platform that empowers buyers and sellers worldwide
                </p>

                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Get Started</button>
            </div>
            
            <div className="w-[49%] flex h-[300px] overflow-hidden rounded-[12px]">
                <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>

        <div className="w-[100%] h-[450px] mt-[50px]">
            <img src={img} alt=""/>
        </div>

        <div className="w-[90%] flex justify-between mt-[100px]">
            <div className="w-[24%] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img3} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[16px] font-[500] w-[250px] mt-[12px]">
                    Individuals can apply as affiliate marketers
                </h3>

                <p className="text-[13px] font-[400] mt-[20px]">
                    Gaining access to a dashboard where they can easily copy product links, promote them, and earn commissions on sales generated through their referrals.
                </p>
            </div>
            <div className="w-[24%] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img4} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[16px] font-[500] w-[250px] mt-[12px]">
                    Commission Structure
                </h3>

                <p className="text-[13px] font-[400] mt-[20px]">
                    Clear and transparent commission structure outlining the percentage of commission earned on each sale made through affiliate links.
                </p>
            </div>
            <div className="w-[24%] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img3} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[16px] font-[500] w-[250px] mt-[12px]">
                    Marketing Materials
                </h3>

                <p className="text-[13px] font-[400] mt-[20px]">
                    Access to marketing materials such as banners, product images, and promotional content to assist affiliates in their marketing efforts.
                </p>
            </div>
            <div className="w-[24%] h-[270px] border border-[#B4B4B4] rounded-[10px] py-[10px] px-[10px] flex flex-col">
                <img src={img4} alt="" className="h-[50px] w-[50px]"/>

                <h3 className="text-[16px] font-[500] w-[250px] mt-[12px]">
                    Payouts
                </h3>

                <p className="text-[13px] font-[400] mt-[20px]">
                    Timely and secure payouts of affiliate commissions through preferred payment methods.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AffiliateHero