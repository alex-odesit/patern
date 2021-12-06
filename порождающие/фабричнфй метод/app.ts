interface Developer{
    writeCode()
}

class JSDeveloper implements Developer{
    writeCode():void{
       console.log('JSDeveloper writes code');
    }
}
class PythonDeveloper implements Developer{
    writeCode():void{
        console.log('PythonDeveloper writes code');
    }
}

interface DeveloperFactory{
    newdeweloper()
}

class JSDeveloperFactory implements DeveloperFactory{
    newdeweloper():JSDeveloper{
        return new JSDeveloper()
    }
}
class PythonDeveloperFactory implements DeveloperFactory{
    newdeweloper():PythonDeveloper{
        return new PythonDeveloper()
    }
}

function newdeweloper(develorer:string){
    switch(develorer){
        case 'JS':
            return new JSDeveloperFactory()
        case 'Python':
            return new PythonDeveloperFactory()
    }
}

newdeweloper('Python').newdeweloper().writeCode();
newdeweloper('JS').newdeweloper().writeCode();