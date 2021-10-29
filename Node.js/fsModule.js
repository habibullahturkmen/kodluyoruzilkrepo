const fs = require('fs');

const json = {
    "name": "Employee 1 Name",
    "salary": 2000
}

function creatJSON() {
    fs.writeFile('employees.json', JSON.stringify(json, null, 2), 'utf8', (error, data) => {
        if (error) {
            console.log(error);
        }
        console.log('write to file complete');
    });
}

function readJSON() {
    fs.readFile('employees.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
        }
        console.log(data);
        console.log('read file complete');
    });
}

function updateJSON() {
    const employees = './employees.json';
    const jsonFile = require(employees);

    jsonFile.name = 'Habib';
    jsonFile.salary = 10000;

    fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2) , (error) => {
        if (error) {
            console.log(error);
        }
        console.log('update completed');
    });
}

function deleteJSON() {
    fs.unlink('employees.json', (error) => {
        if (error) {
            console.log(error);
        }
        console.log("file deletion complete");
    });
}

// creatJSON();
// readJSON();
// updateJSON();
// deleteJSON();