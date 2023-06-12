import React from "react";

import { Navbar } from "../component/navbar.jsx";
import { Footer } from "../component/footer.jsx";
import {Card} from "../component/card.jsx"
import { Jumbotron } from "../component/jumbotron.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
        <Navbar />
		<div className="container">
		<Jumbotron />

		<div className="row">
			<Card />
			<Card />
			<Card />
			<Card />


			</div></div>
			<Footer />
		</div>
	);
};

export default Home;
