import { StarWarsBackground } from "../components/StarWarsBackground";
import logoStarWars from "../assets/img/LogoStarWars.jpg";

export const Home = () => {
	return (
		<div style={{ position: "relative" }}>
			{/* Logo Estático posicionado arriba a la izquierda */}
			<div style={{ 
				position: "absolute", 
				top: "30px", 
				left: "40px", 
				zIndex: 50 
			}}>
				<img 
					src={logoStarWars} 
					alt="Star Wars Logo" 
					style={{ 
						height: "180px", 
						width: "auto",
						filter: "drop-shadow(0 0 10px rgba(255, 193, 7, 0.4))" // Brillo opcional
					}} 
				/>
			</div>
			<StarWarsBackground showCrawl={true} />
		</div>
	);
};