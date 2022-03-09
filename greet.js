function Greet(name) {
    if(typeof(name) === 'object') {
        let nameString = '';
        for(let i = 0; i < name.length; i++) {
            nameString += `, ${name[i]}`;
        }
        return `Hello${nameString}`;
    }
    if(name === undefined) {
        return `Hello there!`;
    }
    if(name === name.toUpperCase()) {
        return `HELLO ${name.toUpperCase()}!`;
    }
    return `Hello, ${name}.`;
}

module.exports = Greet;