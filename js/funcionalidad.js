// PINTAR LISTA -- OK

function pintarLista(pLista) {

    let sectionTarea = document.querySelector('#tareas');

    sectionTarea.innerHTML = '';

    pLista.forEach(tarea => {

        let color = '';

        switch (tarea.prioridad) {
            case 'urgente':
                color = '#FC7D6E';
                break;
            case 'diaria':
                color = '#FBFB90';
                break;
            case 'mensual':
                color = '#B8EDFB';
                break;
        }

        sectionTarea.innerHTML += `<div class="row" id-tarea='${tarea.idTarea}'><div class="tarea" style="background-color: ${color}">${tarea.titulo}</div><div class="eliminar"><button class="btnEliminar">Eliminar</button></div></div>`;

    });

    addEventListenerBtnEliminar();

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

    if (nombreTarea == '' || prioridadTarea == '') {
        alert('Debes rellenar todos los campos');
    } else {
        listaTareas.push(nuevaTarea);
    }

    pintarLista(listaTareas);
}


// FILTRAR POR PRIORIDAD -- OK

const selectPrioridad = document.querySelector('#buscar select')

selectPrioridad.addEventListener('change', filtrarPrioridad)

function filtrarPrioridad(event) {

    let prioridad = selectPrioridad.value;

    if (prioridad == 'urgente') {
        let listaPorPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'urgente');
        pintarLista(listaPorPrioridad);
    } else if (prioridad == 'diaria') {
        let listaPorPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'diaria');
        pintarLista(listaPorPrioridad);
    } else if (prioridad == 'mensual') {
        let listaPorPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'mensual');
        pintarLista(listaPorPrioridad);
    } else {
        pintarLista(listaTareas)
    }

}


// BUSCAR POR PALABRAS -- OK

const buscador = document.querySelector('#buscar input');

buscador.addEventListener('keydown', buscarPorLetra);

function buscarPorLetra(event) {

    let buscarPorLetra = buscador.value;

    if (buscarPorLetra == '') {
        pintarLista(listaTareas);
    } else {
        let listaPorLetra = listaTareas.filter(tarea => tarea.titulo.toLowerCase().includes(buscarPorLetra.toLowerCase()));

        pintarLista(listaPorLetra);
    }
}



// BORRAR TAREAS --


function addEventListenerBtnEliminar() {
    const btnEliminar = document.querySelectorAll('.btnEliminar');

    for (boton of btnEliminar) {
        boton.addEventListener('click', borrarTarea);
    }
}



function borrarTarea(event) {
    // let divEliminar = event.target.parentNode;
    // let divRow = divEliminar.parentNode;
    // console.log(divRow);

    let divRow = event.target.closest('.row'); // Coge el ascendiente más cercano con esa clase, id..(selector)
    let getIdTarea = divRow.getAttribute('id-tarea');
    // console.log(getIdTarea);
    divRow.remove();

    let index = listaTareas.findIndex(tarea => {
        return tarea.idTarea == getIdTarea;
    })

    listaTareas.splice(index, 1);

}


