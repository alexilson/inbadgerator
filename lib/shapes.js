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

    renderText(text, text_color) {
        return `<text x="150" y="100" font-size="100" text-anchor="middle" fill="${text_color}">${text.toUpperCase()}</text>`
    }

    renderHeader () {
        return `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        `
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