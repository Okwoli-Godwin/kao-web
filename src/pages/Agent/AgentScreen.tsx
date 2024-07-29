// import Testimonial from "../Testimonial"
import AgentHero from "./AgentHero"
import Becomming from "./Becomming"
import Trainning from "./Trainning"
// import AgentProcess from "./AgentProcess"


const AgentScreen = () => {
  return (
    <div className="overflow-hidden">
        <AgentHero />
        <Becomming />
        <Trainning />
        {/* <AgentProcess />
        <Testimonial /> */}
    </div>
  )
}

export default AgentScreen