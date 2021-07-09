// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import CalcForm from "./Form.js"
import Calculator from "./Calculator.js"


const opts = ["", "WP", "WOP"]


function FormController() {

const [form, setForm] = useState([]);

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

