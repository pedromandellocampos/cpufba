import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import UserContext from "../context/UseContext";

export default function SystemInput({ name, type }) {
	const { system, setSystem } = React.useContext(UserContext);

	function handleChange(event) {
		let systemObj = system;

		switch (type) {
			case "quantum":
				systemObj.quantum = event.target.value;
		}
		setSystem(systemObj);
		console.log(system);
	}

	return (
		<Box sx={{ backgroundColor: "white", color: "black" }}>
			<TextField
				id="outlined-basic"
				label={name}
				variant="outlined"
				type="number"
				onChange={handleChange}
			/>
		</Box>
	);
}
