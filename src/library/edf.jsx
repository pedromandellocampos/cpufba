export default function edf(processes) {
	let time = 0;
	let output = [];
	let processQueue = [];

	// Enquanto houver processos ou enquanto a fila de processos não estiver vazia
	while (processes.length > 0 || processQueue.length > 0) {
		// Adiciona processos que chegaram no tempo atual à fila
		processQueue.push(...processes.filter((p) => p.arrivalTime === time));
		processes = processes.filter((p) => p.arrivalTime !== time);

		// Ordena a fila por prioridade (menor número de prioridade tem maior prioridade)
		processQueue.sort((a, b) => a.priority - b.priority);

		if (processQueue.length > 0) {
			let currentProcess = processQueue[0];
			output.push(currentProcess.id); // Executa o processo de maior prioridade
			currentProcess.duration--;

			if (currentProcess.duration === 0) {
				processQueue.shift(); // Remove o processo da fila se ele estiver completo
			}
		} else {
			// Se nenhum processo estiver pronto para ser executado, adiciona um tempo ocioso
			output.push("-"); // Representa um ciclo de clock sem processamento
		}

		time++;
	}

	return output;
}
