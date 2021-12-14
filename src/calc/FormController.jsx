// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Calculator from "./Calculator.jsx"
import CalcShow from "./CalcShow.jsx"


function FormController(props) {

// Methods to calculate a cost for, this will be passed to:
// The calculator's input for selection
// The calculator's output - one page per method will be rendered
const options = ["Method A", "Method B", "Compounded"];


// Forced update - implemented for adding and removing crops
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
// const sizeRef = React.createRef();


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
	treesPerAcre: [48, "Tr/Acre", "Trees Per Acre"],
	treeCost: [2.50, "$/yr", "Tree Maintenance Cost"],
	treeCropYield: [2, "$/Unit", "Tree Crop Yield"],
	treeCropPrice: [5, "$/Unit", "Tree Crop Price"],
	effectiveProperty: [80, "%", "Effective Property"]
}


let irroptions = {
	baseCropRevenue: [2500, "$/Acre", "Base Crop Revenue"],
	baseCropCost: [1500, "$/Acre", "Base Crop Cost"],
	sprinklerSpacing: [40, "Ft", "Sprinkler Spacing"],
	sprinklerCount: [27, "Head/Acre", "Sprinkler Count"],
	sprinklerCost: [62.50, "$/Head", "Sprinkler Cost"],
	pipeLength: [1089, "Ft/Ac", "Pipe Length"],
	pipeCost: [2.80, "$/Ft", "Pipe Cost"],
	pumpSize: [10, "HP", "Pump Size"],
	pumpCost: [710, "$/HP", "Pump Cost"],
	maintenanceCost: [100, "$/Acre/Yr", "Maintenance Cost"],
	effectiveProperty: [140, "%", "Productivity With Irrigation"]
}

let tarpoptions = {
	baseCropRevenue: [2500, "$", "Base Crop Revenue"],
	baseCropCost: [1500, "$", "Base Crop Cost"],
	sprinklerSpacing: [40, "ft", "Sprinkler Spacing"],
	sprinklerCount: [9.5, "head/acre", "Sprinkler Count"],
	sprinklerCost: [48, "$/ft", "Sprinkler Cost"],
	pipeLength: [2.50, "$/yr", "Pipe Length"],
	pipeCost: [5, "$/unit", "Pipe Cost"],
	pumpSize: [10, "HP", "Pump Size"],
	pumpCost: [10, "$/HP", "Pump Cost"],
	maintenanceCost: [100, "$/acre/yr", "Maintenance Cost"],
	effectiveProperty: [140, "%", "Productivity With Irrigation"]
}




// Discount rate for NPV
const [rate, setRate] = useState(data.rate);

const [land, setLand] = useState(data.land);

const [crops, setCrops] = useState(data.crops);
const [method, setMethod] = useState(props.variant); // Silvopasture, Irrigation or Tarping?
const [unit, setUnit] = useState(data.unit);

// Length of project(yrs)
const [length, setLength] = useState(data.length);

// Silvopasture specific options
const [opts, setOpts] = useState(silvoptions);


useEffect(() => {

if (method === "silvopasture") {
	setOpts(silvoptions);
} else if(method === "irrigation") {
	setOpts(irroptions);
} else setOpts(tarpoptions);

}, [props.variant]);



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
				acres={unit}
				crops={crops}
				length={length}
				rate={rate}
				tableView={tableView}
				opts={opts} />

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
		unit={unit}
		setUnit={setUnit}
		crops={crops}
		setCrops={setCrops}
		method={method}
		setMethod={setMethod}
		length={length}
		setLength={setLength}

		opts={opts}
		setOpts={setOpts}
		
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