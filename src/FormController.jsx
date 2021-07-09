// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState } from 'react';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import CalcForm from "./CalcForm.jsx"
import Calculator from "./Calculator.jsx"


function FormController() {

const options = ["Method A", "Method B", "Method C", "Method D"];
const [form, setForm] = useState([]);


// Forced update - implemented for adding and removing crops
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);

let data = {
	isSubmitted: false,
	acres: 12.3,
	land: 23.4,
	dairy: false,
	method: [],
	selected: [],
	crops: [{type: "Unknown", amount: 1, idx: 0}]
};	

const [land, setLand] = useState(data.land);
const [dairy, setDairy] = useState(data.dairy);
const [acres, setAcres] = useState(data.acres);
const [crops, setCrops] = useState(data.crops);
const [method, setMethod] = useState(data.method);

return (

		<Container>
			<Row>
				<Col>
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
				<Col>
					<Container>
						<div>
							<Tabs id="method-tabs">
								{options.map(tab => (
									<Tab eventKey={tab} title={tab}>
										<Calculator method={tab}
											options={options}
											land={land}
											dairy={dairy}
											acres={acres}
											crops={crops}
											method={method}/>
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