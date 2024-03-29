"use strict";


export function getUpcomingTasks(){
    const projects = JSON.parse(localStorage.getItem('projects'))
    for (let key in projects) {
        if (key === 'This week') continue;
        outer: for (let i = 0; i < projects[key].length; i++) {
            const [y, m, d] = projects[key][i].duedate.split('-')
            const todayDate = Date.now()
            const unixDate = new Date().setFullYear(y, m - 1, d)
            const weekInMilliseconds = 1000 * 60 * 60 * 24 * 7
            const difference = unixDate - todayDate
            if (difference >= 0 && weekInMilliseconds >= difference) {
                for (let j = 0; j < projects['This week'].length; j++) {
                    if (projects[key][i].id === projects['This week'][j].id) continue outer;
                }
                projects['This week'].push(projects[key][i])
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        }
    }
}

export function getTodayTasks(){
    const projects = JSON.parse(localStorage.getItem('projects'))
    for (let key in projects) {
        if (key === 'Today') continue;
        outer: for (let i = 0; i < projects[key].length; i++) {
            const [y, m, d] = projects[key][i].duedate.split('-')
            const todayDate = Date.now()
            const unixDate = new Date().setFullYear(y, m-1, d)
            const dayInMilliseconds = 1000*60*60*24
            const difference = unixDate - todayDate
            if (difference >= 0 && dayInMilliseconds >= difference){
                for (let j = 0; j < projects['Today'].length; j++) {
                    if(projects[key][i].id === projects['Today'][j].id) continue outer;
                }
                projects['Today'].push(projects[key][i])
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        }
    }
}

export default {getTodayTasks, getUpcomingTasks}