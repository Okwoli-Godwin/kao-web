import img from "../assets/Frame 497.png"
import img2 from "../assets/image 12.png"
import img3 from "../assets/image 11.png"

const Featured = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[40px] sm:mt-[70px] xsm:mt-[80px] md:mt-[90px] relative h-[145px] items-center">
        <div className="w-[90%] sm:w-[100%] xsm:w-[100%] md:w-[100%] h-[85px] bg-[#0030AD] flex justify-center items-center rounded-tr-[8px] rounded-bl-[8px] sm:rounded-bl-[0px] md:rounded-bl-[0px] xsm:rounded-bl-[0px] sm:rounded-tr-[0px] md:rounded-tr-[0px] xsm:rounded-tr-[0px]">
            <img src={img} alt="" className="h-[55px] sm:h-[42px] xsm:h-[38px] md:h-[42px] mr-[55px] sm:mr-[35px] xsm:mr-[33px]"/>
            <img src={img2} alt="" className="h-[45px] md:h-[45px] sm:h-[32px] xsm:h-[38px] mr-[55px] sm:mr-[35px] xsm:mr-[33px]"/>
            <img src={img3} alt="" className="h-[30px] md:h-[30px] sm:h-[17px] xsm:h-[15px]"/>
        </div>
        
        <div className="absolute w-[330px] h-[40px] bg-[#DE801C] top-0 rounded-tr-[13px] rounded-bl-[13px] flex justify-center items-center">
            <p className="text-[15px] font-[400] text-[#fff]">Featured in leading publications and awards</p>
        </div>
    </div>
  )
}

export default Featured