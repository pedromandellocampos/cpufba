import CloseIcon from "@mui/icons-material/Close";
import styles from "./processCard.module.css";
import * as React from "react";
import UserContext from "../context/UseContext";

export function CloseButton(props) {
	const { processes, setProcesses } = React.useContext(UserContext);

	function handleClose() {
		let newArray = processes;
		let index = newArray.findIndex((objeto) => objeto.id === props.id);
		newArray.splice(index, 1);
		setProcesses([...newArray]);
	}

	return (
		<div onClick={handleClose}>
			<CloseIcon className={styles.closeButton} />
		</div>
	);
}
