// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState } from 'react';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import CalcForm from "./CalcForm.jsx"
import Calculator from "./Calculator.jsx"


function FormController() {

// Methods to calculate a cost for, this will be passed to:
// The calculator's input for selection
// The calculator's output - one page per method will be rendered
const options = ["Method A", "Method B"];


// Forced update - implemented for adding and removing crops
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);



let data = {
	acres: 0,
	land: 0,
	method: [],
	selected: [],
	crops: []
};	

const [land, setLand] = useState(data.land);
const [dairy, setDairy] = useState(data.dairy);
const [acres, setAcres] = useState(data.acres);
const [crops, setCrops] = useState(data.crops);
const [method, setMethod] = useState(data.method);

return (

		<Container className="my-5">
			<Row>
				<Col className="my-5" sm={6}>
					<CalcForm
						onChange={() => forceUpdate()}
						options={options}
						land={land}
						setLand={setLand}
						dairy={dairy}
						setDairy={setDairy}
						acres={acres}
						setAcres={setAcres}
						crops={crops}
						setCrops={setCrops}
						method={method}
						setMethod={setMethod} />
				</Col>
				<Col sm={6}>
					<Container>
						<div>
							<Tabs>
								{options.map(tab => (
									<Tab 
										eventKey={tab}
										title={tab}
										key={tab}
										hidden={method.indexOf(tab) > -1 ? false : true}
										disabled={method.indexOf(tab) > -1 ? false : true}>

										<Calculator
											options={options}
											land={land}
											dairy={dairy}
											acres={acres}
											crops={crops}
											method={tab}/>
									</Tab>
									))}
							</Tabs>
						</div>
					</Container>
				</Col>
			</Row>
		</Container>


)
}
export default FormController;