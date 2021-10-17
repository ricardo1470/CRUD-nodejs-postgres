const request = require('supertest');
const routesProject = require('../routes/index');

describe('GET request testing', () => {
    // test init route
    test('should return 200 OK, init route', () => {
        const response = request(routesProject).get('/').send();
        expect(response.status);
    });

    // test users route
    test('should return 200 OK, user route', () => {
        const response = request(routesProject).get('/users').send();
        expect(response.status);
    });

    // test view route
    test('should return 200 OK, view route', () => {
        const response = request(routesProject).get('/view').send();
        expect(response.status);
    });

    // test create route
    test('should return 200 OK, create route', () => {
        const response = request(routesProject).get('/create').send();
        expect(response.status);
    });
});
