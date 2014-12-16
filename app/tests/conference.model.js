var app = require('../../server.js');
var should = require('should');
var mongoose = require('mongoose');
var Conference = mongoose.model('Conference');

var conf;

describe('Conference model unit tests:', function() {
    beforeEach(function(done) {
        conf = new Conference({
            name: 'Big N',
            division: 'FBS',
        });
        conf.save();
        done();
    });

    describe('Testing the save method', function() {
        it('Should be able to save without problems', function() {
            conf.save(function(err) {
                should.not.exist(err);
            });
        });

        it('Should not be able to save a conference with no name', function() {
            conf.name = '';
            conf.save(function(err) {
                should.exist(err);
            });
        });

        it('Should not be able to save a conference with no division', function() {
            conf.division = '';
            conf.save(function(err) {
                should.exist(err);
            });
        });

        it('Should not be able to save a conference in a fake division', function() {
            conf.division = 'DIV';
            conf.save(function(err) {
                should.exist(err);
            });
        });
    });

    afterEach(function(done) {
        Conference.remove();
        done();
    });
});
