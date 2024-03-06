const { Circle, Triangle, Square } = require('./shapes');

describe('Shape classes', () => {
    describe('Circle', () => {
        test('should correctly render SVG string for Circle', () => {
            const color = 'red';
            const circle = new Circle(color);
            expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
        });
    });

    describe('Triangle', () => {
        test('should correctly render SVG string for Triangle', () => {
            const color = 'blue';
            const triangle = new Triangle(color);
            expect(triangle.render()).toBe(`<polygon points="150,0 260,170 40,170" fill="${color}" />`);
        });
    });

    describe('Square', () => {
        test('should correctly render SVG string for Square', () => {
            const color = 'green';
            const square = new Square(color);
            expect(square.render()).toBe(`<rect x="75" y="25" width="150" height="150" fill="${color}" />`);
        });
    });
});
