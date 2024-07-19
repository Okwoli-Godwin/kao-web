import img from "../assets/Frame 515.png"
import img2 from "../assets/Frame 514.png"
import img3 from "../assets/Frame 531.png"
import img4 from "../assets/Frame 514 (1).png"

const Offerings = () => {
  return (
    <div className="w-[100%] mt-[90px] bg-[#0030AD] flex justify-center pt-[30px] pb-[30px]">
        <div className="w-[90%] flex flex-col md:flex-wrap sm:flex-wrap xsm:flex-wrap">
            <div className="w-[100%] flex justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
                <div className="w-[48%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
                    <div className="w-[100%] flex items-center">
                        <p className="text-[15px] text-[#fff] font-[300]">Why you should shop with us</p>
                        <div className="h-[2px] bg-[#fff] w-[230px] sm:w-[180px] xsm:w-[140px] ml-[20px]"></div>
                    </div>
                    
                    <h1 className="text-[27px] font-[400] text-[#fff] w-[350px] mt-[12px]">
                        Offerings for KAO Users: Products and Services
                    </h1>
                    <p className="text-[#fff] mt-[12px] leading-[30px] w-[420px] sm:w-[100%] xsm:w-[100%] text-[13px] sm:text-[15px] xsm:text-[15px] font-[300]">
                        KAO Online Stores offers a wide variety of products ranging from electronics, fashion, beauty, home essentials, to specialty items
                    </p>
                </div>
                
                <div className="w-[49%] md:w-[100%] sm:w-[100%] xsm:w-[100%] sm:flex-wrap xsm:flex-wrap md:mt-[17px] flex justify-between">
                    <div className="w-[47%] sm:w-[100%] xsm:w-[100%] sm:mb-[25px] xsm:mb-[25px] sm:mt-[20px] xsm:mt-[20px] h-[200px] relative border flex justify-center items-center border-[#FFFFFF] rounded-tr-[12px] rounded-bl-[12px]">
                        <img src={img} alt="" className="absolute top-0 left-0 h-[60px]"/>
                        <img src={img2} alt="" className="absolute top-0 left-0 h-[64px]"/>
                        
                        <div className="w-[100%] pl-[20px] pr-[20px] flex flex-col mt-[40px]">
                            <h3 className="text-[15px] text-[#fff] font-[400] sm:text-[20px] xsm:text-[20px] sm:font-[600] xsm:font-[600]">Flexible Payment Options:</h3>
                            <p className="text-[12px] sm:text-[15px] xsm:text-[15px] text-[#fff] font-[300] mt-[12px]">Users can pay with cryptocurrency or any currency in the world.</p>
                        </div>
                    </div>
                    <div className="w-[49%] sm:w-[100%] xsm:w-[100%] sm:mb-[25px] xsm:mb-[25px] h-[200px] relative border flex justify-center items-center border-[#FFFFFF] rounded-tr-[12px] rounded-bl-[12px]">
                        <img src={img} alt="" className="absolute top-0 left-0 h-[60px]"/>
                        <img src={img4} alt="" className="absolute top-0 left-0 h-[64px]"/>
                        
                        <div className="w-[100%] pl-[20px] pr-[20px] flex flex-col mt-[50px]">
                            <h3 className="text-[15px] text-[#fff] font-[400] sm:text-[20px] xsm:text-[20px] sm:font-[600] xsm:font-[600]">Global Marketplace:</h3>
                            <p className="text-[12px] text-[#fff] sm:text-[15px] xsm:text-[15px] font-[300]  mt-[12px]">Access stores from different countries and buy directly, with fast shipping options available.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-[100%] flex justify-between mt-[60px] sm:mt-[40px] xsm:mt-[40px] md:flex-wrap sm:flex-wrap xsm:flex-wrap">
                <div className="flex flex-col w-[350px] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mb-[20px] sm:mb-[20px] xsm:mb-[20px]">
                    <div className="flex items-center">
                        <img src={img3} alt="" className="h-[15px]"/>
                        <h4 className="text-[#fff] font-[500] ml-[12px] text-[13px] sm:text-[18px] xsm:text-[18px]">Vouchers and Gift Cards</h4>
                    </div>
                    
                    <div className="w-[100%] h-[2px] bg-[#D9D9D9] mt-[20px]"></div>
                    
                    <p className="w-[100%] text-[#fff] font-[300] mt-[15px] leading-[30px] text-[13px] sm:text-[15px] xsm:text-[15px]">Sellers can easily create vouchers and company gift cards usable worldwide.</p>
                </div>
                <div className="flex flex-col w-[350px] md:w-[100%] md:mb-[20px] sm:mb-[20px] xsm:mb-[20px]">
                    <div className="flex items-center">
                        <img src={img3} alt="" className="h-[15px]"/>
                        <h4 className="text-[#fff] font-[500] ml-[12px] text-[13px] sm:text-[18px] xsm:text-[18px]">Wallets</h4>
                    </div>
                    
                    <div className="w-[100%] h-[2px] bg-[#D9D9D9] mt-[20px]"></div>
                    
                    <p className="w-[100%] text-[#fff] font-[300] mt-[15px] leading-[30px] text-[13px] sm:text-[15px] xsm:text-[15px]">Secure wallets provided for sellers, customers, and agents to facilitate seamless transactions and savings for future purchases.</p>
                </div>
                <div className="flex flex-col w-[350px] md:w-[100%] md:mb-[20px] sm:mb-[20px]">
                    <div className="flex items-center">
                        <img src={img3} alt="" className="h-[15px]"/>
                        <h4 className="text-[#fff] font-[500] ml-[12px] text-[13px] sm:text-[18px] xsm:text-[18px]">Dedicated Support</h4>
                    </div>
                    
                    <div className="w-[100%] h-[2px] bg-[#D9D9D9] mt-[20px]"></div>
                    
                    <p className="w-[100%] text-[#fff] font-[300] mt-[15px] leading-[30px] text-[13px] sm:text-[15px] xsm:text-[15px]">Each merchant or seller is assigned special agents for swift assistance and continuous consultations.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offerings