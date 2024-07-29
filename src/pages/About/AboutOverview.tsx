import img3 from "../../assets/Frame 531 (1).png"
import img from "../../assets/man-introducing-himself-employers-office-job-interview (1) 1.png"
import { Fade, Zoom } from "react-awesome-reveal";

const AboutOverview = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center  mt-[140px] md:mt-[80px] sm:mt-[80px] xsm:mt-[60px]">
        <div className="w-[90%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex flex-col items-center md:flex-wrap sm:flex-wrap xsm:flex-wrap">
            <div className="flex items-center w-[100%]">
                <div className="w-[430px] sm:w-[150px] xsm:w-[150px] h-[3px] bg-[#0030AD]"></div>
                <h1 className="text-[33px] sm:text-[26px] xsm:text-[23px] text-center font-[600] ml-[20px]">Bridging the Gap in Global Commerce</h1>
            </div>

            <div className="w-[100%] flex justify-between mt-[60px] sm:mt-[30px] xsm:mt-[30px] md:flex-wrap sm:flex-wrap xsm:flex-wrap">

            <div className="flex flex-col h-[570px] w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] mt-[15px]">

                <Zoom duration={3000} className="w-[48%] hidden md:flex sm:flex xsm:flex md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[500px] sm:h-[380px] xsm:h-[380px] rounded-[12px] overflow-hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                </div>
                </Zoom>

                <Fade direction="up" duration={2000}>
                    <p className="text-[18px] mt-[10px] font-[500] leading-[30px]">
                    Founded on the principles of innovation and trust, KAO Online Stores has evolved into a leading platform for global commerce. We strive to break down barriers, foster connections, and empower businesses to thrive in the global market
                </p>
                </Fade>
                
                {/* <div className="w-[100%] h-[80px] bg-[#DE801C] mt-[20px] rounded-tr-[12px] pt-[1px] pr-[3px] rounded-bl-[12px]">
                    <div className="w-[100%] h-[100%] rounded-tr-[12px] bg-[#0030AD] mb-[-2px] rounded-bl-[12px] pt-[10px] pb-[15px] pl-[15px] flex flex-col">
                        <h3 className="text-[#fff] text-[20px] font-[500] md:text-[19px] md:font-[500]">Values</h3>
                        <div className="flex items-center mt-[5px] md:justify-between">
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px] sm:h-[13px] xsm:h-[18px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[18px] sm:text-[15px] xsm:text-[12px]">Innovation</p>
                            </div>
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px] sm:h-[13px] xsm:h-[18px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[18px] sm:text-[15px] xsm:text-[12px]">Inclusivity</p>
                            </div>
                            <div className="flex items-center mr-[13px]">
                                <img src={img2} alt="" className="h-[20px] sm:h-[13px] xsm:h-[18px]"/>
                                <p className="text-[#fff] ml-[7px] font-[300] text-[18px] sm:text-[15px] xsm:text-[12px]">Customer-Centricity</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <div className="w-[100%] flex flex-col mt-[30px]">
                    <Fade direction="up" duration={2000}>
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
                            We're dedicated to creating seamless pathways for swift buying and selling, effortless payment processing, and reliable services. Our commitment to swift logistics ensures that our customers receive their products quickly and efficiently.
                        </p>
                    </div>
                    </Fade>
                </div>
            </div>
            
            <Zoom duration={3000} className="w-[48%] md:hidden sm:hidden xsm:hidden md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[500px] sm:h-[380px] xsm:h-[380px] rounded-[12px] overflow-hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            </Zoom>
        </div>
        </div>
    </div>
  )
}

export default AboutOverview