const inq = require('inquirer')

class Shape {
    constructor() {
        this.questions = [
            {
                type: 'input',
                message: 'Enter between 1 an 3 characters:', // TODO: figure out how to limit to 1-3 chars
                name: 'text'
            },
            {
                type: 'input',
                message: 'For the text color, enter a color keyword or hexiecimal number:',
                name: 'textColor'
            },
            {
                type: 'list',
                choices: ['Circle', 'Triangle', 'Square'],
                message: 'Choose a shape:',
                name: 'shape'
            },
            {
                type: 'input',
                message: 'For the shape color, enter a color keyword or hexidecimal number:',
                name: 'shapeColor'
            }
        ]
    }

    getInput() {
        inq.prompt(this.questions)
        .then((response) => console.log(response))
    }

    getShape() {
        getInput
    }

    render() {
        const response = "Render test worf"
        return response
    }
}

// class Triangle extends Shape;

module.exports = Shape;