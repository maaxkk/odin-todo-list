"use strict";


import renderTasksPerProject from "./renderTasksPerProj";
import createTask from "./createTask";
import {removeProject} from "./btnsLogic";

export function renderProjects(){

    const projects = JSON.parse(localStorage.getItem('projects'))

    const userProjs = document.querySelector('.user-projs')

    const mainProjects = document.querySelector('.main-proj')

    mainProjects.innerHTML = '';
    userProjs.innerHTML = '';

    for(let key in projects){

        const btns = document.createElement('div')
        const btn = document.createElement('button')

        const btnRemove = document.createElement('button')
        btnRemove.innerHTML = `<i class="fa fa-remove"></i>`
        btnRemove.style.marginLeft = '6px'
        btnRemove.dataset.project = `${key}`

        removeProject(btnRemove);

        btn.textContent = key;

        btns.classList.add('btns')

        if(key === 'Inbox' || key === 'Today' || key === 'This week'){
            mainProjects.appendChild(btns)
            btns.append(btn)
        } else {
            userProjs.appendChild(btns)
            btns.append(btn, btnRemove)
        }

        renderTasksPerProject(btn)
    }

}

export default renderProjects