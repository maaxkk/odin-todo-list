"use strict";

// TODO
// 1) Details button ------>
// 2) Done button ------->
// 3) Fix Today This week tasks -----> Done
// 4) Fix problem when showing tasks -----> Done

import './style/style.css';
import projects from "./logic/projects";
import addProject from "./logic/addProject";
import renderProjects from "./logic/renderProjects";
import showModal from "./logic/showModal";
import fillForm from "./logic/fillForm";

if(!localStorage.getItem('projects')){
    localStorage.setItem('projects', JSON.stringify(projects))
}

renderProjects()

showModal()

addProject()

fillForm()

