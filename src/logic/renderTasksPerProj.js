"use strict";

import createTask from "./createTask";
import renderTasks from "./renderTasks";
import {getTodayTasks, getUpcomingTasks} from "./upcoming";


export function renderTasksPerProject(btn) {

    const projName = document.querySelector('.project-name')

    btn.addEventListener('click', function (event){

        // console.log(btn.textContent)

        projName.textContent = btn.textContent

        renderTasks(btn.textContent)

        createTask(btn.textContent)

        if (btn.textContent === 'Today' || btn.textContent === 'This week'){
            const addTask = document.querySelector('.add-task')
            addTask.style.display = 'none';
        } else {
            const addTask = document.querySelector('.add-task')
            addTask.style.display = 'block';
        }

    })
}

export default renderTasksPerProject