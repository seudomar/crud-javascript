import {saveTask} from './firebase.js'
//Este evento nos permite ejecutar algo cuando la pagina se carga

window.addEventListener('DOMContentLoaded', () => {
    //console.log('Trabajando')
})


const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // llamaremos los input y si queremos el valor, solo llamamos el metodo value
    const title = taskForm['task-title']
    const description = taskForm['task-description']

    saveTask(title.value, description.value)
    //console.log(title,description)
})