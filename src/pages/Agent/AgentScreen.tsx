import Testimonial from "../Testimonial"
import AgentHero from "./AgentHero"
import AgentProcess from "./AgentProcess"


const AgentScreen = () => {
  return (
    <div className="overflow-hidden">
        <AgentHero />
        <AgentProcess />
        <Testimonial />
    </div>
  )
}

export default AgentScreen