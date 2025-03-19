// Declarar el array para almacenar los amigos
let amigos = [];
// Almacenar los sorteos para mostrar después
let resultados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim();
    
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        amigoInput.value = ''; // Limpiar el input
    } else if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado.');
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista anterior
    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, agrega al menos 2 amigos.');
        return;
    }

    // Barajar el array de amigos de manera aleatoria
    const amigosSorteados = [...amigos]; // Copiar el array
    const resultados = [];

    // Asignar un amigo secreto asegurando que nadie sea asignado a sí mismo
    for (let i = 0; i < amigosSorteados.length; i++) {
        let amigoSecreto;
        do {
            amigoSecreto = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        } while (amigosSorteados[i] === amigoSecreto || resultados.includes(amigoSecreto));
        
        resultados.push({ amigo: amigosSorteados[i], amigoSecreto });
    }

    mostrarResultados(resultados);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultados) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpiar resultados anteriores
    
    resultados.forEach((resultado) => {
        const li = document.createElement('li');
        li.textContent = `${resultado.amigo} ha sacado a ${resultado.amigoSecreto}.`;
        resultadoElement.appendChild(li);
    });
}