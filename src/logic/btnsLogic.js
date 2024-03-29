"use strict";

import renderTasks from "./renderTasks";
import renderProjects from "./renderProjects";

export function removeTask(btn) {
    btn.addEventListener('click', function (event) {
        const submitBtn = document.querySelector('.submit')

        const projName = submitBtn.dataset.key

        const projects = JSON.parse(localStorage.getItem('projects'))

        const index = event.target.dataset.index;

        let objectId = '';

        for (let i = 0; i < projects[projName].length; i++) {
            if (+index === i) {
                objectId = projects[projName][i].id;
                projects[projName].splice(index, 1);
            }
        }

        for (let i = 0; i < projects['Today'].length; i++) {
            if (objectId === projects['Today'][i].id) {
                projects['Today'].splice(i, 1);
            }
        }

        for (let i = 0; i < projects['This week'].length; i++) {
            if (objectId === projects['This week'][i].id) {
                projects['This week'].splice(i, 1);
            }
        }

        localStorage.setItem('projects', JSON.stringify(projects))
        renderTasks(projName)
    })
}

export function removeProject(btn){
    btn.addEventListener('click', function (event){
        const projName = event.target.parentNode.dataset.project;
        const projects = JSON.parse(localStorage.getItem('projects'))

        for (let i = 0; i < projects['Today'].length; i++) {
            for (let j = 0; j < projects[projName].length; j++) {
                if (projects['Today'][i].id === projects[projName][j].id){
                    projects['Today'].splice(i, 1)
                }
            }
        }

        for (let i = 0; i < projects['This week'].length; i++) {
            for (let j = 0; j < projects[projName].length; j++) {
                if (projects['This week'][i].id === projects[projName][j].id){
                    projects['This week'].splice(i, 1)
                }
            }
        }

        delete projects[projName];
        localStorage.setItem('projects', JSON.stringify(projects))
        renderProjects()
    })
}

export function editTask(btn) {
    btn.addEventListener('click', function (event) {
        const submitBtn = document.querySelector('.submit')

        const projName = submitBtn.dataset.key

        const dialog = document.querySelector('.details-content')

        const dialogWindow = document.querySelector('.details-dialog')

        const dialogClose = document.querySelector('.close-details')

        const projects = JSON.parse(localStorage.getItem('projects'))

        const index = event.target.dataset.index;

        const taskTitle = document.createElement('p')
        const taskDueDate = document.createElement('p')
        const taskPriority = document.createElement('p')
        const taskDescription = document.createElement('p')

        for (let i = 0; i < projects[projName].length; i++) {
            if (+index === i) {
                taskTitle.textContent = `Title is: ${projects[projName][i].title}`
                taskDueDate.textContent = `Due date is: ${projects[projName][i].duedate}`
                taskPriority.textContent = `Priority is: ${projects[projName][i].priority}`
                taskDescription.textContent = `Description is: ${projects[projName][i].description}`
                dialog.append(taskTitle, taskDueDate, taskPriority, taskDescription)
                dialogWindow.showModal()
            }
        }

        dialogClose.addEventListener('click', function (event){
            dialog.innerHTML = '';
            dialogWindow.close()
        })

        dialogWindow.addEventListener('close', function (event){
            dialog.innerHTML = '';
        })
    })
}

export default {removeTask, editTask, removeProject}