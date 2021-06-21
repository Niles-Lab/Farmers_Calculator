class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			acres: 5;
			dairy: false;
			name: "Nedrick";
		}	
	};

	this.handleInputChange = this.handleInputChange.bind(this);

}

this.setState({
	[name]: value;
})

this.handleInputChange(event) {
	const target = event.target;
	const value = target.type
	const name = target.name;
}

render() {
	return (
		<form>
			<label>
				Acres:
				<input
					name="acres"
					type="number"
					value={this.state.acres}
					onChange={this.handleInputChange} />


		)
}
ReactDOM.render(
	<Reservation />,
	document.getElementById('root')
	);

export default Form;