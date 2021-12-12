// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState, useRef } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Calculator from "./Calculator.jsx"
import CalcShow from "./CalcShow.jsx"


function FormController() {

// Methods to calculate a cost for, this will be passed to:
// The calculator's input for selection
// The calculator's output - one page per method will be rendered
const options = ["Method A", "Method B", "Compounded"];


// Forced update - implemented for adding and removing crops
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
// const sizeRef = React.createRef();
const start = 'start';

// Default values for calculator
let data = {
	unit: "Acres",
	land: 123,
	method: [],
	selected: [],
	crops: [{ type: "Unknown", amount: 0, idx: 0 }],
	length: 20,
	rate: 0.05
};	


let silvoptions = {
	grazingRevenue: [450, "$", "Grazing Revenue"],
	baseGrazingCost: [300, "$", "Base Grazing Cost"],
	treeSpacing: [30, "ft", "Tree Spacing"],
	treePlantingCost: [9.5, "$", "Tree Planting Cost"],
	treesPerAcre: [48, "tr/acre", "Trees Per Acre"],
	treeCost: [2.50, "$/yr", "Tree Maintenance Cost"],
	treeCropYield: [2, "$/unit", "Tree Crop Yield"],
	treeCropPrice: [5, "$/unit", "Tree Crop Price"],
	effectiveProperty: [80, "%", "Effective Property"]
}


// let silvoptions = [
// 	[450, "$", "Grazing Revenue"],
// 	[300, "$", "Base Grazing Cost"],
// 	[30, "ft", "Tree Spacing"],
// 	[9.5, "$", "Tree Planting Cost"],
// 	[48, "tr/acre", "Trees Per Acre"],
// 	[2.50, "$/yr", "Tree Maintenance Cost"],
// 	[2, "units/tree", "Tree Crop Yield"],
// 	[80, "%", "Effective Property"],
// 	[5, "$/unit", "Tree Crop Price"]
// ]



// Discount rate for NPV
const [rate, setRate] = useState(data.rate);

const [land, setLand] = useState(data.land);
const [dairy, setDairy] = useState(data.dairy);
const [crops, setCrops] = useState(data.crops);
const [method, setMethod] = useState(data.method);
const [unit, setUnit] = useState(data.unit);

// Length of project(yrs)
const [length, setLength] = useState(data.length);

const [sp, setSP] = useState(silvoptions);

// const [calcShow, setCalcShow] = useState(false);
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);


// Optional table view
const [tableView, setTableView] = useState(false);

// Interaction for OffCanvas Elements
const [show, setShow] = useState(false);
const toggleShow = () => setShow(d => !d);
const handleClose = () => setShow(false);


return (

	<>

	<Row>
		<Col xs={12} xl={10} className="p-0">


			{/*Calculator Output Table*/}
			<Calculator
				options={options}
				land={(unit === "Acres") ? parseFloat(land) : parseFloat(land) * 2.47105}
				dairy={dairy}
				acres={unit}
				crops={crops}
				length={length}
				rate={rate}
				tableView={tableView}
				sp={sp} />

		</Col>
		<Col xs={12} xl={2} className="ml-0 pl-0 my-5">

			<Button
			className="my-3 mx-auto w-100"
			onClick={toggleShow}
			>Show Calculator</Button>



			<Button 
			className="mx-auto w-100"
			onClick={() => setTableView(!tableView)}>
			View as {tableView ? "Graph": "Table"}</Button>

		</Col>



	</Row>





		{/*Calculator Input UI*/}
		<CalcShow
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
		setMethod={setMethod}
		length={length}
		setLength={setLength}
		sp={sp}
		setSP={setSP}
		
		tableView={tableView} 
		setTableView={setTableView}
		show={show}
		setShow={setShow}
		handleClose={handleClose}
		 />


	</>


)
}
export default FormController;