
function pintarLista(pLista) {


    pLista.forEach(tarea => {
        let sectionTarea = document.querySelector('#tareas');
        // console.log(pLista) // OK-- Array de 3 elementos

        sectionTarea.innerHTML += `<div class="tarea">${tarea.titulo}</div>
        <div class="eliminar">Eliminar</div>`
    });

}

pintarLista(listaTareas); // PintarLista OK!!
