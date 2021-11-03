import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Resource from "./Resource.jsx"

function Resources(props) {


	return (
		<>



		<Container className="my-5">
		<Row>
			<h1 className="mb-0">Research</h1>
		</Row>
		<hr/>
		<Row>
			<Resource format={"Academic Paper"} download
			date={"19 April 2021"}
			link={"/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf"}
			description={"Climate change in the context of whole-farming systems: opportunities for improved outreach"} />

		
		</Row>
		</Container>




			<Container>
			<Row>
				<h1>Silvopasture</h1>
			</Row>
			<hr/>
			<Row>
			<Resource format={"Academic Paper"}
			date={"19 April 2021"}
			link={"/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf"}
			description={"Climate change in the context of whole-farming systems: opportunities for improved outreach"} />

				<br/>


			<Resource format={"Virtual Tour"}
			link={"https://www.climatehubs.usda.gov/hubs/northeast/project/agroforestry-angus-glen"}
			description={"Agroforestry Angus Glen Farms, NY (USDA Northeast Climate Hub)"} />

				<br/>

			<Resource format={"Virtual Tour"}
			link={"https://www.climatehubs.usda.gov/hubs/northeast/project/dickinson-college-farms-silvopasture"}
			description={"Dickinson College’s Farm Silvopasture PA (USDA Northeast Climate Hub)"} />
				
			</Row>
			</Container>

			<Container>
			<Row>
				<h1>Irrigation</h1>
			</Row>
			<hr/>
			<Row>
			<Resource format={"External Link"}
			date={"Updated November 2018"}
			link={"https://www.uvm.edu/climatefarming/sites/default/files/files/uvm_dripirrigation.pdf"}
			description={"Getting Started with Drip Irrigation - University of Vermont Extension, Rachel Schattman and Chloe Boutelle"} />

				<br/>


			<Resource format={"External Link"}
			link={"https://www.uvm.edu/sites/default/files/media/irrigation_case_study_intervale_july_2017_0.pdf"}
			date={"Summer 2017"}
			description={"Irrigation Case Study by Andy Jones"} />

			<br/>

			<Resource format={"Virtual Tour"}
			link={"https://www.climatehubs.usda.gov/hubs/northeast/project/dickinson-college-farms-silvopasture"}
			description={"Dickinson College’s Farm Silvopasture PA (USDA Northeast Climate Hub)"} />
				
			</Row>
			</Container>


		</>
		)
}

export default Resources;
