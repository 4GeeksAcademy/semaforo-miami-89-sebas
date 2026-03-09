import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [Colors, setColors] = useState("");

	return (
		<div className="principal-container bg-dark mx-auto p-2">
			<div onClick={() => setColors("red")} className={"circulo mx-auto bg-danger " + (Colors === "red" ? "first-circle" : "")} ></div>
			<div onClick={() => setColors("yellow")} className={"circulo mt-1 mx-auto bg-warning " + (Colors === "yellow" ? "second-circle" : "")}></div>
			<div onClick={() => setColors("green")} className={"circulo mt-1 mx-auto bg-success " + (Colors === "green" ? "third-circle" : "")}></div>
		</div>
	);
};

export default Home;