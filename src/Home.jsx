import React from 'react';
import { Container } from 'react-bootstrap';
import Chart from "./viz/Chart.jsx"
import TextAccordion from "./TextAccordion.jsx"

function Home(props) {



	return (

		<>

		<Container className="box my-5">

		<TextAccordion />
			<p>Welcome Home!</p>
			<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel neque eget orci molestie viverra ut quis urna. Donec interdum viverra eros at tempor. Curabitur tellus orci, condimentum in nisi a, sollicitudin pulvinar purus. Vestibulum hendrerit, erat id sodales auctor, augue magna posuere tortor, sit amet tristique elit libero ut tellus. Sed lacinia magna sit amet justo lobortis maximus. Praesent lacinia euismod nulla, non tincidunt velit malesuada quis. Cras tristique viverra ipsum at finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque augue mi, cursus at pharetra at, gravida vel mi. Quisque fringilla felis sit amet lectus porta, non tempor quam congue. Integer molestie leo at orci volutpat, et tincidunt elit ullamcorper. Vivamus tincidunt ligula vitae sem vulputate, a bibendum dui vulputate. Pellentesque lobortis at augue sit amet varius. Nam et urna ac ligula condimentum pretium. Proin pulvinar ac justo eu aliquet.
			</p>
			<p>
Nulla placerat at sapien non fringilla. Sed aliquet vel risus at mollis. Duis iaculis faucibus massa, tincidunt porttitor ipsum laoreet ultrices. Nulla facilisi. Pellentesque quis porttitor enim, eu tempus velit. In tempor mollis sem, aliquet fringilla risus. Praesent rutrum porttitor laoreet. Phasellus varius, nisl at accumsan luctus, massa nunc convallis leo, at interdum est arcu quis massa. Donec ut semper erat.
			</p>
			<p>
Vestibulum molestie risus consectetur dui venenatis lobortis. Curabitur ultrices sed mauris sit amet semper. Proin libero velit, congue et porta a, ultrices sit amet lorem. Integer tincidunt justo ut odio auctor bibendum. Nulla facilisi. Donec efficitur, lacus id porttitor interdum, elit turpis pharetra augue, eget cursus odio mi vitae lectus. Vivamus dictum nisi at interdum ultrices. Morbi vitae efficitur nunc. Nam sodales accumsan arcu a pellentesque. Mauris lobortis consectetur neque, in finibus velit facilisis sed. Morbi ut egestas eros, ut cursus tortor.
			</p>
			<p>
Phasellus ut elit nisi. Nulla tempor, dui id dapibus porta, nisl leo viverra nisi, ac ultricies enim lectus condimentum leo. Etiam non odio non tortor scelerisque sollicitudin eget et ante. Praesent eu nisi pharetra, sagittis diam ac, dapibus dolor. Mauris elementum imperdiet porta. Nunc pulvinar congue nunc eu ornare. Praesent malesuada nibh orci, in scelerisque felis luctus et. Etiam non metus ac est porta pulvinar. Duis porttitor, ex eu efficitur imperdiet, elit tortor interdum libero, id lobortis magna turpis sed libero. Maecenas viverra euismod maximus. Curabitur lacinia est id elit dictum feugiat.
			</p>

		</Container>

		<Container className="box my-5">
			<Chart />
		</Container>
		</>

		)
}

export default Home;
