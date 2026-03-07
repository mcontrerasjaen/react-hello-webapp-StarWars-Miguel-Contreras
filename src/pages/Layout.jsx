import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { StarWarsBackground } from "../components/StarWarsBackground"

export const Layout = () => {
    return (
        <ScrollToTop>
            {/* El fondo siempre presente, pero SIN las letras */}
            <StarWarsBackground showCrawl={false} /> 
        <header style={{ position: 'relative', zIndex: 1000 }}>
                <Navbar />
            </header>
            <main style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </ScrollToTop>
    )
}