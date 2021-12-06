class JSDeveloper {
    writeCode() {
        console.log('JSDeveloper writes code');
    }
}
class PythonDeveloper {
    writeCode() {
        console.log('PythonDeveloper writes code');
    }
}
class JSDeveloperFactory {
    newdeweloper() {
        return new JSDeveloper();
    }
}
class PythonDeveloperFactory {
    newdeweloper() {
        return new PythonDeveloper();
    }
}
function newdeweloper(develorer) {
    switch (develorer) {
        case 'JS':
            return new JSDeveloperFactory();
        case 'Python':
            return new PythonDeveloperFactory();
    }
}
newdeweloper('Python').newdeweloper().writeCode();
newdeweloper('JS').newdeweloper().writeCode();
