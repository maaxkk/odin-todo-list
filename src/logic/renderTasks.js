"use strict";


export function renderTasks(projName){

    const taskDivs = document.querySelectorAll('.task')

    const tasksDiv = document.querySelector('.tasks')

    const projects = JSON.parse(localStorage.getItem('projects'))

    taskDivs.forEach(div => div.remove())

    projects['22'][0] = {title: 'test'};
    projects['22'][1] = {title: 'test2'};

    for (let i = 0; i < projects[projName].length; i++) {

        const taskTitle = document.createElement('p')
        const taskDiv = document.createElement('div')
        const circle = document.createElement('button')
        const detail = document.createElement('button')

        detail.classList.add('done', 'details')
        detail.innerHTML = 'Details'

        circle.innerHTML = 'Done'
        circle.classList.add('done')

        taskTitle.textContent = projects[projName][i].title

        taskDiv.classList.add('task')
        taskDiv.append(circle, detail, taskTitle)

        tasksDiv.prepend(taskDiv)
    }
}

export default renderTasks