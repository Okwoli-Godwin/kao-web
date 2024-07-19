import img from "../assets/cheerful-women-shopping-taking-selfie 1.png"

const Updates = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[120px]">
        <div className="w-[90%] flex items-center overflow-hidden rounded-tr-[10px] rounded-bl-[10px] md:flex-wrap sm:flex-wrap xsm:flex-wrap">
            <div className="w-[50%] md:w-[100%] h-[550px]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
              </div>
              <div className="w-[50%] bg-[#0030AD] h-[100%] flex flex-col justify-center pl-[22px]">
                  <h1 className="text-[#fff] text-[20px] w-[300px] leading-[33px]">
                      Be the first to hear about our recent updates
                  </h1>
                  <p className="text-[#fff] font-[200] mt-[20px] text-[13px] w-[450px] leading-[30px]">
                      Secure wallets provided for sellers, customers, and agents to facilitate seamless transactions and savings for future purchases.
                  </p>
                  <input type="text" placeholder="Enter your email address" className="w-[380px] outline-none text-[#fff] h-[40px] border border-[#eeeeee] pl-[12px] bg-transparent mt-[30px]" />
                  <button className="text-[13px] text-[#0030AD] w-[200px] h-[40px] bg-[#fff] rounded-[5px] mt-[30px] font-[500]">
                      Subscribe to Newsletter
                  </button>
              </div>
        </div>
    </div>
  )
}

export default Updates