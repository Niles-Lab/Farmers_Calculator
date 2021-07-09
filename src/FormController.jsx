// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CalcForm from "./CalcForm.jsx"
import Calculator from "./Calculator.js"


function FormController() {

const [form, setForm] = useState([]);

let formProps = {
	isSubmitted: false,
	acres: 12.345,
	land: 23.456,
	dairy: false,
	method: [],
	selected: [],
	crops: [{type: "Unknown", amount: 0, idx: 0}]
};	


return (

		<Container>
			<Row>
				<Col>
					<CalcForm props={formProps} />
				</Col>
				<Col>
{/*					<Container hidden={this.state.isSubmitted ? '' : 'hidden'}>
						<div>
							<Tabs id="method-tabs">
								{this.state.method.map(tab => (
									<Tab eventKey={tab} title={tab}>
										<Calculator method={tab} vals={formProps} />
									</Tab>
									))}
								<div ref={this.calcRef}></div>
							</Tabs>
						</div>
					</Container>*/}
				</Col>
			</Row>
		</Container>


)
}
export default FormController;