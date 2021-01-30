let listaTareas = new Array(
    {
        idTarea: 0,
        titulo: 'Estudiar javascript',
        prioridad: 'urgente'
    },
    {
        idTarea: 1,
        titulo: 'Dormir',
        prioridad: 'diaria'
    },
    {
        idTarea: 2,
        titulo: 'Salir a comer',
        prioridad: 'mensual'
    },
)



function pintarLista(pLista) {

    let sectionTarea = document.querySelector('#tareas');

    pLista.forEach(tarea => {

        // console.log(pLista) // OK-- Array de 3 elementos

        sectionTarea.innerHTML += `<div class="tarea">${tarea.titulo}</div>
        <div class="eliminar">Eliminar</div>`
    });

}


pintarLista(listaTareas);






