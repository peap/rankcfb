var app = require('../../server');
var request = require('supertest');
var should = require('should');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Ranking = mongoose.model('Ranking');

var user, ranking;

describe('Ranking controller unit tests:', function() {
    beforeEach(function(done) {
        user = new User({
            firstName: 'Some',
            lastName: 'Name',
            email: 'mail@example.com',
            username: 'usrn',
            password: 'pass>=6',
        });
        user.save(function() {
            ranking = new Ranking({
                name: 'My Ranking',
                description: 'Test ranking',
                formula: 'x + y',
                published: true,
                user: user,
            });
            ranking.save(function(err) {
                done();
            });
        });
    });

    describe('Testing the GET methods', function() {
        it('Should be able to get the list of rankings', function(done) {
            request(app).get('/api/rankings/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    res.body.should.be.an.Array.and.have.lengthOf(1);
                    res.body[0].should.have.property('name', ranking.name);
                    res.body[0].should.have.property('description', ranking.description);
                    res.body[0].should.have.property('formula', ranking.formula);
                    res.body[0].should.have.property('published', ranking.published);
                    done();
                })
            ;
        });
    });

    afterEach(function(done) {
        Ranking.remove().exec();
        User.remove().exec();
        done();
    });
});
