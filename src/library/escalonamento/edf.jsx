function edfSimulationWithArrivalTime(processes) {
	// Ordenar processos por deadline (prioridade) e arrivalTime
	processes.sort(
		(a, b) => a.priority - b.priority || a.arrivalTime - b.arrivalTime
	);

	// Determinar o tempo total de execução
	const totalTime = Math.max(
		...processes.map((p) => p.arrivalTime + p.duration)
	);

	// Inicializar a matriz com 'NA'
	const matrix = processes.map((process) => Array(totalTime).fill("NA"));

	let currentTime = 0;
	while (currentTime < totalTime) {
		// Escolher o processo com a deadline mais próxima (maior prioridade) que já chegou
		let currentProcessIndex = processes.findIndex(
			(p) => p.arrivalTime <= currentTime && p.duration > 0
		);
		if (currentProcessIndex !== -1) {
			let currentProcess = processes[currentProcessIndex];

			// Preencher 'Aguardando' até o arrivalTime e 'Executando' durante a execução
			for (
				let t = currentProcess.arrivalTime;
				t < currentTime + currentProcess.duration;
				t++
			) {
				if (t < totalTime) {
					matrix[currentProcessIndex][t] =
						t < currentTime ? "Aguardando" : "Executando";
				}
			}

			// Atualizar o tempo de execução restante do processo e o currentTime
			currentProcess.duration = 0;
			currentTime += currentProcess.duration;
		} else {
			currentTime++;
		}

		// Atualizar o estado dos outros processos
		processes.forEach((p, idx) => {
			if (
				idx !== currentProcessIndex &&
				currentTime < matrix[idx].length &&
				matrix[idx][currentTime] !== "NA"
			) {
				matrix[idx][currentTime] =
					p.duration === 0 ? "Concluído" : "Aguardando";
			}
		});
	}

	return matrix;
}

/* Exemplo de uso
let processes = [
	{ id: 1, duration: 3, priority: 1, arrivalTime: 1, pagesNumber: 0 },
	{ id: 2, duration: 2, priority: 2, arrivalTime: 3, pagesNumber: 0 },
	{ id: 3, duration: 4, priority: 1, arrivalTime: 2, pagesNumber: 0 },
];

console.log(edfSimulationWithArrivalTime(processes));*/
