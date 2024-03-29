"use strict";

import renderProjects from "./renderProjects";
import renderTasksPerProject from "./renderTasksPerProj";

export function addProject() {

    const addProjBtn = document.querySelector('.add-proj')

    addProjBtn.addEventListener('click', function (event) {

        const projTitle = document.querySelector('.proj-title')
        const projects = JSON.parse(localStorage.getItem('projects'));

        if (projTitle.value in projects) {
            alert('Project with this name already exists!')
            return;
        }

        if (projTitle.value === '') {
            alert('It cant be empty')
            return;
        }

        projects[projTitle.value] = [];

        projTitle.value = ''

        localStorage.setItem('projects', JSON.stringify(projects))

        renderProjects()
    })
}

export default addProject