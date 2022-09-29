import {saveTask, getTask, onGetTask} from './firebase.js'

const taskForm = document.getElementById('task-form')
const taskContainer = document.getElementById('tasks-container')

//Este evento nos permite ejecutar algo cuando la pagina se carga

window.addEventListener('DOMContentLoaded', async () => {
    //console.log('Trabajando')
    //Aqui consultamos a la base de dato

    onGetTask((querySnapshot) => {


        let html = ''
        querySnapshot.forEach(doc => {
            const task = doc.data()
    
            html += `
                <div>
                
                    <h2> ${task.title} </h1>
                    <p> ${task.description} </p>
                
                </div>
            `
        });
    
        taskContainer.innerHTML = html
        
    });
    
   
   
})




taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // llamaremos los input y si queremos el valor, solo llamamos el metodo value
    const title = taskForm['task-title']
    const description = taskForm['task-description']

    saveTask(title.value, description.value)
    //console.log(e)
    taskForm.reset()
})