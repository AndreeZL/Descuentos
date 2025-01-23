// Función para calcular el descuento
function calcularDescuento(precio, descuento, callback) {
    const descuentoCalculado = precio * (descuento / 100);
    const precioFinal = precio - descuentoCalculado;
    callback(precioFinal, descuentoCalculado);
}

// Obtener elementos del DOM
const precioInput = document.getElementById('precio');
const descuentoInput = document.getElementById('descuento');
const calcularButton = document.getElementById('calcular-descuento');
const resultadoElement = document.getElementById('resultado');

// Función para mostrar el resultado
function mostrarResultado(precioFinal, descuentoCalculado) {
    resultadoElement.textContent = `El descuento es: S/.${descuentoCalculado.toFixed(2)}. 
    El precio final es: S/.${precioFinal.toFixed(2)}.`;
}

// Evento para calcular descuento
calcularButton.addEventListener('click', () => {
    const precio = parseFloat(precioInput.value);
    const descuento = parseFloat(descuentoInput.value);
    if (!isNaN(precio) && !isNaN(descuento)) {
        if (precio > 0 && descuento >= 0) {
            calcularDescuento(precio, descuento, mostrarResultado);
        } else {
            resultadoElement.textContent = "Ingrese valores válidos (precio mayor a 0 y descuento no negativo).";
        }
    } else {
        resultadoElement.textContent = "Por favor, ingresa números válidos.";
    }
});