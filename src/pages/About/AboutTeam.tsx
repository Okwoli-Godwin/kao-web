import img from "../../assets/Frame 598.png";
import img2 from "../../assets/Frame 599.png";
import img3 from "../../assets/Frame 600.png";
import img4 from "../../assets/Frame 601.png";

const AboutTeam = () => {
  return (
    <div className="w-full flex justify-center mt-24 md:mt-18 sm:mt-[-12] xsm:mt-[40px] flex-col items-center">
      <div className="w-[90%] flex sm:mt-[30px] xsm:mt-[32px]">
        <h1 className="text-[35px] sm:text-[27px] xsm:text-[25px] font-[600] w-[870px] sm:w-full xsm:w-full">
          <span className="text-[#0030AD]">Meet our dynamic team</span> dedicated to ensuring a seamless shopping experience:
        </h1>
      </div>

      <div className="w-full md:w-[90%] sm:w-[90%] xsm:w-[90%] md:flex-wrap sm:flex-wrap xsm:flex-wrap md:justify-between flex h-[300px] md:h-auto sm:h-auto xsm:h-auto mt-10">
        {[img, img2, img3, img4, img].map((image, index) => (
          <div
            key={index}
            className="w-[20%] sm:h-[320px] xsm:h-[320px] relative md:w-[49%] sm:w-full xsm:w-full md:mb-8 sm:mb-8 xsm:mb-8 h-full bg-blue group"
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
            <div className="absolute py-[12px] px-[12px] w-[220px] bg-[#0030AD] bottom-4 rounded-tl-[7px] rounded-br-[7px] right-[12px] border-r-[3px] border-[#DE801C] flex pl-2 pr-2 pt-2 flex-col sm:opacity-100 md:opacity-100 xsm:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="font-[400] text-[#fff] text-[18px] md:text-[15px] sm:text-[15px] xsm:text-[15px]">Ayomide Abin</h4>
              <p className="text-[14px] font-[300] text-[#fff]">Founder</p>
              <div className="w-[80px] h-[1px] bg-[#fff] mt-2"></div>
              <p className="text-[14px] font-[400] text-[#fff] mt-3">
                A visionary entrepreneur passionate about revolutionizing e-commerce
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
