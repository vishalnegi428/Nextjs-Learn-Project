import { Fragment } from "react";

import classes from "./meetupDetails.module.css";

export default function meetupDetails(props) {
	return (
		<section className={classes.detail}>
			<img src={props.img} alt={props.title}></img>
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
	);
}
