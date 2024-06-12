import img from "../../assets/Frame 598.png"
import img2 from "../../assets/Frame 599.png"
import img3 from "../../assets/Frame 600.png"
import img4 from "../../assets/Frame 601.png"

const AboutTeam = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[70px] flex-col items-center">
        <div className="w-[90%] flex">
            <h1 className="text-[35px] font-[500] w-[870px]">
                <span className="text-[#0030AD]">Meet our dynamic team</span> dedicated to ensuring a seamless shopping experience:
            </h1>
        </div>

        <div className="w-[100%] flex h-[300px] mt-[40px]">
            <div className="w-[20%] h-[100%] bg-[blue]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] h-[100%] bg-[blue]">
                <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] h-[100%] bg-[blue]">
                <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] h-[100%] bg-[blue]">
                <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
            <div className="w-[20%] h-[100%] bg-[blue]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default AboutTeam