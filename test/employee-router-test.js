const expect = require('chai').expect;
const app = require('../app');
const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Employee routes', () => {
    describe('GET /employees', () => {

        it('should respond with a 200 OK', (done) => {
            chai.request(app)
                .get('/employees')
                .end((err, res) => {
                    expect(res.status).to.equal(200)
                    done()
                });
        });
    });
});