const request = require('supertest');
const routesProject = require('../routes/index');

describe('GET request testing', () => {
    it('should return 200', () => {
        return request(routesProject)
            .get('/')
            .expect(200);
    });

    it('should return 200', () => {
        return request(routesProject)
            .get('/users')
            .expect(200);
    });

    it('should return 200', () => {
        return request(routesProject)
            .get('/view')
            .expect(200);
    });

    it('should return 200', () => {
        return request(routesProject)
            .get('/update/1')
            .expect(200);
    });

    it('should return 200', () => {
        return request(routesProject)
            .get('/delete/1')
            .expect(200);
    });

    it('should return 200', () => {
        return request(routesProject)
            .get('/create')
            .expect(200);
    });

    it('should return 200', () => {
        return request(routesProject)
            .post('/users')
            .expect(200);
    });

    it('should return 200', () => {
        return request(routesProject)
            .post('/update/1')
            .expect(200);
    });
})