// import Testimonial from "../Testimonial"
import AgentHero from "./AgentHero"
import Becomming from "./Becomming"
import Rewards from "./Rewards"
import Trainning from "./Trainning"
// import AgentProcess from "./AgentProcess"


const AgentScreen = () => {
  return (
    <div className="overflow-hidden">
        <AgentHero />
        <Becomming />
        <Trainning />
        <Rewards />
        {/* <AgentProcess />
        <Testimonial /> */}
    </div>
  )
}

export default AgentScreen