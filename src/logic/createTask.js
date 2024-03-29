"use strict";

import Task from "./task";
import generateId from "./generateId";
import renderTasks from "./renderTasks";

export function createTask(projName) {

    const submitBtn = document.querySelector('.submit')
    const dialog = document.querySelector('dialog')

    function formElements() {
        const inputTitle = document.querySelector('.input-title')
        const inputDate = document.querySelector('.input-date')
        const inputPriority = document.querySelector('.input-priority:checked')
        const inputDescription = document.querySelector('#description')
        return [inputTitle, inputDate, inputPriority, inputDescription]
    }


    submitBtn.addEventListener('click', function (event) {
        const [inputTitle, inputDate, inputPriority, inputDescription] = formElements()
        const task = Task(inputTitle.value, inputDate.value, inputPriority.id, inputDescription.value)
        const projects = JSON.parse(localStorage.getItem('projects'))

        task.id = generateId();

        projects[projName].push(task);

        localStorage.setItem('projects', JSON.stringify(projects))

        dialog.close()

        renderTasks(projName)

    })
}

export default createTask