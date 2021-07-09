// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import CalcForm from "./Form.jsx"
import Calculator from "./Calculator.js"



function FormController() {

const [form, setForm] = useState([]);

formProps = {
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
					<CalcForm />
				</Col>
				<Col>

				</Col>
			</Row>
		</Container>


)
}
export default FormController;