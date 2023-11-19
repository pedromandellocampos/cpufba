import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import UserContext from "../context/UseContext";

export default function ProcessInput({ name, id, type }) {
	const { processes, setProcesses } = React.useContext(UserContext);

	function handleChange(e) {
		let newArray = processes;
		let index = newArray.findIndex((objeto) => objeto.id === id);

		switch (type) {
			case "duration":
				newArray[index].duration = e.target.value;
		}
		setProcesses(newArray);
	}

	return (
		<Box>
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
