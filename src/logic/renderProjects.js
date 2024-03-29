"use strict";


import renderTasksPerProject from "./renderTasksPerProj";
import createTask from "./createTask";

export function renderProjects(){

    const projects = JSON.parse(localStorage.getItem('projects'))

    const userProjs = document.querySelector('.user-projs')

    userProjs.innerHTML = '';

    for(let key in projects){

        if (key !== 'Inbox' && key !== 'Today' && key !== 'This week'){

            const btns = document.createElement('div')
            const btn = document.createElement('button')

            btn.textContent = key;

            btns.classList.add('btns')
            btns.appendChild(btn)

            userProjs.appendChild(btns)

            renderTasksPerProject(btn)
        }
    }

}

export default renderProjects