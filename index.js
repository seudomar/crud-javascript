import {saveTask, getTasks, getTask, onGetTask, deleteTask, updateTask} from './firebase.js'

const taskForm = document.getElementById('task-form')
const taskContainer = document.getElementById('tasks-container')
const salvar = document.getElementById('task-salvar')
let editStatus = false;
let id = '';
//Este evento nos permite ejecutar algo cuando la pagina se carga

window.addEventListener('DOMContentLoaded', async () => {
    //console.log('Trabajando')
    //Aqui consultamos a la base de dato

    onGetTask((querySnapshot) => {


        taskContainer.innerHTML = ''
        querySnapshot.forEach(doc => {
            const task = doc.data()
    
            taskContainer.innerHTML += `
                <div class="card card-body mt-2 border-primary">
                
                    <h2 class="h4"> ${task.title} </h1>
                    <p> ${task.description} </p>
                    <div>

                        <button value="Delete" class="btn btn-primary btn-delete" data-id="${doc.id}" >Delete</button>
                        <button value="Update" class="btn btn-secondary btn-edite" data-id="${doc.id}" >Edite</button>
                
                    </div>
                </div>
            `
        });
    
        
        //Seleccionamos el boton y creamos un metodo
        const btnDelecte = taskContainer.querySelectorAll('.btn-delete')

        btnDelecte.forEach(btn => {
            btn.addEventListener('click', ({target: {dataset}}) => {
                deleteTask(dataset.id)
            })
        });

         //Seleccionamos el boton y creamos un metodo para editar
         const btnEdite = taskContainer.querySelectorAll('.btn-edite')

         btnEdite.forEach(btn => {
             btn.addEventListener('click', async (e) => {
                const doc = await getTask(e.target.dataset.id)
                //console.log(doc.data())
                const task = doc.data();
                taskForm["task-title"].value = task.title
                taskForm["task-description"].value = task.description

                editStatus = true
                salvar.innerHTML='Update'
                id = doc.id;
                
             })

             
         });
    });
    
   
   
})




taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // llamaremos los input y si queremos el valor, solo llamamos el metodo value
    const title = taskForm['task-title']
    const description = taskForm['task-description']

    if (!editStatus) {
        saveTask(title.value, description.value)
    } else {
        updateTask(id, {
            title : title.value, 
            description: description.value
            
        })

        
        editStatus = false;
        
        
    }
    
    salvar.innerHTML='Salvar'
    taskForm.reset()
})