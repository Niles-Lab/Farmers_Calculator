// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Alert, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Calculator from "./Calculator.jsx"
import CalcShow from "./CalcShow.jsx"
import ExternalLink from '../other/ExternalLink.jsx';
import { BsArrowDown } from "react-icons/bs";

// Small custom component for expressing division with an hr element
function MathHR() {
	return (
		<hr className='w-75 my-0' style={{"backgroundColor": "white"}}/>
	)
}

function FormController(props) {

//
// Default generalized values for calculator
// 
let data = {
	unit: "Acres",
	land: 10,
	method: [],
	selected: [],
	crops: [{ type: "Unknown", amount: 0, idx: 0 }],
	length: 20,
	rate: 0.05
};	

// Possible units for user to set
const units = ["Acres", "Hectares"];

const [unit, setUnit] = useState(data.unit);


/**
 * 
 *  'Using This Tool' sections
 *  This should be an array of strings, that will subsequently be mapped to bullet points
 * 
 * 
 */
const usingSp = ["To begin, select “Open Input Options”.", 
"Use the default options for each metric, or enter information specific to your operation, such as your farm size, the project length, your costs and revenue for the base pasture, tree planting costs, trees per acre, and anticipated tree crop yield.",
"After inputting your details, view the graph. The blue line shows the revenue you may earn each year, the red line depicts the annual costs, and the blue line (revenue) minus the red line (costs) gives the green line, or the annual profits you may expect.",
"Using the default options, you can see on the graph that the up-front costs appear in the first 2-3 years and that it will take about 11 years to pay back this initial investment (where the cumulative revenue, or yellow line, moves from negative to positive at the 'Estimated Time to Break Even' line)."];

const usingIg = [
	"To begin, select “Open Input Options”. Then select ”Sprinkler Irrigation” or ”Drip Irrigation” depending on what you intend to calculate costs for.",
	"Use the default options for each metric, or enter information specific to your operation, such as the project length, your farm size, your costs and revenue for the base crop, sprinkler cost, pump size, diesel fuel cost, and anticipated productivity with irrigation.",
	"After inputting your details, view the graph. The blue line shows the revenue you may earn each year, the red line depicts the annual costs, and the blue line (revenue) minus the red line (costs) gives the green line, or the annual profits you may expect.",
	"Using the default options, you can see on the graph that the up-front costs appear in the first 2-3 years and that it will take about 9 years to pay back this initial investment (where the cumulative revenue, or yellow line, moves from negative to positive at the 'Estimated Time to Break Even' line)."
]

const usingTp = [
	"To begin, select “Open Input Options” and then “More Tarping Options.” ",
	"Use the default options for each metric, or enter information specific to your operation, such as your farm size, the project length, your costs and revenue for the base crop, the hourly rate for labor, and anticipated maintenance costs.",
	"After inputting your details, view the graph.  The blue line shows the revenue you may earn each year, the red line depicts the annual costs, and the blue line (revenue) minus the red line (costs) gives the green line, or the annual profits you may expect.",
	"Using the default options for tarping, you can see the up-front costs appear every 5 years and that it will take 2-3 years to pay back this initial investment (where the cumulative revenue, or yellow line, moves from negative to positive at the 'Estimated Time to Break Even' line)."
]

/* Specific options for methods - these should be in the format of:
* value: [default: integer, 
* 			unit: string,
* 			display name: string,
* 			(optional) tooltip description: string,
* 			(optional) tooltip link: string(preferably url)]
* e.g.
* costPerUnit: [5, "$/Unit", "Cost Per Unit", "This is the cost per unit of x", "www.costperunit.com" (not a real website)]
* For disabled / calculated values, please put Disabled anywhere in the string name of this value
*/
const silvoCropOptions = {
	maturingYears:
	[10, "yrs", "Maturing Years", "How long will these trees take to mature?"],
	baseCropRevenue: 
	[450, "$", "Base Pasture Revenue", "Assumes area is 100% Pasture"],
	baseCropCost: 
	[300, "$/Acre", "Base Grazing Cost", "Assumes area is 100% Pasture"],
	netRevenueDisabled:
	[150, "$/Acre", "Base Pasture Net Revenue", "Calculated: Base Pasture Revenue - Base Pasture Cost"],
	treeSpacing: 
	[30, "Ft", "Tree Spacing", "Economic Budgeting for Agroforestry Practices(University of Missouri)", "https://extension.missouri.edu/publications/af1006"],
	treesPlantedDisabled:
	[48, "Trees/Acre", "Trees Planted", <span>Calculated<br/> (Ft. per [Acres/Hectares]) <MathHR/> (Tree Spacing<sup>2</sup>)</span>],
	// 2.24.22 Changed treePlantingCost of $9.5 to $4.75/ea for seedling / labor costs
	treeSeedlingCost: 
	[5.00, "$/Tree", "Tree Planting Seedling Cost", "Coder, Kim D. 2017. Number of trees per acre by spacing distance. Warnell School of Forestry & Natural Resources, University of Georgia, Outreach Publication WSFNR-17-WMJ. Pp.7.",
	"https://bugwoodcloud.org/bugwood/productivity/pdfs/Jx_WOODLAND_MANAGEMENT_Trees_per_Acre_Spacing_Dist_CODER_2017.pdf"],
	treeLaborCost:
	[4.50, "$/Tree", "Tree Planting Labor Cost", "Coder, Kim D. 2017. Number of trees per acre by spacing distance. Warnell School of Forestry & Natural Resources, University of Georgia, Outreach Publication WSFNR-17-WMJ. Pp.7.",
	"https://bugwoodcloud.org/bugwood/productivity/pdfs/Jx_WOODLAND_MANAGEMENT_Trees_per_Acre_Spacing_Dist_CODER_2017.pdf"],
	treePlantingCostDisabled:
	[9.50, "$/Tree", "Tree Planting Cost", "Calculated: Seedling Cost + Labor Cost"],
	// treesPerAcre: 
	// [48, "Tr/Acre", "Trees Per Acre"],
	treeCost: 
	[2.50, "$/yr", "Tree Maintenance Cost"],
	treeCropYield: 
	[2, "$/Unit", "Tree Crop Yield"],
	treeCropPrice: 
	[5.00, "$/Unit", "Tree Crop Price"],
	fencingLength:
	[500, "Ft./Acre", "Fencing Length"],
	fencingCost:
	[0.20, "$/Ft.", "Fencing Cost"],
	pastureAreaDisabled:
	[97, "%", "Pasture Area With Silvopasture", <span>Calculated - Assuming 3 Ft. Radius Around Cannot be Grazed<br/> ((Ft. per [Acres/Hectares])-(Trees Planted*π*3<sup>2</sup>)) <MathHR/> (Ft. per [Acres/Hectares])</span>],
	effectiveProperty: 
	[110, "%", "Animal Health & Productivity", <span>Crop productivity (yield) relative to the case where the practice is not implemented. For example, a productivity increase of 50% above the base practice would be recorded at 150% <br/><br/> <em>Mean productivity based on Pent (2020)</em></span>, "https://link.springer.com/article/10.1007/s10457-020-00494-6"]
}

const silvoTimberOptions = {
	maturingYears:
	[40, "yrs", "Timber Stand Harvest Year", "How long will these trees take to mature?"],
	baseCropRevenue: 
	[450, "$", "Base Pasture Revenue", "Assumes area is 100% Pasture"],
	baseCropCost: 
	[300, "$/Acre", "Base Grazing Cost", "Assumes area is 100% Pasture"],
	netRevenueDisabled:
	[150, "$/Acre", "Base Pasture Net Revenue", "Calculated: Base Pasture Revenue - Base Pasture Cost"],
	areaPlantedTrees:
	[40, "%", "Pasture Area Planted in Trees"],
	treeDensity:
	[500, "Trees/Acre", "Tree Planting Density"],
	treeSeedlingCost: 
	[1.50, "$/Tree", "Tree Planting Seedling Cost", "Coder, Kim D. 2017. Number of trees per acre by spacing distance. Warnell School of Forestry & Natural Resources, University of Georgia, Outreach Publication WSFNR-17-WMJ. Pp.7.",
	"https://bugwoodcloud.org/bugwood/productivity/pdfs/Jx_WOODLAND_MANAGEMENT_Trees_per_Acre_Spacing_Dist_CODER_2017.pdf"],
	treeLaborCost:
	[0.50, "$/Tree", "Tree Planting Labor Cost", "Coder, Kim D. 2017. Number of trees per acre by spacing distance. Warnell School of Forestry & Natural Resources, University of Georgia, Outreach Publication WSFNR-17-WMJ. Pp.7.",
	"https://bugwoodcloud.org/bugwood/productivity/pdfs/Jx_WOODLAND_MANAGEMENT_Trees_per_Acre_Spacing_Dist_CODER_2017.pdf"],
	treeCost: 
	[0.20, "$/Tree", "Tree Maintenance Cost"],
	treeCropYield: 
	[18, "Cords/Acre", "Timber Yield at Maturity"],
	timberPrice: 
	[100, "$/Cord", "Timber Price"],
	fencingLength:
	[500, "Ft./Acre", "Fencing Length"],
	fencingCost:
	[0.20, "$/Ft.", "Fencing Cost"],
	pastureAreaDisabled:
	[60, "%", "Pasture Area With Silvopasture", <span>Calculated - 1 - (Percent of Area Planted in Trees)</span>],
	effectiveProperty: 
	[110, "%", "Animal Health & Productivity", <span>Crop productivity (yield) relative to the case where the practice is not implemented. For example, a productivity increase of 50% above the base practice would be recorded at 150% <br/><br/> <em>Mean productivity based on Pent (2020)</em></span>, "https://link.springer.com/article/10.1007/s10457-020-00494-6"]
}


// Spray Irrigation Options
const irroptions = {
	baseCropRevenue: 
	[2500, "$/Acre", "Base Crop Revenue", "Assumes area is 100% Vegetables"],
	sprinklerSpacing: 
	[40, "Ft.", "Sprinkler Spacing", "Based on NRCS Practice 442, Scenario #6: Solid Set Sprinkler System", "https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download?cid=NRCSEPRD1854519&ext=pdf"],
	//sprinklerCount: [27, "Head/Acre", "Sprinkler Count"],
	sprinklerCountDisabled:
	[27, "Head/Acre", "Sprinkler Count", <span>Calculated<br/>(Ft. per [Acres/Hectares]) <MathHR/> (Sprinkler Spacing)<sup>2</sup></span>],
	sprinklerCost: 
	[62.50, "$/Head", "Sprinkler Cost"],
	pipeLengthDisabled:
	[1089, "Ft./Acre", "Pipe Length", <span>Calculated<br/>(Ft. per [Acres/Hectares]) <MathHR/> (Sprinkler Spacing)</span>],
	pipeCost: 
	[2.80, "$/Ft.", "Pipe Cost", "Based on NRCS Practice 430, Scenario #7: 2\" Surface HDPE Irrigation Pipeline", "https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download?cid=NRCSEPRD1854519&ext=pdf"],
	pumpSize: 
	[10, "HP", "Pump Size"],
	pumpCost: 
	[710, "$/HP", "Pump Cost", "Diesel Fuel Cost", "NRCS Practice 533, Scenario $5: Electric-powered pump 10-40HP", "https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download?cid=NRCSEPRD1854519&ext=pdf"],
	dailyPumpUse : 
	[8, "Hr/Day", "Daily Pump Use"],
	hourlyPump: 
	[90, "Days/Yr", "Hourly Pump"],
	dieselCost: 
	[3.40, "$/Gal", "Diesel Fuel Cost", "EIA Fuel Prices", "https://www.eia.gov/petroleum/gasdiesel/"],
	annualDieselCostDisabled:
	[1707, "$/Yr.", "Annual Diesel Cost", <span>Calculated<br/>Efficiency Based on OKSU Irrigation Cost Calculator<br/>((<em><b>1.15</b></em> * Diesel Cost) &divide; <em><b>16.49</b></em>) * Hourly Pump * Pump Size * Daily Pump Use</span>, "https://extension.okstate.edu/fact-sheets/comparative-energy-costs-for-irrigation-pumping.html"],
	maintenanceCost: 
	[100, "$/Acre/Yr.", "Maintenance Cost", "This is an umbrella term miscellaneous annual costs not explicitly included in the calculator"],
	cropLoss:
	[10, "%", "Annual Crop Loss Without Irrigation"],
	effectiveProperty: 
	[225, "%", "Productivity With Irrigation"]
}

// Drip Irrigation Variant
const dripIrroptions = {
	baseCropRevenue: 
	[2500, "$/Acre", "Base Crop Revenue", "Assumes area is 100% Vegetables"],

	cropRowSpacing:
	[8, "Ft.", "Irrigated Crop Row Spacing"],
	fittingSpacing:
	[2, "Ft.", "Irrigation Drip Fitting Spacing"],
	tapeLengthDisabled:
	[5445, "Ft./Acre", "Drip Tape Length", <span>Calculated<br/>(Ft. per [Acres/Hectares]) <MathHR/> (Crop Row Spacing)</span>],
	fittingCountDisabled:
	[2723, "Fitting/Acre", "Fitting Count", <span>Calculated<br/>(Tape Length) <MathHR/> (Fitting Spacing)</span>],
	tapeCost:
	[0.20, "$/Ft.", "Irrigation Drip Tape Cost"],
	fittingCost:
	[1.00, "$", "Irrigation Drip Fitting Cost"],
	pumpSize: 
	[10, "HP", "Pump Size"],
	pumpCost: 
	[710, "$/HP", "Pump Cost", "Diesel Fuel Cost", "NRCS Practice 533, Scenario $5: Electric-powered pump 10-40HP", "https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download?cid=NRCSEPRD1854519&ext=pdf"],
	dailyPumpUse : 
	[8, "Hr/Day", "Daily Pump Use"],
	hourlyPump: 
	[90, "Days/Yr", "Hourly Pump"],
	dieselCost: 
	[3.40, "$/Gal", "Diesel Fuel Cost", "EIA Fuel Prices", "https://www.eia.gov/petroleum/gasdiesel/"],
	annualDieselCostDisabled:
	[1707, "$/Yr.", "Annual Diesel Cost", <span>Calculated<br/>Efficiency Based on OKSU Irrigation Cost Calculator<br/>((<em><b>1.15</b></em> * Diesel Cost) &divide; <em><b>16.49</b></em>) * Hourly Pump * Pump Size * Daily Pump Use</span>, "https://extension.okstate.edu/fact-sheets/comparative-energy-costs-for-irrigation-pumping.html"],
	maintenanceCost: 
	[100, "$/Acre/Yr", "Maintenance Cost", "This is an umbrella term miscellaneous annual costs not explicitly included in the calculator"],
	cropLoss:
	[10, "%", "Annual Crop Loss Without Irrigation"],
	effectiveProperty: 
	[225, "%", "Productivity With Irrigation"]
}


const tarpoptions = {
	baseCropRevenue: 
	[2500, "$", "Base Crop Revenue", "Assumes area is 100% Vegetables"],
	tarpAreaUsr:
	[50, "%", "Tarp Area as % of Total Crop Area"],
	tarpAreaDisabled: 
	[0, "Sq. Ft/Acre", "Tarp Area", <span>Calculated<br/>(Ft. per [Acres/Hectares]) * (Tarp Area %)</span>],
	// bedSpacing: 
	// [8, "Ft", "Bed Spacing", "Space Between Centerline of Crop Rows"],
	costPerFt:
	[0.07, "$/Sq. Ft.", "Cost Per Square Foot of Tarp"],
	tarpCostDisabled: 
	[0.0875, "$/Sq. Ft", "Tarp Cost", <span>Calculated - Based on UW Madison Extension Study<br/>(Cost Per Ft.) <MathHR/> (Bed Spacing)</span>, "https://fyi.extension.wisc.edu/danecountyag/files/2019/07/Tarps-to-Terminate-Cover-Crops-Before-No-Till-Organic-Vegetables-RFS.pdf"],
	tarpLabor: 
	[4, "Hr/Acre", "Tarp Labor"],
	tarpLaborCost: 
	[20.00, "$/Hr", "Tarp Labor Cost"],
	totalLaborDisabled:
	[80, "$/Acre", "Total Labor Cost",  <span>Calculated<br/>(Tarp Labor) * (Tarp Labor Cost)</span>],
	tarpSecuringCost:
	[25.00, "$/Acre", "Tarp Securing Cost", "Includes cost to secure tarp such as sandbags, cinderblocks, burying edges, etc."],
	tarpDurability:
	[5, "Years", "Tarp Durability"],
	coverCropCost: 
	[150, "$/Ac", "Cover Crop Cost", "Based on NRCS Practice 340, Scenario #57: Cover Crop, 1 ac or less (includes materials + labor)", "https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download?cid=NRCSEPRD1854519&ext=pdf"], // Effective every OTHER year, starting with 0
	maintenanceCost: 
	[50, "$/Acre/Yr", "Maintenance Cost", "This is an umbrella term miscellaneous annual costs not explicitly included in the calculator"],
	effectiveProperty: 
	[120, "%", "Productivity With Tarp & Cover Crop"]
}

//, "Efficiency Based On OKSU Irrigation Cost Calculator", "https://extension.okstate.edu/fact-sheets/comparative-energy-costs-for-irrigation-pumping.html"

// Initial state for 'using this tool'
const [toolDesc, setToolDesc] = useState(() => {

	return updateToolDesc();

})

// Discount rate for NPV
const [rate, setRate] = useState(data.rate);

const [land, setLand] = useState(data.land);

const [crops, setCrops] = useState(data.crops);



// Length of project(yrs)
const [length, setLength] = useState(data.length);

// Select Drip / Spray Irrigation
const [irrTech, setIrrTech] = useState("Sprinkler Irrigation");
const [subVariant, setSubvariant] = useState("Crop Silvopasture");

// Set initial state of options
const [opts, setOpts] = useState(() => {
	if (props.variant === "silvopasture") {
		if(subVariant === "Crop Silvopasture") {
			return silvoCropOptions;
		} else {
			return silvoTimberOptions;
		}
		
	} else if(props.variant === "irrigation") {
		if(irrTech === "Sprinkler Irrigation") {
			return irroptions;
		} else return dripIrroptions;
		
	} else return tarpoptions;
});

// Set options back to default
function setDefault() {

	// Reset tooltip state
	setShowTT(true);

	// Reset user input values
	setRate(data.rate);
	setLand(data.land);
	setCrops(data.crops);
	setUnit(data.unit);
	setLength(data.length);

	if (props.variant === "silvopasture") {

		if(subVariant === "Crop Silvopasture") {
			setOpts(silvoCropOptions);
		} else {
			setLength(50);
			setOpts(silvoTimberOptions);
		}

		
	} else if(props.variant === "irrigation") {
		if(irrTech === "Sprinkler Irrigation") {
			setOpts(irroptions);
		} else setOpts(dripIrroptions);
		setLand(4);
		setUnit("Acres");
	} else {
		setOpts(tarpoptions);
		setLand(1);
		setUnit("Acres");
	}

	
}

function updateToolDesc() {


	if (props.variant === "silvopasture") {
		return usingSp;
	} else if(props.variant === "tarping") {
		return usingTp;
	} else return usingIg;

}

/*
*
* Optional extra modifications per method
* e.g. Default land for tarping should be 1 acre
*
*/
useEffect(() => {

	setDefault();
	setToolDesc(updateToolDesc());

}, [props.variant]);


useEffect(() => {


	if (props.variant === "silvopasture") {
		if(subVariant === "Crop Silvopasture") {
			setLength(20);
			setOpts(silvoCropOptions);
		} else {
			setLength(50);
			setOpts(silvoTimberOptions);
		}
	} else if(props.variant === "irrigation") {
		if(irrTech === "Sprinkler Irrigation") {
			setOpts(irroptions);
		} else setOpts(dripIrroptions);
		setLand(4);
	} else {
		setOpts(tarpoptions);
		setLand(1);
	}

}, [subVariant, irrTech]);

// Optional table view
const [tableView, setTableView] = useState(false);

// Interaction for OffCanvas Elements
const [show, setShow] = useState(false);
const toggleShow = () => setShow(d => !d);
const handleClose = () => setShow(false);

// "Start Here" tooltip for opening calculator options
const [showTT, setShowTT] = useState(true);
const handleCloseTT = () => setShowTT(false);

return (

	<Card.Body className="border">

	<Row>
		<Col xs={12} xl={12} className="p-0">


			{/*Calculator Output Table*/}
			<Calculator
				key={props.variant}
				unit={unit}
				land={(unit === "Acres") ? parseFloat(land) : parseFloat(land) * 2.47105}
				acres={unit}
				method={props.variant}
				crops={crops}
				length={length}
				rate={rate}
				tableView={tableView}
				opts={opts} 
				irrTech={irrTech}
				subVariant={subVariant}

				// This should ONLY be passed down to set calculated values
				setOpts={setOpts}
				/>

		</Col>
		<Col xs={12} xl={12} className="pr-0 my-5">
		<Row>
			<Col xs={4}>
				<OverlayTrigger
				key={"starttrigger"}
				onToggle={handleCloseTT}
				defaultShow={true}
				show={showTT}
				target={"#ttBtn"}
				placement={"top"}
				overlay={<Tooltip className='mx-1' id={"sttooltip"}><Row className='my-1 ml-1 px-0 d-flex align-items-center'><BsArrowDown className='mx-1' /> Start Here</Row></Tooltip>}>
				<Button className='w-100 ttBtn' onClick={toggleShow}>Open Input Options</Button>
				</OverlayTrigger>	
			</Col>
			<Col xs={4}>
				<Button 
				className="mx-auto w-100"
				onClick={() => setTableView(!tableView)}>
				View as {tableView ? "Graph": "Table"}</Button>	
			</Col>

			<Col xs={4}>
				<Button
				className="mx-auto w-100"
				onClick={() => setDefault()}
				>Reset Options</Button>
			</Col>
			</Row>
		</Col>

	</Row>




	<hr className='mt-5'/>
	<Card.Title>Using this tool</Card.Title>
	<hr/>

	<Row>
		<Col md={{ span: 10, offset: 1 }}>

		{toolDesc.map((d,idx) => (

			<p key={"toolDesc#"+idx}><li>{d}</li></p>

		))}
		</Col>

	</Row>
	<ExternalLink center download={"/resources/AFRI_Economics_Calcs_v1.31.xlsx"} label={<b>Download this tool as a worksheet</b>} />
	<Row>

	<Alert variant="info">
		<p>
		Our team developed this economic tool to assist farmers and their advisors in understanding what 
		the general costs, revenues and profits may be for a farm that implements different climate 
		adaptation practices.  A farmer or advisor can input farm-specific data using the estimator 
		to generate a general understanding of many of the economic costs associated with implementation 
		of a practice.  Data for the various costs associated with a practice are detailed in a specific 
		practice, as well as the costs considered.  This tool should be considered a guide towards better
		 understanding the range of costs for implementation across these practices, and should be used
		  in conjunction with our other tools and technical advisors to better understand the specific 
		  opportunities and challenges for implementation on any given farm.
		</p>
	</Alert>

	</Row>


		{/*Calculator Input UI*/}
		<CalcShow
		//onChange={() => forceUpdate()}
		land={land}
		setLand={setLand}
		
		units={units}
		unit={unit}
		setUnit={setUnit}
		crops={crops}
		setCrops={setCrops}

		method={props.variant}

		length={length}
		setLength={setLength}

		rate={rate}
		setRate={setRate}

		opts={opts}
		setOpts={setOpts}
		
		tableView={tableView} 
		setTableView={setTableView}
		show={show}
		setShow={setShow}
		handleClose={handleClose}

		subVariant={subVariant}
		setSubvariant={setSubvariant}

		irrTech={irrTech}
		setIrrTech={setIrrTech}

		 />

	</Card.Body>


)
}
export default FormController;