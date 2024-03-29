"use strict";

import Task from "./task";
import generateId from "./generateId";
import {getTodayTasks, getUpcomingTasks} from "./upcoming";
import renderTasks from "./renderTasks";

export function fillForm() {
    function formElements() {
        const inputTitle = document.querySelector('.input-title')
        const inputDate = document.querySelector('.input-date')
        const inputPriority = document.querySelector('.input-priority:checked')
        const inputDescription = document.querySelector('#description')
        return [inputTitle, inputDate, inputPriority, inputDescription]
    }

    document.addEventListener('submit', function (event) {
        event.preventDefault()

        const [inputTitle, inputDate, inputPriority, inputDescription] = formElements()

        const submit = document.querySelector('button[data-key]')

        const projName = submit.dataset.key

        const projects = JSON.parse(localStorage.getItem('projects'))

        const task = Task(inputTitle.value, inputDate.value, inputPriority.id, inputDescription.value)

        const dialog = document.querySelector('dialog')

        task.id = generateId();

        projects[projName].push(task);

        localStorage.setItem('projects', JSON.stringify(projects))

        getTodayTasks()
        getUpcomingTasks()

        dialog.close()

        renderTasks(projName)
    })

}

export default fillForm