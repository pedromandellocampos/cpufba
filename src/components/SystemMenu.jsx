import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import UserContext from "../context/UseContext";
import * as React from "react";

export default function SystemMenu() {
	const { system, setSystem } = React.useContext(UserContext);

	function handleChange(event) {
		let systemObj = system;
		systemObj.escalonamento = event.target.value;
		setSystem(systemObj);
	}

	return (
		<div>
			<FormControl
				sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
				size="small"
			>
				<InputLabel id="demo-select-small-label">
					Escalonamento
				</InputLabel>
				{system !== undefined && system !== null && (
					<Select label="Escalonamento" onChange={handleChange}>
						<MenuItem value={"FIFO"}>FIFO</MenuItem>
						<MenuItem value={"EDF"}>EDF</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				)}
			</FormControl>
		</div>
	);
}
