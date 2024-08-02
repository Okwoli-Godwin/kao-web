import img from "../../assets/image 23.png"

const Bloggers = () => {
  return (
    <div className="w-[100%] flex justify-center items-center mt-[40px] md:mt-[60px] sm:mt-[50px] xsm:mt-[40px]">
        <div className="w-[70%] md:w-[90%] sm:w-[90%] xsm:w-[90%] flex flex-col items-center">

            <div className="w-[100%] flex items-center mt-[90px] md:mt-[10px] sm:mt-[45px] xsm:mt-[40px] justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
                <div className="w-[48%] md:mt-[40px] md:w-[100%] sm:w-[100%] xsm:w-[100%] h-[325px] bg-[#DE801C] relative rounded-tl-[80px]">
                    <div className="w-[100%] h-[336px] border-[4px] border-[#0030AD] rounded-tl-[80px] absolute mt-[-20px] sm:mt-[-15px] xsm:mt-[-15px] ml-[-10px] sm:ml-[-5px] xsm:ml-[-5px] overflow-hidden">
                        <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                </div>
                  <div className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mt-[15px] sm:mt-[20px] xsm:mt-[22px] flex flex-col">
                      <h2 className="text-[26px] sm:text-[23px] xsm:text-[22px] text-[#0030AD] font-[600]">
                          Bloggers:
                      </h2>
                      <p className="text-[18px] font-[500] mt-[15px] w-[440px] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                          You own a blogsite or website that records over thousands of visitors per day. You engage in price comparison, deals, reviews and recommendations.
                      </p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Bloggers