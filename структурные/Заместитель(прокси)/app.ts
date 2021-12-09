interface Project{
   run():void
}

class RealProject implements Project{
    private url:string;

    public loadLink():void{
        console.log('Проект качается по ссылке: '+this.url);
    }
    constructor(url:string){
        this.url = url
        this.loadLink()
    }
    public run(): void {
        console.log('Проект запускается');
    }
}

class ProxyProject implements Project{
    private url:string;
    private realProject:RealProject

    constructor(url:string){
        this.url = url
    }
    public run(): void {
        if(this.realProject == null){
            this.realProject = new RealProject(this.url)
        }
        this.realProject.run()
    }
}

let project:Project = new ProxyProject('https//.......');
project.run()