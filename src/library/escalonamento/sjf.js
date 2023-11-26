import { getAccordionSummaryUtilityClass } from "@mui/material";

let tasks = [
	{ id: 0, duration: 8, arrivalTime: 1, status: "na" },
	{ id: 1, duration: 2, arrivalTime: 1, status: "na" },
	{ id: 3, duration: 1, arrivalTime: 1, status: "na" },
	{ id: 2, duration: 1, arrivalTime: 4, status: "na" },
];

function findMinDurationObject(arr, time) {
	// Filtra os objetos com duration maior que zero e arrivalTime menor ou igual a time
	const filteredObjects = arr.filter(
		(obj) => obj.duration > 0 && obj.arrivalTime <= time
	);

	// Verifica se ainda há objetos no array após a filtragem
	if (filteredObjects.length === 0) {
		return null; // Retorna null se não houver objetos válidos
	}

	// Usa o método reduce para encontrar o objeto com menor duration
	return filteredObjects.reduce((minObj, currentObj) => {
		return currentObj.duration < minObj.duration ? currentObj : minObj;
	});
}

function updateTasks(time) {
	// a cada rodada deve verificar se existe alguem em execução.
	//Essa pessoa continuará em execução até que seja encerrado.

	///se não houver ninguem em execução deve-se
	//verificar o processo mais curto que tenha o valor diferente de zero.

	let processingTask = tasks.find((task) => task.status === "Processando");

	tasks.forEach((task) => {
		if (task.arrivalTime <= time && task.status != "Finalizado") {
			let soonerValidJob = findMinDurationObject(tasks, time);

			console.log(soonerValidJob);
			if (!processingTask && soonerValidJob.id === task.id) {
				task.status = "Processando";
				processingTask = task;
			} else if (processingTask == task) {
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
				if (task.duration == 0) {
					task.status = "Finalizado";
					processingTask = null; // Permite que outra tarefa comece a ser processada
				}
			}
		}
	});
}

function getStatusMatrix() {
	return tasks.map((task) => [task.id, task.status]);
}

for (let time = 0; tasks.some((p) => p.status != "Finalizado"); time++) {
	updateTasks(time);
	console.log(`Tempo: ${time}, Status das Tarefas: `, getStatusMatrix());
}
