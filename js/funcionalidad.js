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


// FILTRAR POR PRIORIDAD

const selectPrioridad = document.querySelector('#buscar select')

selectPrioridad.addEventListener('change', filtrarPrioridad)

function filtrarPrioridad(event) {

    let prioridad = selectPrioridad.value;

    if (prioridad == 'urgente') {

    }

}



function filtrar(pPrioridad, pLista) {
    let listaPorPrioridad = pLista.filter(tarea => tarea.prioridad == pPrioridad);
    return listaPorPrioridad;
}






// BORRAR TAREAS --

// const btnEliminar = document.querySelector('#btnEliminar');
// btnEliminar.addEventListener('click', borrarTarea);
// function borrarTarea(event) {
//     let sectionTarea = document.querySelector('#tareas');
//     sectionTarea.parentNode.removeChild(sectionTarea); 

//     listaTareas.forEach(tarea => {
//         console.log(tarea);
//         // let posicion = listaTareas.findIndex(tarea => tarea.idTarea == idTarea)
//     });
//     // listaTareas.splice(posicion, 1);

// }































