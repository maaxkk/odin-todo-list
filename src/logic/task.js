"use strict";

export function Task(title, duedate, priority, description){
    return{
        id: 0,
        title,
        duedate,
        priority,
        description,
    }
}

export default Task