let newArray = [];

function roundRobin(processos, quantum) {
	let tempoAtual = 0;
	let filaDeProcessos = [];
	let processosOrdenados = processos
		.slice()
		.sort(
			(a, b) => a.arrivalTime - b.arrivalTime || a.priority - b.priority
		);

	while (processosOrdenados.length > 0 || filaDeProcessos.length > 0) {
		while (
			processosOrdenados.length > 0 &&
			processosOrdenados[0].arrivalTime <= tempoAtual
		) {
			let processo = processosOrdenados.shift();
			processo.status = "Aguardando";
			filaDeProcessos.push(processo);
		}

		if (filaDeProcessos.length > 0) {
			let processoAtual = filaDeProcessos.shift();
			processoAtual.status = "Processando";
			newArray.push(getStatusMatrix(tempoAtual, processos));

			let tempoDeExecucao = Math.min(quantum, processoAtual.duration);
			tempoAtual += tempoDeExecucao;
			processoAtual.duration -= tempoDeExecucao;

			if (processoAtual.duration > 0) {
				processoAtual.status = "Aguardando";
				filaDeProcessos.push(processoAtual);
			} else {
				processoAtual.status = "Finalizado";
			}
			newArray.push(getStatusMatrix(tempoAtual, processos));
		} else if (processosOrdenados.length > 0) {
			tempoAtual = processosOrdenados[0].arrivalTime;
		} else {
			tempoAtual++; // Avança no tempo se não houver processos
		}
	}

	const novoArray = [...newArray];
	console.log(preencherTemposFaltantesComZero(novoArray, processos));
}

function getStatusMatrix(tempoAtual, processos) {
	return processos.map((p) => ({
		...p,
		tempoAtual: tempoAtual,
	}));
}

function filtrarUltimosEstadosPorTempo(dados) {
	let resultados = [];
	let temposVistos = new Set();

	for (let i = 0; i < dados.length; i++) {
		let estadoAtual = dados[i];
		let tempoDoEstado = estadoAtual[0].tempoAtual;

		if (!temposVistos.has(tempoDoEstado)) {
			temposVistos.add(tempoDoEstado);
			resultados.push(estadoAtual);
		} else {
			// Encontra o índice do subarray com o mesmo tempoAtual e substitui pelo mais recente
			let indiceParaSubstituir = resultados.findIndex(
				(subarray) => subarray[0].tempoAtual === tempoDoEstado
			);
			resultados[indiceParaSubstituir] = estadoAtual;
		}
	}

	console.log("aqui123" + resultados);
	return resultados;
}

function preencherTemposFaltantesComZero(array, processos) {
	let ultimoEstadoPorId = [];
	let resultado = [];

	// Verifica se o tempo zero está presente
	let tempoZeroPresente = array.some((subarray) =>
		subarray.some((item) => item.tempoAtual === 0)
	);

	const maiorTempo = array[array.length - 1][0].tempoAtual;

	// Inicializa o estado para o tempo zero com base nos processos, se necessário
	if (!tempoZeroPresente) {
		resultado.push(
			processos.map((processo) => ({
				...processo,
				tempoAtual: 0,
				status: "na",
			}))
		);
	}

	for (let tempo = 1; tempo < maiorTempo; tempo++) {
		console.log("aqui" + array);
		let tempArray = [];
		let otherArray = [];
		array.map((p) => otherArray.push(p));
		console.log(otherArray);

		// Verifica se o tempo atual já existe no array
		let subeArray = otherArray[tempo];

		if (subeArray[0].tempoAtual !== tempo) {
			// Copia os objetos do último tempo conhecido, ajustando o tempoAtual
			otherArray[tempo - 1].forEach((o) => {
				tempArray.push({ ...o, tempoAtual: tempo });
			});
			// Insere o novo subarray no array principal
			resultado.push(tempArray);
			console.log(resultado);
		}
	}

	return resultado;
}

// Exemplo de uso
let processos = [
	{ id: 1, duration: 2, arrivalTime: 3, priority: 1, status: "na" },
	{ id: 3, duration: 1, arrivalTime: 3, priority: 0, status: "na" },
	{ id: 3, duration: 1, arrivalTime: 3, priority: 1, status: "na" },
];

roundRobin(processos, 2);
