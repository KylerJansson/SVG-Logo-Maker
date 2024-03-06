const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function promptUser() {
    const questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like?',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for the shape:',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for the logo (up to 3 characters):',
            validate: input => input.length <= 3 || 'Text must be up to 3 characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text:',
        }
    ];

    return inquirer.prompt(questions);
}

function generateSVG(shape, shapeColor, text, textColor) {
    const shapes = {
        Circle: new Circle(shapeColor),
        Triangle: new Triangle(shapeColor),
        Square: new Square(shapeColor)
    };

    const selectedShape = shapes[shape];
    const svgShape = selectedShape.render();

    const svgLogo = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${svgShape}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
    `;

    return svgLogo;
}

async function main() {
    try {
        const answers = await promptUser();
        const { shape, shapeColor, text, textColor } = answers;

        const svgContent = generateSVG(shape, shapeColor, text, textColor);

        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg successfully!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();