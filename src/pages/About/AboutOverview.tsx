import img3 from "../../assets/Frame 531 (1).png"
import img2 from "../../assets/healthicons_yes.png"
import img from "../../assets/man-introducing-himself-employers-office-job-interview (1) 1.png"

const AboutOverview = () => {
  return (
    <div className="w-[100%] flex justify-center  mt-[100px]">
        <div className="w-[75%] flex flex-col items-center">
            <div className="flex items-center w-[100%]">
                <div className="w-[350px] h-[3px] bg-[#0030AD]"></div>
                <h1 className="text-[33px] font-[600] ml-[20px]">KAO Overview</h1>
            </div>

            <div className="w-[100%] flex justify-between mt-[60px]">
            <div className="w-[48%] h-[500px] rounded-[12px] overflow-hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>

            <div className="flex flex-col h-[570px] w-[48%] mt-[15px]">
                <p className="text-[15px] leading-[30px]">
                    KAO Online Stores aims to serve a broad and diverse audience, catering to individuals of all ages, backgrounds, and interests. Our platform is designed to be accessible to everyone, providing a convenient and enjoyable shopping experience for all.. We cater to diverse buyer personas including cryptocurrency enthusiasts, international shoppers, and those seeking unique products
                </p>
                
                <div className="w-[100%] h-[80px] bg-[#DE801C] mt-[20px] rounded-tr-[12px] pt-[1px] pr-[3px] rounded-bl-[12px]">
                    <div className="w-[100%] h-[100%] rounded-tr-[12px] bg-[#0030AD] mb-[-2px] rounded-bl-[12px] pt-[10px] pb-[15px] pl-[15px] flex flex-col">
                        <h3 className="text-[#fff]">Values</h3>
                        <div className="flex items-center mt-[5px]">
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[14px]">Innovation</p>
                            </div>
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[14px]">Inclusivity</p>
                            </div>
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[14px]">Customer-Centricity</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-[100%] flex flex-col mt-[30px]">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <img src={img3} alt="" />
                            <h4 className="ml-[10px] text-[16px] font-[500]">Vision Statement</h4>
                        </div>
                        <p className="text-[14px] mt-[3px] leading-[30px]">
                            To become the leading online marketplace connecting buyers and sellers worldwide, transcending geographical boundaries.
                        </p>
                    </div>
                    <div className="flex flex-col mt-[20px]">
                        <div className="flex items-center">
                            <img src={img3} alt="" />
                            <h4 className="ml-[10px] text-[16px] font-[500]">Mission Statement</h4>
                        </div>
                        <p className="text-[14px] mt-[3px] leading-[30px]">
                            To provide a seamless global shopping experience by offering a diverse range of products, flexible payment options, and exceptional customer service
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutOverview