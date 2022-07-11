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

// const triggerQuestions = () => {
//     return inquirer.prompt ([{
//         type: 'list',
//         name: 'newInput',
//         message: 'Do you have employee data to input?',
//         choices: [
//             'Yes',
//             'No'
//         ],
//     }])
//     .then(data => {
//         if (data.newInput === 'Yes') {
//         return gatherTeamInfo()}
//         else if (data.newInput === 'No') {
//         return console.log('Team Profile complete!')
//     }})
// };

function init () {

    function managerData () {
        inquirer.prompt([{ 
            type: 'input',
            name: 'name',
            message: "What is the team managers name?",
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
        allEmployees.push(manager)
    gatherTeamInfo()
    })
};

const gatherTeamInfo = () => {
        return inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'What is this team members role?',
            choices: [
                'Engineer',
                'Intern',
                'All employees have been input'
            ],
        }])
        .then(answers => {
        switch(answers.role) {
            case 'Engineer':
                engineerData();
            break;

            case 'Intern':
                internData();
            break;

            default:
                bringToPage();
                console.log("Team Portfolio complete!")
        }})};
        
function engineerData () {
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
            allEmployees.push(engineer)
            gatherTeamInfo();
        })       
    };
            
function internData () {
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
                allEmployees.push(intern)
                gatherTeamInfo();
            })
        };

function bringToPage () {
    
    // .then(() => 
        fs.writeFile('./dist/index.html', 
        generate(allEmployees), 
        err => {
            if(err) 
            throw err;
        })
    }
    managerData();
};

init();
