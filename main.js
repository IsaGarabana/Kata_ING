"use strict";

const repeatedArrays = (list) => {
	//clonamos el array y lo ordenamos, para no alterar nuestros datos iniciales
	const orderedList = list;
	orderedList.sort();
	//Creamos dos arrays en los que iresmo pusheando los valores de cifra única y de número de veces repetidas
	let uniqueElements = [];
	let timesRepeated = [];
	//creamos un contador de repeticiones con valor inicial 1, pues el elemento ya está presente, 'existe' al menos una vez
	let counter = 1;

	//recorremos el array con un bucle for para encontrar coincidencias de cifras
	for (let i = 0; i <= orderedList.length; i++) {
		if (list[i + 1] === orderedList[i]) {
			//aumentamos el contador en uno, pues el elemento siguiente al que estamos loopeando (list[i+1]) es igual a (list[i]), así que tenemos +1 repetido
			counter++;
		} else {
			//añadimos una única vez al array de elementos únicos la cifra que se ha repetido hasta ahora
			uniqueElements.push(orderedList[i]);
			//añadimos al array de el número de veces que se ha repetido la cifra y que hemos ido acumu
			timesRepeated.push(counter);
			//y reseteamos el contador pues comenzamos una 'nueva ronda de repeticiones'
			counter = 1;
		}
	}

	//tenemos dos arrays: uniqueElements, con las cfras que contiene el array(sin repetir), y otro, timesRepeated, con el número de veces que se repite. Dado que hemos ido pusheando los valores en paralelo, los índices de la cifra y del número de veces que se repite coinciden.
	console.log(timesRepeated);
	console.log(uniqueElements);

	//Buscamos el índice del mayor número de repeticiones en timesRepeated, que coincide con el índice de su correspondiente cifra en el array uniqueElements
	const moreRepeated = timesRepeated.indexOf(Math.max(...timesRepeated));

	//retornamos el valor de la cifra cuyo índice coindice con el de mayor repetición
	return uniqueElements[moreRepeated];
};

repeatedArrays([5, 5, 5, 2, 2, 2, 2, 2, 9, 4]);
