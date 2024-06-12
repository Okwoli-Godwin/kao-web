import img from "../assets/Frame 497.png"
import img2 from "../assets/image 12.png"
import img3 from "../assets/image 11.png"

const Featured = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[40px] relative h-[145px] items-center">
        <div className="w-[90%] h-[85px] bg-[#0030AD] flex justify-center items-center rounded-tr-[8px] rounded-bl-[8px]">
            <img src={img} alt="" className="h-[55px] mr-[55px]"/>
            <img src={img2} alt="" className="h-[45px] mr-[55px]"/>
            <img src={img3} alt="" className="h-[30px] "/>
        </div>
        
        <div className="absolute w-[330px] h-[40px] bg-[#DE801C] top-0 rounded-tr-[13px] rounded-bl-[13px] flex justify-center items-center">
            <p className="text-[15px] font-[400] text-[#fff]">Featured in leading publications and awards</p>
        </div>
    </div>
  )
}

export default Featured