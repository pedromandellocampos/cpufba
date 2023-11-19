function fifo(processes) {
	let time = 0; // O tempo atual
	let output = []; // Armazena o ID do processo que está sendo executado a cada unidade de tempo

	// Ordena os processos por tempo de chegada (arrivalTime)
	processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

	// Processa cada processo em ordem FIFO
	processes.forEach((process) => {
		// Executa cada processo pelo seu tempo de duração
		for (let i = 0; i < process.duration; i++) {
			output[time] = process.id; // Armazena o ID do processo em execução
			time++; // Incrementa o tempo
		}
	});

	return output;
}
