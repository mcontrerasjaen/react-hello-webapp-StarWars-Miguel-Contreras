import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StarWarsBackground } from "../components/StarWarsBackground";

export const Layout = () => {
    return (
        <div>
            {/* Contenedor principal con flex-column y altura mínima para que el footer baje */}
            <div className="d-flex flex-column min-vh-100" style={{ position: "relative" }}>
                <ScrollToTop />
                
                {/* 1. Fondo: z-index muy bajo para que no tape nada */}
                <StarWarsBackground showCrawl={false} /> 
                
                {/* 2. Header: Siempre arriba */}
                <header style={{ position: "relative", zIndex: 1000 }}>
                    <Navbar />
                </header>

                {/* 3. Main: flex-grow-1 obliga al footer a irse al fondo de la pantalla */}
                <main className="flex-grow-1" style={{ position: "relative", zIndex: 1 }}>
                    <Outlet />
                </main>

                {/* 4. Footer: Aseguramos z-index para que sea visible sobre el fondo */}
                <footer style={{ position: "relative", zIndex: 1000 }}>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};