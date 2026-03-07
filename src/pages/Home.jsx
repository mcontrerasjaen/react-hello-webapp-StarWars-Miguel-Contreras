import { StarWarsBackground } from "../components/StarWarsBackground";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<StarWarsBackground showCrawl={true} />
		</div>
	);
};