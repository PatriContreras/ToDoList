// OBTENER ID.

// let idNuevaTarea = function getId(pLista) {
//     for (let tarea of pLista) {
//         tarea.idTarea = listaTareas.length;

//     } return idTarea++

// }

// getId(listaTareas)




// PINTAR LISTA -- OK

function pintarLista(pLista) {

    let sectionTarea = document.querySelector('#tareas');

    sectionTarea.innerHTML = '';

    pLista.forEach(tarea => {

        sectionTarea.innerHTML += `<div class="tarea">${tarea.titulo}</div><div class="eliminar"><button id="btnEliminar">Eliminar</button></div>`
    });

}

pintarLista(listaTareas);



// AÑADIR TAREAS -- OK


let input = document.querySelector('#guardar input');
let select = document.querySelector('#guardar select');
let button = document.querySelector('#guardar button');


button.addEventListener('click', guardarTarea);


function guardarTarea(event) {

    let idNuevaTarea = listaTareas.length;
    let nombreTarea = input.value;
    let prioridadTarea = select.value;

    let nuevaTarea = {
        idTarea: ++idNuevaTarea,
        titulo: nombreTarea,
        prioridad: prioridadTarea
    };

    listaTareas.push(nuevaTarea);

    pintarLista(listaTareas);
}




// BORRAR TAREAS --


// const btnEliminar = document.querySelector('#btnEliminar');


// btnEliminar.addEventListener('click', borrarTarea);

// function borrarTarea(event) {


//     pintarLista(listaTareas);
// }




























