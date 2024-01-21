const Shape = require('../lib/shapes');

//
describe('Shape', () => {
    it('Should console log "Render Test"', () => {
        const response = 'Render test worf';
        const shape = new Shape();
        expect(shape.render()).toEqual(response);
    });

})