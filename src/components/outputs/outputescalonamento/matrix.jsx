import { useState } from "react";
import UserContext from "./context/UseContext";

export default function Matrix(props) {
	const { system, processes, setProcesses } = React.useContext(UserContext);
	return <div>{ system.escalonamento == 'fifo' ?  }</div>;
}
