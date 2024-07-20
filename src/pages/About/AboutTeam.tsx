import img from "../../assets/Frame 598.png"
import img2 from "../../assets/Frame 599.png"
import img3 from "../../assets/Frame 600.png"
import img4 from "../../assets/Frame 601.png"

const AboutTeam = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[70px] md:mt-[30px] sm:mt-[70px] xsm:mt-[70px] flex-col items-center">
        <div className="w-[90%] flex sm:mt-[70px] xsm:mt-[70px]">
            <h1 className="text-[35px] sm:text-[27px] xsm:text-[25px] font-[500] w-[870px] sm:w-[100%] xsm:w-[100%]">
                <span className="text-[#0030AD]">Meet our dynamic team</span> dedicated to ensuring a seamless shopping experience:
            </h1>
        </div>

        <div className="w-[100%] md:w-[90%] sm:w-[90%] xsm:w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap md:justify-between flex h-[300px] md:h-[100%] sm:h-[100%] xsm:h-[100%] mt-[40px]">
            <div className="w-[20%] md:w-[49%] sm:w-[90%] xsm:w-[90%] md:mb-[30px] sm:mb-[30px] xsm:mb-[30px] h-[100%] bg-[blue]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] md:w-[48%] sm:w-[90%] xsm:w-[90%] sm:mb-[30px] xsm:mb-[30px] h-[100%] bg-[blue]">
                <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] md:w-[48%] sm:w-[90%] xsm:w-[90%] sm:mb-[30px] xsm:mb-[30px] h-[100%] bg-[blue]">
                <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] md:w-[48%] sm:w-[90%] xsm:w-[90%] sm:mb-[30px] xsm:mb-[30px] h-[100%] bg-[blue]">
                <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] md:w-[48%] sm:w-[90%] xsm:w-[90%] sm:mb-[30px] xsm:mb-[30px] h-[100%] bg-[blue] md:mt-[22px]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default AboutTeam