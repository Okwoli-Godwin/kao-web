import { createBrowserRouter } from "react-router-dom"
import { Weblayout } from "../components"
import HomeScreen from "../pages/HomeScreen"
import AgentScreen from "../pages/Agent/AgentScreen"
import AboutScreen from "../pages/About/AboutScreen"
import AffiliateScreen from "../pages/Affiliate/AffiliateScreen"
import ContactScreen from "../pages/Contact/ContactScreen"
import Product_services from "../pages/Product/Product_services"
import ScrollToTop from "./ScrollToTop"

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Weblayout />,
        children: [
            {
                index: true,
                element: (
                    <>
                        <ScrollToTop />
                        <HomeScreen />
                    </>
                )
            },
            {
                path: "/agent",
                element: (
                    <>
                        <ScrollToTop />
                        <AgentScreen />
                    </>
                )
            },
            {
                path: "/product&service",
                element: (
                    <>
                        <ScrollToTop />
                        <Product_services />
                    </>
                )
            },
            {
                path: "/about",
                element: (
                    <>
                        <ScrollToTop />
                        <AboutScreen />
                    </>
                )
            },
            {
                path: "/affiliate",
                element: (
                    <>
                        <ScrollToTop />
                        <AffiliateScreen />
                    </>
                )
            },
            {
                path: "/contact",
                element: (
                    <>
                        <ScrollToTop />
                        <ContactScreen />
                    </>
                )
            }
        ]
    }
])