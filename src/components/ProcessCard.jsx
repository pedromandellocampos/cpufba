import * as React from "react";
import Box from "@mui/material/Box";
import ProcessInput from "./ProcessInput";
import styles from "./processCard.module.css";
import { CloseButton } from "./CloseButton";

export default function ProcessCard(props) {
	return (
		<div className={styles.processContainer}>
			<div className={styles.Title}>
				<span>
					{"Processo " + props.id}
					<CloseButton id={props.id} />
				</span>
			</div>

			<div className={styles.box}>
				<ProcessInput
					name={"Duração"}
					id={props.id}
					type={"duration"}
				/>

				<ProcessInput
					name={"Deadline"}
					id={props.id}
					type={"deadline"}
				/>
			</div>
			<div className={styles.box}>
				<ProcessInput
					name={"Prioridade"}
					id={props.id}
					type={"priority"}
				/>
				<ProcessInput
					name={"Páginas"}
					id={props.id}
					type={"pagesNumber"}
				/>
				<ProcessInput
					name={"Chegada"}
					id={props.id}
					type={"arrivalTime"}
				/>
			</div>
		</div>
	);
}
