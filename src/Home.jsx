import React from 'react';
import { Container } from 'react-bootstrap';
import Chart from "./viz/Chart.jsx"
import TextAccordion from "./TextAccordion.jsx"
import DotPlotFarm from "./viz/DotPlotFarm.jsx"
function Home(props) {



	return (

		<>

		<Container className="box my-5">
			<DotPlotFarm/>
			<TextAccordion />
		</Container>

		<Container className="box my-5">
			<Chart />
		</Container>
		</>

		)
}

export default Home;
