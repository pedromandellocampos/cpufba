import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export default function ProcessInput({ name }) {
	return (
		<Box>
			<TextField
				id="outlined-basic"
				label={name}
				variant="outlined"
				type="number"
			/>  
		</Box>
	);
} 