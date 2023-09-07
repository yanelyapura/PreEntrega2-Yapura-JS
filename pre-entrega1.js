let prestamos = [];

function agregarPrestamo(monto, cuotas, montoCuotas) {
    let prestamo = {
        monto: monto,
        cuotas: cuotas,
        montoCuotas: montoCuotas
    };

    prestamos.push(prestamo);
}

function buscarPrestamoPorMonto(monto) {
    let prestamosEncontrados = prestamos.filter(prestamo => prestamo.monto === monto);
    return prestamosEncontrados;
}

// Realizar una búsqueda por monto utilizando prompt
function buscarPrestamoPorMontoDesdePrompt() {
    let monto = parseFloat(prompt('Ingrese el monto a buscar'));

    let prestamosEncontrados = buscarPrestamoPorMonto(monto);

    // Mostrar el resultado en la pantalla HTML
    let resultadoDiv = document.createElement('div');
    if (prestamosEncontrados.length > 0) {
        resultadoDiv.textContent = 'Préstamos con monto de $' + monto + ': ' + JSON.stringify(prestamosEncontrados);
    } else {
        resultadoDiv.textContent = 'No se encontraron préstamos con el monto especificado.';
    }
    document.body.appendChild(resultadoDiv);
}

function filtrarPrestamosPorCuotas(cuotas) {
    let prestamosFiltrados = prestamos.filter(prestamo => prestamo.cuotas === cuotas);
    return prestamosFiltrados;
}

// Filtrar préstamos por cantidad de cuotas utilizando prompt
function filtrarPrestamosPorCuotasDesdePrompt() {
    let cuotas = parseFloat(prompt('Ingrese la cantidad de cuotas a filtrar'));

    let prestamosFiltrados = filtrarPrestamosPorCuotas(cuotas);

    // Mostrar el resultado en la pantalla HTML
    let resultadoDiv = document.createElement('div');
    if (prestamosFiltrados.length > 0) {
        resultadoDiv.textContent = 'Préstamos con ' + cuotas + ' cuotas: ' + JSON.stringify(prestamosFiltrados);
    } else {
        resultadoDiv.textContent = 'No se encontraron préstamos con la cantidad de cuotas especificada.';
    }
    document.body.appendChild(resultadoDiv);
}

function auntenticarUsuario(usuario, contraseña) {
    if ((usuario == 'Yanel') && (contraseña == '1234')) {
        return true;
    } else {
        alert('Las credenciales no son válidas');
        return false;
    }
}

function darBuenosDias() {
    let usuario = prompt('Cual es tu nombre');
    alert('Bienvenido/a ' + usuario);
}

function calcularCuotas(monto, cuotas, tna) {
    // Calculamos la tasa de interés mensual
    const tasaMensual = tna / 12 / 100;

    // Calculamos el importe de cada cuota usando la fórmula de cuota fija
    const cuotaFija = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -cuotas));

    return cuotaFija.toFixed(2); // Devolvemos el importe de cada cuota con dos decimales
}

function necesitaPrestamo() {
    let prestamo = prompt('Desea sacar el prestamo? 1-si/2-no');

    if (prestamo == '1') {
        return true;
    } else if (prestamo == '2') {
        return false;
    } else {
        alert('Opción no válida');
    }
}

function solicitaPrestamo() {
    let monto = parseFloat(prompt('Ingrese el monto total de su préstamo'));
    let cuotas = parseFloat(prompt('Ingrese cantidad de cuotas'));
    let montocuotas = calcularCuotas(monto, cuotas, tna);

    agregarPrestamo(monto, cuotas, montocuotas);
    
    // Mostrar el resultado en la pantalla HTML
    let resultadoDiv = document.createElement('div');
    resultadoDiv.textContent = 'Préstamo agregado: Monto $' + monto + ', Cuotas ' + cuotas + ', Monto de cuotas $' + montocuotas;
    document.body.appendChild(resultadoDiv);  
}


const tna = 148

let usuario, contrasenia;

do {
    usuario = prompt('Ingresa nombre de usuario');
    contrasenia = prompt('Ingresa contraseña');
} while (!auntenticarUsuario(usuario, contrasenia));

darBuenosDias();

while (necesitaPrestamo()) {
    solicitaPrestamo();
}

buscarPrestamoPorMontoDesdePrompt();
filtrarPrestamosPorCuotasDesdePrompt();

alert('Gracias por usar nuestro servicio.');



