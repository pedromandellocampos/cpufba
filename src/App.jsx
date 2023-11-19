import { useState, useEffect } from "react";
import "./App.css";
import { CreateProcessButton } from "./components/CreateButton";
import ProcessCard from "./components/ProcessCard";
import styles from "./global.module.css";
import UserContext from "./context/UseContext";

function App() {
	const [count, setCount] = useState(0);
	const [system, setSystem] = useState({ quantum: null });
	const [processes, setProcesses] = useState([]);

	useEffect(() => {
		console.log(" entrou:  ");
		console.log(processes);
	}, [processes]);

	return (
		<UserContext.Provider
			value={{
				count,
				setCount,
				system,
				setSystem,
				processes,
				setProcesses,
			}}
		>
			<div className={styles.pageContainer}>
				<CreateProcessButton />
				<div className={styles.processContainer2}>
					{processes.map((process) => {
						return <ProcessCard key={process.id} id={process.id} />;
					})}
				</div>
			</div>
		</UserContext.Provider>
	);
}

export default App;
