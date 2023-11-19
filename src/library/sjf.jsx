export default function sjfSimulation(processes) {
	let time = 0;
	let output = [];
	let processQueue = [];
	let remainingProcesses = processes.slice(); // Cria uma cópia da lista de processos

	while (remainingProcesses.length > 0 || processQueue.length > 0) {
		// Adiciona processos que chegaram ao tempo atual na fila de espera
		processQueue.push(
			...remainingProcesses.filter((p) => p.arrivalTime <= time)
		);
		remainingProcesses = remainingProcesses.filter(
			(p) => p.arrivalTime > time
		);

		// Ordena a fila de espera pelo tempo de duração (menor duração primeiro)
		processQueue.sort((a, b) => a.duration - b.duration);

		if (processQueue.length > 0) {
			let currentProcess = processQueue.shift(); // Pega o processo com menor duração

			// Executa o processo atual
			for (let i = 0; i < currentProcess.duration; i++) {
				output.push(currentProcess.id);
				time++;
			}
		} else {
			// Se não há processos prontos, avança o tempo
			time++;
			output.push("-"); // Representa um ciclo de clock sem processamento
		}
	}

	return output;
}
