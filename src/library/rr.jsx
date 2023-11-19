function roundRobin(processes, quantum) {
	let time = 0;
	let output = [];
	let processQueue = [...processes]; // Cria uma cópia da lista de processos
	let currentProcessIndex = 0;

	// Continua enquanto houver processos não concluídos
	while (processQueue.some((p) => p.duration > 0)) {
		let currentProcess = processQueue[currentProcessIndex];

		// Se o processo chegou ou já estava na fila
		if (currentProcess.arrivalTime <= time && currentProcess.duration > 0) {
			let timeForThisRound = Math.min(currentProcess.duration, quantum);

			// Executa o processo pelo tempo do quantum ou até que ele termine
			for (let i = 0; i < timeForThisRound; i++) {
				output.push(currentProcess.id);
				currentProcess.duration--;
				time++;
			}
		} else {
			time++; // Avança o tempo se o processo ainda não chegou
		}

		// Move para o próximo processo na fila
		currentProcessIndex = (currentProcessIndex + 1) % processQueue.length;
	}

	return output;
}
