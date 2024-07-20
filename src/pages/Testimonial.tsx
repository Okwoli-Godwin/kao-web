
import img from "../assets/adult-woman-posing-mall 2.png"

const Testimonial = () => {
    
    
  return (
    <div className="w-[100%] mt-[90px] flex justify-center">
        <div className="w-[70%] md:w-[90%] sm:w-[90%] xsm:w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap flex flex-col items-center">
            <h3 className="text-[20px] md:text-[25px] sm:text-[20px] font-[600]">What our customers say about us</h3>
            
            <div className='flex w-[100%] mt-[40px] md:flex-wrap sm:flex-wrap xsm:flex-wrap'>
                <div className="w-[100%] flex items-center md:flex-wrap sm:flex-wrap xsm:flex-wrap">
                    <div className="w-[35%] md:w-[100%] sm:w-[100%] xsm:w-[100%] bg-[blue] h-[350px] md:h-[500px] flex relative">
                      <div className='w-[95%] flex transform -rotate-[2deg] rounded-[5px]'>
                        <div className='w-[50%] h-[100%] bg-[#0030AD] rounded-tl-[5px]'></div>
                        <div className='w-[50%] h-[100%] bg-[#DE801C] rounded-br-[5px]'></div>
                      </div>
                      
                      <img src={img} alt="" className='absolute transform rotate-[0deg] rounded-[5px] h-[360px] md:h-[510px] mt-[-5px] w-[95%] object-cover'/>
                      
                      <div className='absolute h-[46px] w-[170px] md:w-[190px] bg-[#0030AD] right-0 bottom-[25px] md:right-[50%] sm:right-[50%] xsm:right-[50%] md:mb-[-95px] sm:mb-[-24%] xsm:m-[95%] sm:mb-text-[-95px] xsm:mb-[-95px] rounded-tl-[7px] rounded-br-[7px] mr-[-70px] border-r-[3px] border-[#DE801C] flex justify-center items-center flex-col'>
                        <h4 className='font-[200] text-[#fff] text-[13px] md:text-[15px] sm:text-[15px] xsm:text-[15px]'>Ayomide Abin</h4>
                        <p className='text-[11px] font-[100] text-[#fff]'>Founder, Woklive</p>
                      </div>
                    </div>

                    <div className='flex w-[73%] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mt-[80px] sm:mt-[80px] xsm:mt-[20px] pl-[10px]'>
                      <p className='text-[13px] md:text-[15px] leading-[30px]'>
                        KAO Online Stores aims to serve a broad and diverse audience, catering to individuals of all ages, backgrounds, and interests. Our platform is designed to be accessible to everyone, providing a convenient and enjoyable shopping experience for all.. We cater to diverse buyer personas including cryptocurrency enthusiasts, international shoppers, and those seeking unique products
                      </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonial