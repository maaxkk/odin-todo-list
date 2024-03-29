"use strict";


import {removeTask, inspectTask, editTask} from "./btnsLogic";

export function renderTasks(projName){

    const taskDivs = document.querySelectorAll('.task')

    const tasksDiv = document.querySelector('.tasks')

    const projects = JSON.parse(localStorage.getItem('projects'))

    taskDivs.forEach(div => div.remove())

    for (let i = 0; i < projects[projName].length; i++) {

        const taskTitle = document.createElement('p')
        const taskDiv = document.createElement('div')
        const circle = document.createElement('button')
        const detail = document.createElement('button')
        const edit = document.createElement('button')

        detail.classList.add('done', 'details')
        detail.innerHTML = 'Details'
        detail.dataset.index = `${i}`

        inspectTask(detail)

        circle.innerHTML = 'Done'
        circle.classList.add('done')
        circle.dataset.index = `${i}`

        removeTask(circle)

        edit.innerHTML = 'Edit'
        edit.classList.add('done', 'edit')
        edit.dataset.index = `${i}`

        editTask(edit)

        taskTitle.textContent = projects[projName][i].title

        taskDiv.classList.add('task')
        taskDiv.append(circle, detail, edit, taskTitle)

        tasksDiv.prepend(taskDiv)
    }
}

export default renderTasks