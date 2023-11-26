let tasks = [
	{ id: 0, duration: 1, arrivalTime: 1, status: "na" },
	{ id: 1, duration: 4, arrivalTime: 8, status: "na" },
	{ id: 2, duration: 4, arrivalTime: 3, status: "na" },
];

function updateTasks(time) {
	let processingTask = tasks.find((task) => task.status === "Processando");

	tasks.forEach((task) => {
		if (task.arrivalTime <= time && task.status != "Finalizado") {
			if (!processingTask || processingTask.id == task.id) {
				task.status = "Processando";
				processingTask = task;
			} else {
				task.status = "Aguardando";
			}
		}

		if (task.status === "Processando") {
			if (task.duration === 0) {
				task.status = "Finalizado";
				processingTask = null; // Permite que outra tarefa comece a ser processada
			} else {
				task.duration -= 1;
			}
		}
	});
}

function getStatusMatrix() {
	return tasks.map((task) => [task.id, task.status]);
}

// Exemplo de execução
for (let time = 0; tasks.some((p) => p.status != "Finalizado"); time++) {
	updateTasks(time);
	console.log(`Tempo: ${time}, Status das Tarefas: `, getStatusMatrix());
}
