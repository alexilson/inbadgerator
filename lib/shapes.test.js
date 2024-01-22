const Shape = require('../lib/shapes');

//
describe('Shape', () => {
    it('Should console log "Render Test"', () => {
        const response = 'Render test worf';
        const shape = new Shape();
        expect(shape.render()).toEqual(response);
    });
    it('Render Text should output SVG XML saying "TST" in white.', () => {
        const response = '<text x="150" y="100" font-size="100" text-anchor="middle" fill="white">TST</text>'
        const shape = new Shape();
        const render = shape.renderText('tst', 'white');
        expect(render).toEqual(response);
    });
    it('Render Header should output the SVG XML header tags.', () => {
        const response = `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        `
        const shape = new Shape();
        const render = shape.renderHeader();
        expect(render).toEqual(response);
    })

})