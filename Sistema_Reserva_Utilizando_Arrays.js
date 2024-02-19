// Array para almacenar las reservas
let reservas = [];

// Función para agregar una reserva al final del array y retornar el número de confirmación
function agregarReserva(reserva) {
    reservas.push(reserva);
    return reservas.length - 1; // El número de confirmación es el índice de la reserva en el array
}

// Función para eliminar una reserva por su posición en el array
function eliminarReserva(posicion) {
    if (posicion >= 0 && posicion < reservas.length) {
        reservas.splice(posicion, 1);
        return true; // La reserva fue eliminada
    } else {
        return false; // La posición especificada no existe
    }
}

// Función para mostrar la información de una reserva en una posición específica
function mostrarReserva(posicion) {
    if (posicion >= 0 && posicion < reservas.length) {
        let reservaInfo = reservas[posicion].split("-");
        let nombre = reservaInfo[0];
        let numPersonas = reservaInfo[1];
        let fecha = reservaInfo[2];
        let hora = reservaInfo[3];
        console.log(nombre, numPersonas + " personas", fecha, hora + " horas");
    } else {
        console.log("No se encontró una reserva con el número", posicion);
    }
}

// Ejemplo de uso de las funciones
let numConfirmacion1 = agregarReserva("Ada Lovelace-6-Marzo 9 2023-16:00");
console.log("Número de confirmación de la reserva 1:", numConfirmacion1);

let numConfirmacion2 = agregarReserva("Alan Turing-4-Marzo 12 2023-18:30");
console.log("Número de confirmación de la reserva 2:", numConfirmacion2);

console.log("Reservas actualizadas:", reservas);

let eliminada = eliminarReserva(1); // Eliminar la segunda reserva
console.log("¿La reserva fue eliminada?", eliminada);
console.log("Reservas después de eliminar:", reservas);

mostrarReserva(0); // Mostrar la información de la primera reserva
mostrarReserva(1); // Intentar mostrar la información de la reserva eliminada



