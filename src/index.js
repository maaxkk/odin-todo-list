"use strict";

// TODO
// 1) Details button ------> Done
// 2) Done button -------> Done
// 3) Fix Today This week tasks -----> Done
// 4) Fix problem when showing tasks -----> Done
// 5) Make clickable main buttons ----> Done
// 6) Hide button in Today and This week -----> Done
// 7) Add function to remove Project -----> Done
// 8) Add function to edit task ----> Done

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

