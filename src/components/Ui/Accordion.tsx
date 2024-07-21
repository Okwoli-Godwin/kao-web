import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useRef } from "react"
import data from "./AccordionData";
import "./Accordion.css"

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
    const contentHeight = useRef<any>();

    return (
        <div className="overflow-hidden">
            <button className={`w-full text-left px-4 pt-[8px] pb-[8px] flex items-center rounded-tl-[10px] rounded-br-[10px] justify-between bg-[#F0F0F0] mb-[15px] font-medium text-lg cursor-pointer ${
          isOpen ? "border-t-[2px] border-[#DE801C]" : ""
        }`} onClick={onClick}>

                <p className="text-[#0030AD] text-[16px] md:text-[17px] sm:text-[15px] xsm:text-[15px] font-[600]">{question}</p>
                <RiArrowDropDownLine className={`text-3xl text-[#0030AD] transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />

            </button>

            <div
                ref={contentHeight}
                className="px-4 overflow-hidden transition-height duration-700"
                style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
            >
                <p className="py-[12px] text-[15px] font-[500] md:text-[15px] sm:text-[15px] xsm:text-[15px] leading-[30px]">{answer}</p>
            </div>
        </div>
    )
}

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const handleItemClick = (index: any) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }

  return (
    <div className="w-[100%] transform  h-[100px] md:h-[100%] sm:h-[100%] xsm:h-[100%]">
        {data.map((item, index) => (
            <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
            />
        ))}
    </div>
  )
}

export default Accordion