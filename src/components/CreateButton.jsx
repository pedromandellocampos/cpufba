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
			{
				id: count,
				duration: 0,
				priority: 0,
				arrivalTime: 0,
				pagesNumber: 0,
			},
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
