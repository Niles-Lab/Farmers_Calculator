// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState } from 'react';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import CalcForm from "./calc/CalcForm.jsx"
import Calculator from "./calc/Calculator.jsx"


function FormController() {

// Methods to calculate a cost for, this will be passed to:
// The calculator's input for selection
// The calculator's output - one page per method will be rendered
const options = ["Method A", "Method B"];


// Forced update - implemented for adding and removing crops
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);



let data = {
	unit: "Acres",
	land: 120,
	method: [],
	selected: [],
	crops: []
};	

const [land, setLand] = useState(data.land);
const [dairy, setDairy] = useState(data.dairy);
const [crops, setCrops] = useState(data.crops);
const [method, setMethod] = useState(data.method);
const [unit, setUnit] = useState(data.unit);

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
						unit={unit}
						setUnit={setUnit}
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
										// hidden={method.indexOf(tab) > -1 ? false : true}
										disabled={method.indexOf(tab) > -1 ? false : true}>

										<Calculator
											options={options}
											land={(unit === "Acres") ? parseFloat(land) : parseFloat(land) * 2.47105}
											dairy={dairy}
											acres={unit}
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