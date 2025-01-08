window.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#taskInput');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const taskList = document.querySelector('#taskList');
    // Charger les tâches depuis localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Afficher les taches depuis le localStorage
    tasks.forEach((task) => {
        ajouterTache(task);
    })

    // fontion qui permet d'afficher la liste des taches 
    function ajouterTache(tache, e) {
        const li = document.createElement('li');
        if (tache.value === '') {
            e.preventDefault();
        } else {
            li.innerText = tache;
        }
        // console.log(li);
        taskList.append(li);
    }

    // button ecouteurs d'evenement executant les fonctions
    addTaskBtn.addEventListener('click', (e) => {
        var tache = taskInput.value;

        if (tache.trim() === '') {
            e.preventDefault();
            taskInput.classList.add('erreur');
        } else {
            const k = tasks.push(tache)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            ajouterTache(tache);
            taskInput.value = '';
            addMultipleTasks(tasks);
            taskInput.classList.remove('erreur');
        }

    })


    // Fonction qui accepte plusieurs noms de tâches et 
    // les ajoute toutes à la liste
    function addMultipleTasks(...newTasks) {
        const t = [...tasks, ...newTasks];
        localStorage.setItem('tasks', JSON.stringify(t));
        newTasks.array.forEach(task => displayTask(task));
    }

    // Utilisation de la destructuration pour afficher 
    // les propriétés d'une tâche dans la console
    if (tasks.length > 0) {
        const [firstTask, ...restTasks] = tasks;
        console.log('Premiére tache :', firstTask);
        console.log('Reste des taches :', restTasks);
    }
})
