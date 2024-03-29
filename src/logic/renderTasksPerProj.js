"use strict";

import createTask from "./createTask";
import renderTasks from "./renderTasks";
import {getTodayTasks, getUpcomingTasks} from "./upcoming";


export function renderTasksPerProject(btn) {

    const projName = document.querySelector('.project-name')

    btn.addEventListener('click', function (event){

        console.log(btn.textContent)

        projName.textContent = btn.textContent

        renderTasks(btn.textContent)

        createTask(btn.textContent)


    })
}

export default renderTasksPerProject