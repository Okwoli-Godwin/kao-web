import Choose from "./Choose"
import Faqs from "./Faqs"
import Featured from "./Featured"
import Hero from "./Hero"
import Offerings from "./Offerings"
import Overview from "./Overview"
import Testimonial from "./Testimonial"
import Updates from "./Updates"

const HomeScreen = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Featured />
      <Choose />
      <Overview />
      <Offerings />
      <Faqs />
       <Updates />
       <Testimonial /> 
    </div>
  )
}

export default HomeScreen