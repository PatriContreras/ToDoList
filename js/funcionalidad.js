// PINTAR LISTA -- OK

function pintarLista(pLista) {


    pLista.forEach(tarea => {
        let sectionTarea = document.querySelector('#tareas');
        // console.log(pLista) // OK-- Array de 3 elementos

        sectionTarea.innerHTML += `<div class="tarea">${tarea.titulo}</div>
        <div class="eliminar">Eliminar</div>`
    });

}

pintarLista(listaTareas);


// AÑADIR TAREAS --


let input = document.querySelector('#guardar input');
let select = document.querySelector('#guardar select');
let button = document.querySelector('#guardar button');

// console.log(button); // CAPTURADOS OK

button.addEventListener('click', guardarTarea);


function guardarTarea(event) {

    let nuevaTarea = function crearTarea() {
        let nombreTarea = input.innerText;
        let prioridadTarea = select.value;

        return `idTarea: 2,
    titulo: '${nombreTarea}',
    prioridad: '${prioridadTarea}'`
    }

    listaTareas.push(nuevaTarea);
}

console.log(listaTareas);
















