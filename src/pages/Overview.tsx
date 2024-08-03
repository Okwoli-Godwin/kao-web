import img from "../assets/happy-woman-give-ok-sign-camera 1.png"
import img2 from "../assets/healthicons_yes.png"
import img3 from "../assets/Frame 531 (1).png"

const Overview = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[150px] md:mt-[70px] sm:mt-[50px] xsm:mt-[50px]">
        <div className="w-[80%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex justify-between md:flex-col-reverse sm:flex-col-reverse xsm:flex-col-reverse">
                <div className="w-[48%] h-[570px] rounded-[12px] overflow-hidden md:hidden sm:hidden xsm:hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>

            <div className="flex flex-col h-[570px] md:h-[100%] xsm:h-[100%] sm:h-[100%] w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] mt-[25px]">
                    <h3 className="text-[25px] sm:text-[26px] xsm:text-[24px] font-[600] w-[280px]">
                    KAO Overview
                </h3>
                <p className="text-[18px] mt-[10px] font-[500] leading-[30px]">
                    KAO Online Stores aims to serve a broad and diverse audience, catering to individuals of all ages, backgrounds, and interests. Our platform is designed to be accessible to everyone, providing a convenient and enjoyable shopping experience for all.. We cater to diverse buyer personas including cryptocurrency enthusiasts, international shoppers, and those seeking unique products
                  </p>

                    <div className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] sm:h-[350px] xsm:h-[330px] h-[500px] md:mt-[13px] sm:mt-[13px] xsm:mt-[13px] rounded-[12px] overflow-hidden hidden md:flex sm:flex xsm:flex">
                    <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                </div>
                
                <div className="w-[100%] h-[80px] sm:h-[80px] xsm:h-[80px] bg-[#DE801C] mt-[20px] rounded-tr-[12px] pt-[1px] pr-[3px] rounded-bl-[12px]">
                    <div className="w-[100%] h-[100%] rounded-tr-[12px] bg-[#0030AD] mb-[-2px] rounded-bl-[12px] pt-[10px] pb-[15px] pl-[15px] flex flex-col">
                        <h3 className="text-[#fff] text-[20px] font-[500] md:text-[19px] md:font-[500]">Values</h3>
                        <div className="flex items-center mt-[5px] md:justify-between">
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px] sm:h-[15px] xsm:h-[18px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[18px] sm:text-[15px] xsm:text-[12px]">Innovation</p>
                            </div>
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px] sm:h-[15px] xsm:h-[18px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[18px] sm:text-[15px] xsm:text-[12px]">Inclusivity</p>
                            </div>
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px] sm:h-[15px] xsm:h-[18px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[18px] sm:text-[15px] xsm:text-[12px]">Customer-Centricity</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-[100%] flex flex-col mt-[30px]">
                        <div className="flex flex-col">
                        <div className="flex items-center">
                            <img src={img3} alt="" />
                            <h4 className="ml-[10px] text-[20px] md:text-[18px] sm:text-[18px] xsm:text-[18px] font-[600] md:font-[600] sm:font-[600] xsm:font-[600]">Vision Statement</h4>
                        </div>
                        <p className="text-[18px] mt-[3px] leading-[30px] font-[500]">
                            To become the leading online marketplace connecting buyers and sellers worldwide, transcending geographical boundaries.
                        </p>
                    </div>
                    <div className="flex flex-col mt-[20px]">
                        <div className="flex items-center">
                            <img src={img3} alt="" />
                            <h4 className="ml-[10px] text-[20px] font-[600] md:font-[600] sm:font-[600] xsm:font-[600] md:text-[18px] sm:text-[18px] xsm:text-[18px]">Mission Statement</h4>
                        </div>
                        <p className="text-[18px] font-[500] mt-[3px] leading-[30px]">
                            To provide a seamless global shopping experience by offering a diverse range of products, flexible payment options, and exceptional customer service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview