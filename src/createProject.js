


let projects = [];

export default class project {
    constructor(name) {
        this.name = name
    }

    addProject () {
        projects.push(this)
    }

}

export {projects}