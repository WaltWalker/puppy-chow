const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You have to have a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Just enter your Username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter Github Project Link.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Just enter your project link');
                    return false;
                }
            }
        },
        {
            type: 'email',
            name: 'email',
            message: 'Enter E-mail Here',     
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for this project?',
            validate: motivationInput => {
                if (motivationInput) {
                    return true;
                } else {
                    console.log('Come on, give us your drive!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build this?',
            validate: whyInput => {
                if (whyInput) {
                    return true;
                } else if (whyInput === "Because it was a homework assignment.") {
                    console.log('Homeworks the wrong answer sorry try again!')
                    return false;
                } else {
                    console.log('You can do better that that!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does this solve?',
            validate: problemInput => {
                if (problemInput) {
                    return true;
                } else {
                    console.log('');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'learned',
            message: 'What did you learn from this experience?',
            validate: learnedInput => {
                if (learnedInput) {
                    return true;
                } else {
                    console.log('');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? (Be specific)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console
                    .log(`
                    How would we ever use it if we 
                    don't even know how to run it!
                    `);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'How do we even use this?',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log(`Whats the point if we can't use it?`);
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'imageConfirm',
            message:'Would you like to add an image?',
            default: false,
        },
        {
            type: 'input',
            name: 'imageName',
            message: 'Please provide only the image name here. ',
            validate: imageInput => {
                if (imageInput) {
                    return true;
                } else {
                    console.log('Thats fine');
                    return true;
                }
            },
            when: hasImage('imageConfirm'),
                
            
        },
        {
            type: 'input',
            name: 'image',
            message: 'Please type path here in ".././." format.',
            when: hasImage('imageConfirm'),
        },
        {
            type: 'input',
            name: 'collab',
            message: 'Name collaborators if applicable.',
            validate: colabInput => {
                if (colabInput) {
                    return true;
                } else {
                    console.log('Sucks to be them!');
                    return true;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose which license type you want to use.',
            choices: ['MITT', 'GLA', 'N/A'],
        },

    ];

    
function hasImage(isTrue) {
    return function (data) {
        return data[isTrue];
    };
}
    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your README.md file has been made')
    });

};

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        console.log('Double checking,', data);
        console.log('Cool, now on to your README.')
        
        const markdown = generateMarkdown(data);
        console.log("Here's that README.");
        await writeToFile('README.md', markdown);
    }    catch(err) {
        console.log(err)
    }
};

// Function call to initialize app
init();
