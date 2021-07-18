// This is a smart component to control Calculator and CalcForm's state - supplying CalcForm's options and passing its I/O to Calculator
import React from 'react';
import { ButtonGroup, Form, Dropdown } from 'react-bootstrap';



function DDSelect(props) {


let method = [];

//const [method, setMethod] = useState(data.method);


function adjustMethods(target) {
	
	method.indexOf(target.value) > -1 ?
		method = method.filter((d) => target.value !== d) :
		method.push(target.value);

}

return (

	<Dropdown 
		as={ButtonGroup}

	>
		<Dropdown.Toggle
		drop={'end'}
		id={`dropdown-button-drop-end`}>
			Select
		</Dropdown.Toggle>
			<Dropdown.Menu style={{position: "fixed", overflow: 'visible'}}>

			<Dropdown.Divider />
			<Dropdown.Divider />

				{Object.entries(props.options).map(opts => ( // Map state options to multi-select
					<span key={opts[0]}>
						<Dropdown.ItemText>
							<b>{opts[0]}</b>
						</Dropdown.ItemText>
							{opts[1].map(d => ( // Map each category's options

								<Form.Check
								value={d}
								key={d} 
								name="costs"
								type="checkbox"
								label={d}
								onChange=
								{(event) => {adjustMethods(event.target)}}
	
									/>

								))}
						<Dropdown.Divider />
						<Dropdown.Divider />
					</span>
				))}
			</Dropdown.Menu>
	</Dropdown>


)
}
export default DDSelect;