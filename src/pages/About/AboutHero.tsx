import img from "../../assets/new-male-employee-conversing-with-female-colleagues-his-new-office-job 1.png"
import { Slide } from "react-awesome-reveal";

const AboutHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[150px] sm:pt-[120px] xsm:pt-[120px] md:pt-[70px] flex-col items-center justify-center">
        <div className="w-[90%] flex items-center">
            <Slide className="w-[48%] sm:w-[100%] xsm:w-[100%] md:w-[100%]" duration={2000}>
                <div className="w-[100%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
                <h1 className="text-[55px] text-[#0030AD] font-[600] sm:text-[30px] xsm:text-[30px]">KAO STORY</h1>

                <p className="text-[18px] font-[500] md:text-[18px] sm:text-[15px] xsm:text-[15px] mt-[10px] leading-[30px]">
                    KAO Online Stores was founded with the vision of breaking down barriers in global commerce. Our journey began with a commitment to providing a platform that empowers buyers and sellers worldwide
                </p>

                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Get Started</button>
            </div>
            </Slide>
        </div>

        <div className="w-[100%] h-[450px] md:h-[480px] sm:h-[400px] xsm:h-[370px] mt-[50px] bg-[red]">
            <img src={img} alt="" className="h-[100%] w-[100%] object-cover"/>
        </div>
    </div>
  )
}

export default AboutHero