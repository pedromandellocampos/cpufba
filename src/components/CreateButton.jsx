import { Button } from "@mui/material";
import { useContext } from "react";
import UserContext from "../context/UseContext";

export function CreateProcessButton() {
	const { count, setCount, processes, setProcesses } =
		useContext(UserContext);

	function handleCreateProcess() {
		console.log("teste");
		setCount(count + 1);

		setProcesses([
			...processes,
			{ id: count, duration: 0, value2: 0, valor3: 0, valor4: 0 },
		]);
	}

	return (
		<Button
			onClick={() => {
				handleCreateProcess();
			}}
			variant="contained"
		>
			Criar Processo
		</Button>
	);
}
