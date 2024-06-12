import Updates from "../Updates"
import AboutHero from "./AboutHero"
import AboutOverview from "./AboutOverview"
import AboutTeam from "./AboutTeam"


const AboutScreen = () => {
  return (
    <div>
        <AboutHero />
        <AboutOverview />
        <AboutTeam />
        <Updates />
    </div>
  )
}

export default AboutScreen