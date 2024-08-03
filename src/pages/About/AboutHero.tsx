import img from "../../assets/new-male-employee-conversing-with-female-colleagues-his-new-office-job 1.png"

const AboutHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[150px] sm:pt-[120px] xsm:pt-[120px] md:pt-[140px] flex-col items-center justify-center">
        <div className="w-[90%] flex items-center">
                <div className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
                <h1 className="text-[55px] text-[#0030AD] font-[600] sm:text-[30px] xsm:text-[30px]">KAO STORY</h1>

                <p className="text-[18px] font-[500] md:text-[18px] sm:text-[15px] xsm:text-[15px] mt-[10px] leading-[30px]">
                    At KAO, we believe in a world without borders, where commerce knows no bounds. Our story began with a bold vision: to connect customers worldwide with foreign manufacturers, unlocking access to a vast global market
                </p>

                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Get Started</button>
            </div>
        </div>

        <div className="w-[100%] h-[450px] hidden md:flex sm:flex xsm:flex md:h-[400px] sm:h-[400px] xsm:h-[370px] mt-[20px]">
            <img src={img} alt="" className="w-[100%] object-cover h-[100%]"/>
        </div>
    </div>
  )
}

export default AboutHero