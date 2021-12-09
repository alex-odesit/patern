class RealProject {
    constructor(url) {
        this.url = url;
        this.loadLink();
    }
    loadLink() {
        console.log('Проект качается по ссылке: ' + this.url);
    }
    run() {
        console.log('Проект запускается');
    }
}
class ProxyProject {
    constructor(url) {
        this.url = url;
    }
    run() {
        if (this.realProject == null) {
            this.realProject = new RealProject(this.url);
        }
        this.realProject.run();
    }
}
let project = new ProxyProject('https//.......');
project.run();
