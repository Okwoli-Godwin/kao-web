import { createBrowserRouter } from "react-router-dom"
import { Weblayout } from "../components"
import HomeScreen from "../pages/HomeScreen"
import AgentScreen from "../pages/Agent/AgentScreen"
import AboutScreen from "../pages/About/AboutScreen"
import AffiliateScreen from "../pages/Affiliate/AffiliateScreen"
import ContactScreen from "../pages/Contact/ContactScreen"

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Weblayout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                path: "/agent",
                element: <AgentScreen />
            },
            {
                path: "/about",
                element: <AboutScreen />
            },
            {
                path: "/affiliate",
                element: <AffiliateScreen />
            },
            {
                path: "/contact",
                element: <ContactScreen />
            }
        ]
    }
])