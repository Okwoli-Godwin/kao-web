import img from "../../assets/woman-summarizing-work-meeting 1.png"

const DetailPage = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[130px] items-center justify-center overflow-hidden">
        <div className="w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap  flex items-center justify-between overflow-[hidden]">
            <div className="w-[45%] md:w-[100%] h-[550px] rounded-tr-[15px] rounded-bl-[15px] overflow-hidden">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>

            <div className="w-[53%] flex flex-col">
                <h1 className="text-[35px] font-[700] text-[#0030AD]">
                    Contact Us
                </h1>

                <div className="flex flex-col mt-[30px]">
                    <div className="flex flex-col">
                        <h3 className="text-[17px] font-[400] text-[#676767]">Full Name</h3>
                        <input placeholder="input your name" type="text" className="h-[45px] w-[380px] border border-[#AEAEAE] rounded-[5px] pl-[10px] outline-none mt-[4px]"/>
                    </div>
                    <div className="flex flex-col mt-[30px]">
                        <h3 className="text-[17px] font-[400] text-[#676767]">Phone Number</h3>
                        <input placeholder="+234" type="text" className="h-[45px] w-[380px] border border-[#AEAEAE] rounded-[5px] pl-[10px] outline-none mt-[4px]"/>
                    </div>
                    <div className="flex flex-col mt-[30px]">
                        <h3 className="text-[17px] font-[400] text-[#676767]">Phone Number</h3>
                        <textarea className="resize-none h-[100px] w-[380px] border border-[#AEAEAE] rounded-[5px] pl-[10px] pt-[12px] outline-none mt-[4px">
                            
                        </textarea>
                    </div>
                    <button className="w-[150px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[30px]">Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPage