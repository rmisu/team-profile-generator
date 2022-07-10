const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./src/generatePage');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const questions = {
    role: 'What is the role of this new employee?',
    name: 'What is the name of this employee?',
    email: 'What is the email of this employee?',
    id: 'What is their employee ID?',
    office: 'What is the office number of this employee?',
    github: 'What is the GitHub username of this employee?',
    school: 'What school is this employee attending?',
}
const allEmployees = [];

const gatherTeamInfo = () => {
        return inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: questions.role,
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'All employees have been input'
            ]
    }])
    .then(answers => {
        switch(answers.role) {
            case 'Manager':
                inquirer.prompt([{ 
                    type: 'input',
                    name: 'name',
                    message: questions.name,
                },
                {
                    type: 'input',
                    name: 'id',
                    message: questions.id,
                },
                {
                    type: 'input',
                    name: 'email',
                    message: questions.email,
                },
                {
                    type: 'input',
                    name: 'office',
                    message: questions.office,
                }
            ])
            .then(answers => {
                const manager = new Manager(answers.role, answers.name, answers.id, answers.email, answers.office);
                allEmployees.push(manager)});
            break;
            case 'Engineer':
                inquirer.prompt([{ 
                    type: 'input',
                    name: 'name',
                    message: questions.name,
                },
                {
                    type: 'input',
                    name: 'id',
                    message: questions.id,
                },
                {
                    type: 'input',
                    name: 'email',
                    message: questions.email,
                },
                {
                    type: 'input',
                    name: 'github',
                    message: questions.github,
                }
            ])
            .then(answers => {
                const engineer = new Engineer(answers.role, answers.name, answers.id, answers.email, answers.github);
                allEmployees.push(engineer)});
            break;
            case 'Intern': 
                inquirer.prompt([{ 
                    type: 'input',
                    name: 'name',
                    message: questions.name,
                },
                {
                    type: 'input',
                    name: 'id',
                    message: questions.id,
                },
                {
                    type: 'input',
                    name: 'email',
                    message: questions.email,
                },
                {
                    type: 'input',
                    name: 'school',
                    message: questions.school,
                }
            ])
            .then(answers => {
                const intern = new Intern(answers.role, answers.name, answers.id, answers.email, answers.school);
                allEmployees.push(intern)});
            break;
            default: 
    }})};
    //     function newManager() {
    //         inquirer.prompt([{ 
    //             type: 'input',
    //             name: 'managerName',
    //             message: questions.name,
    //         },
    //         {
    //             type: 'input',
    //             name: 'managerID',
    //             message: questions.id,
    //         },
    //         {
    //             type: 'input',
    //             name: 'managerEmail',
    //             message: questions.email,
    //         },
    //         {
    //             type: 'input',
    //             name: 'office',
    //             message: questions.office,
    //         }
    //     ])
    //     .then(answers => {
    //         const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.office);
    //         allEmployees.push(manager);
    //         teamInfo();
    // })};
//     function newEngineer() {
//         inquirer.prompt([{
//             type: 'input',
//             name: 'engineerName',
//             message: questions.name,
//         },
//         {
//             type: 'input',
//             name: ''
//         }
//     ])
// };

// function writeHTML () {
//     const generateHTML = generate(allEmployees)
//     .then(() => fs.writeFile('./dist/index.html',
//     generateHTML(),
//     function(err){
//         if(err) 
//         throw err;
//     })) 
// };

function init () {
    gatherTeamInfo()
    .then(() => 
        fs.writeFile('./dist/index.html', 
        generate(allEmployees), 
        err => {
            if(err) 
            throw err;
        }))
    };

init();