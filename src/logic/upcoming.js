"use strict";



export function getUpcomingTasks(){
    const projects = JSON.parse(localStorage.getItem('projects'))
    for (let key in projects) {
        for (let i = 0; i < projects[key].length; i++) {
            if (key === 'This week') return;
            const [y, m, d] = projects[key][i].duedate.split('-')
            const todayDate = Date.now()
            const unixDate = new Date().setFullYear(y, m-1, d)
            const weekInMilliseconds = 1000*60*60*24*7
            const difference = unixDate - todayDate
            let inArray = false;
            if (difference >= 0 && weekInMilliseconds >= difference){
                for (let j = 0; j < projects['This week'].length; j++) {
                    if(projects[key][i].id === projects['This week'][j].id) inArray = true;
                }
            }
            if (inArray === false){
                projects['This week'].push(projects[key][i])
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        }
    }
}

export function getTodayTasks(){
    const projects = JSON.parse(localStorage.getItem('projects'))
    for (let key in projects) {
        for (let i = 0; i < projects[key].length; i++) {
            if (key === 'Today') return;
            const [y, m, d] = projects[key][i].duedate.split('-')
            const todayDate = Date.now()
            const unixDate = new Date().setFullYear(y, m-1, d)
            const dayInMilliseconds = 1000*60*60*24
            const difference = unixDate - todayDate
            let inArray = false;
            if (difference >= 0 && dayInMilliseconds >= difference){
                for (let j = 0; j < projects['Today'].length; j++) {
                    if(projects[key][i].id === projects['Today'][j].id) inArray = true;
                }
            }
            if (inArray === false){
                projects['Today'].push(projects[key][i])
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        }
    }
}

export default {getTodayTasks, getUpcomingTasks}