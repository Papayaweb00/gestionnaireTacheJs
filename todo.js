document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Charger les tâches depuis localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Afficher les tâches
    tasks.forEach(task => {
        displayTask(task);
    });

    // Écoute le clic sur le bouton et ajoute une tâche à la liste
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value;
        if (task) {
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTask(task);
            taskInput.value = '';
        }
    });

    // Fonction pour afficher une tâche
    function displayTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }

    // Fonction qui accepte plusieurs noms de tâches (paramètres variadiques) et les ajoute toutes à la liste
    function addMultipleTasks(...newTasks) {
        tasks = [...tasks, ...newTasks];
        localStorage.setItem('tasks', JSON.stringify(tasks));
        newTasks.forEach(task => displayTask(task));
    }

    // Exemple d'utilisation de la destructuration pour afficher les propriétés d'une tâche dans la console
    if (tasks.length > 0) {
        const [firstTask, ...restTasks] = tasks;
        console.log('First task:', firstTask);
        console.log('Rest of the tasks:', restTasks);
    }
});
