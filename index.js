const inquirer = require('inquirer')
inquirer

const startReadme = "Welcome to the Professional Readme Generator.<br>Let's build a perfect Readme file for your projects using the information you provide"

console.log(startReadme)
const userInput =()=>
  inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'Whats the title of your project',

    },

    {
        type:'input',
        name:'description',
        message:'Please enter a brief description of your project',

    },

    {
        type:'input',
        name:'installation',
        message:'Please the installation instructions',

    },

    {
        type:'input',
        name:'usage',
        message:'Enter a brief description of the usage of this project',

    },

    {
        type:'input',
        name:'contribution',
        message:'Please confirm if you are open to contributions and what would be the guidelines to follow',

    },

    {
        type:'input',
        name:'tests',
        message:'Describe the instructions for running tests',

    },

    {
        type:'input',
        name:'',
        choices:['ISC','CC','MIT','GNU','None']
        message:,

    },
    
])