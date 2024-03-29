"use strict";


import renderTasksPerProject from "./renderTasksPerProj";
import createTask from "./createTask";

export function renderProjects(){

    const projects = JSON.parse(localStorage.getItem('projects'))

    const userProjs = document.querySelector('.user-projs')

    const mainProjects = document.querySelector('.main-proj')

    mainProjects.innerHTML = '';
    userProjs.innerHTML = '';

    for(let key in projects){

        const btns = document.createElement('div')
        const btn = document.createElement('button')

        btn.textContent = key;

        btns.classList.add('btns')
        btns.appendChild(btn)

        if(key === 'Inbox' || key === 'Today' || key === 'This week'){
            mainProjects.appendChild(btns)
        } else {
            userProjs.appendChild(btns)
        }

        renderTasksPerProject(btn)
    }

}

export default renderProjects