import img from "../../assets/new-male-employee-conversing-with-female-colleagues-his-new-office-job 1.png"

const AboutHero = () => {
  return (
    <div className="w-[100%] flex h-[100%] pt-[130px] flex-col items-center justify-center">
        <div className="w-[90%] flex items-center">
            <div className="w-[48%] flex flex-col">
                <h1 className="text-[38px] text-[#0030AD] font-[600]">KAO STORY</h1>

                <p className="text-[15px] mt-[10px] leading-[30px]">
                    KAO Online Stores was founded with the vision of breaking down barriers in global commerce. Our journey began with a commitment to providing a platform that empowers buyers and sellers worldwide
                </p>

                <button className="w-[120px] h-[40px] flex justify-center items-center bg-[#0030AD] text-[#fff] rounded-[5px] mt-[35px]">Get Started</button>
            </div>
        </div>

        <div className="w-[100%] h-[450px] mt-[50px]">
            <img src={img} alt=""/>
        </div>
    </div>
  )
}

export default AboutHero