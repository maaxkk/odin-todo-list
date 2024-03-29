"use strict";

import Task from "./task";
import generateId from "./generateId";
import renderTasks from "./renderTasks";

export function createTask(projName) {

    const submitBtn = document.querySelector('.submit')

    submitBtn.dataset.key = `${projName}`
}

export default createTask