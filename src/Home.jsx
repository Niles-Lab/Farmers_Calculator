import React from 'react';
import { Container } from 'react-bootstrap';
import Chart from "./viz/Chart.jsx"
import TextAccordion from "./TextAccordion.jsx"
import PriceChart from "./viz/PriceChart.jsx"
function Home(props) {



	return (

		<>

		<Container className="box my-5">

			<TextAccordion />
		</Container>

		<Container className="box my-5">
			<Chart />
		</Container>
		</>

		)
}

export default Home;
