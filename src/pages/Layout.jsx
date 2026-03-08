import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StarWarsBackground } from "../components/StarWarsBackground";
import logoStarWars from "../assets/img/LogoStarWars.jpg"; // Asegúrate de importar el logo aquí

export const Layout = () => {
    return (
        <div>
            <div className="d-flex flex-column min-vh-100" style={{ position: "relative" }}>
                <ScrollToTop />
                
                {/* 1. Fondo */}
                <StarWarsBackground showCrawl={false} /> 
            
                             
                {/* 2. Header */}
                <header style={{ position: "relative", zIndex: 1000 }}>
                    <Navbar />
                </header>

              <div style={{ 
    position: "absolute", 
    top: "100px", // <--- Aumenta esto (estaba en 20px) para que baje
    left: "40px", 
    zIndex: 2000,
    pointerEvents: "none"
}}>
    <img 
        src={logoStarWars} 
        alt="Star Wars Logo" 
        style={{ 
            height: "140px", 
            width: "auto",
            filter: "drop-shadow(0 0 10px rgba(255, 193, 7, 0.4))",
            pointerEvents: "auto"
        }} 
    />
</div>

                {/* 3. Main */}
                 <main className="flex-grow-1" style={{ position: "relative", zIndex: 1 }}>
                <Outlet />
            </main>

                {/* 4. Footer */}
                <footer style={{ position: "relative", zIndex: 1000 }}>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};