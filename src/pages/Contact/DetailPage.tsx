import img from "../../assets/image 24.png"

const DetailPage = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[130px] items-center justify-center overflow-hidden">
        <div className="w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap  flex items-center justify-between overflow-[hidden]">
            <h1 className="text-[35px] font-[700] text-[#0030AD] hidden md:flex sm:flex xsm:flex">
                 Contact Us
            </h1>
            <div className="w-[45%] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[550px] sm:h-[400px] xsm:h-[350px] rounded-tr-[20px] rounded-bl-[20px] overflow-hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>

            <div className="w-[53%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
                <h1 className="text-[35px] font-[700] text-[#0030AD] md:hidden sm:hidden xsm:hidden">
                    Contact Us
                </h1>

                <div className="flex flex-col mt-[30px]">
                    <div className="flex flex-col">
                        <h3 className="text-[18px] font-[500]">Full Name</h3>
                        <input placeholder="input your name" type="text" className="h-[45px] w-[380px] md:w-[100%] sm:w-[100%] xsm:w-[100%] border border-[#AEAEAE] rounded-[5px] pl-[10px] outline-none mt-[4px]"/>
                    </div>
                    <div className="flex flex-col mt-[30px]">
                        <h3 className="text-[18px] font-[500]">Email</h3>
                        <input placeholder="input your email" type="email" className="h-[45px] md:w-[100%] sm:w-[100%] xsm:w-[100%] w-[380px] border border-[#AEAEAE] rounded-[5px] pl-[10px] outline-none mt-[4px]"/>
                    </div>
                    <div className="flex flex-col mt-[30px]">
                        <h3 className="text-[18px] font-[500]">Phone Number</h3>
                        <input placeholder="+234" type="text" className="h-[45px] w-[380px] md:w-[100%] sm:w-[100%] xsm:w-[100%] border border-[#AEAEAE] rounded-[5px] pl-[10px] outline-none mt-[4px]"/>
                    </div>
                    <div className="flex flex-col mt-[30px]">
                        <h3 className="text-[18px] font-[500]">Message</h3>
                        <textarea className="resize-none h-[100px] w-[380px] md:w-[100%] sm:w-[100%] xsm:w-[100%] border border-[#AEAEAE] rounded-[5px] pl-[10px] pt-[12px] outline-none mt-[4px">
                            
                        </textarea>
                    </div>
                    <button className="w-[150px]  sm:w-[100%] xsm:w-[100%] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[30px]">Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPage