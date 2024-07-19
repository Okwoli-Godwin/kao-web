import img from "../assets/easy-wireless-yechnology-payment 1.png"
import img2 from "../assets/man-red-shirt-using-digital-tablet 1.png"

const Hero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[100px] justify-center ">
        <div className="w-[90%] flex justify-between">
            <div className="w-[48%] flex flex-col mt-[90px]">
                <h1 className="text-[55px]  w-[500px] md:w-[100%] sm:w-[100%] font-[400] leading-tight">Your online store that allows you</h1>
                <h1 className="text-[55px] font-[600] text-[#0030AD]">Pay with crypto</h1>

                <p className="text-[17px] mt-[10px] font-[500] w-[460px] leading-[30px]">
                    Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts,
                </p>
                
                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Show now</button>
            </div>
            
            <div className="w-[48%] flex mt-[40px] justify-between">
                <div className="w-[48%] flex flex-col overflow-hidden h-[380px] bg-[#0030AD] rounded-tl-[20px] rounded-bl-[50px] pt-[45px]">
                    <div className="w-[100%] h-[25px] bg-[#fff]"></div>
                    
                    <div className="w-[100%] h-[100%] overflow-hidden">
                        <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                </div>
                
                <div className="w-[48%] flex flex-col overflow-hidden h-[380px] bg-[#DE801C] rounded-tr-[50px] rounded-bl-[20px] mt-[100px] pb-[45px]">
                    <div className="w-[100%] h-[100%] overflow-hidden">
                        <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                    
                    <div className="w-[100%] h-[25px] bg-[#fff]"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero