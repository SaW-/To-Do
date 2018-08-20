let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
var email="test@test.co";
var password="test";
var token;
describe('/POST signup', () => {
    it('send username and password', (done) => {
      let data = {
          email: email,
          password: password,
          provider: 'email',
          name:'test'
      }
      chai.request(server)
          .post('/api/v1/user/signup')
          .send(data)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
            done();
          });
    });

});

describe('/POST signin', () => {
    it('send username and password', (done) => {
      let data = {
          email: email,
          password: password,
          provider: 'email'
      }
      chai.request(server)
          .post('/api/v1/user/signin')
          .send(data)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('token');
              token = res.body.token;
            done();
          });
    });

});

describe('/POST Todo', () => {
    it('it should not POST a Todo without field', (done) => {
      let Todo = {
      }
          chai.request(server)
          .post('/api/v1/to-do/')
          .set('Authorization', 'Bearer '+token)
          .send(Todo)
          .end((err, res) => {
              res.should.have.status(400);
              res.body.should.be.a('object');
              res.body.should.have.property('error');
            done();
          });
    });
    it('it should POST a Todo ', (done) => {
      let Todo = {
        Subject: "Test Subject",
        comment: "Test Comment",
      }
          chai.request(server)
          .post('/api/v1/to-do/')
          .set('Authorization', 'Bearer '+token)
          .send(Todo)
          .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.have.property('Subject');
              res.body.should.have.property('comment');
            done();
          });
    });
});

describe('/GET todos', () => {
    it('it should GET all the todos', (done) => {
      chai.request(server)
          .get('/api/v1/to-do/')
          .set('Authorization', 'Bearer '+token)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
            done();
          });
    });
});


