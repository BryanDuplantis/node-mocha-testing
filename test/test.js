var path = require('path');
var should = require("chai").should();
var Animal = require(path.join(process.cwd() + '/lib/animal'));
var cp = require('child_process');

describe('Mocha + Chai', function () {
  it('truthyness', function () {
    true.should.equal(true);
    false.should.be.false;
  });
});

describe('CLI', function () {
  it('should thank for me downloading', function () {
    console.log('childprocess');
    cp.execFile('./app.js', function (err, stdout) {
      // console.log('err', err);
      // console.log('stdout', stdout);
      stdout.should.eql('Thanks for downloading my app!!');
      done();
    });
  });
});

describe('animal', function () {
  describe('constructor', function () {
    it('should return an animal object', function () {
      var animal = new Animal();

      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    });
    it('should be alive', function () {
      var animal = new Animal();

      animal.isAlive.should.be.true;
    });
    it('should have 100% health', function () {
      var animal = new Animal();
      animal.health.should.eql(1);
    });
    it('should accept a type', function () {
      var cat = new Animal('cat');
      var dog = new Animal('dog');

      cat.type.should.eql('cat');
      dog.type.should.eql('dog');
    });
  });

  describe('#updateHealthStats()', function () {
    it('should change the health', function () {
      var animal = new Animal();
      var health = animal.health;

      animal.updateHealthStats();
      animal.health.should.not.eql();
    });
  });

  describe('#beCute()', function () {
    it('should be a prototype method', function () {
      var animal = new Animal();
      animal.should.respondTo('beCute');
      animal.should.not.have.ownProperty('beCute');
    });

    it('should make the animal cute', function () {
      var animal = new Animal();
      should.not.exist(animal.isCute);
      animal.beCute();
      animal.isCute.should.be.true;
    });
  });
});

describe('Array', function () {
  describe('#filter()', function () {
    it('should return an array of items that return truthy in the inner fn', function () {
      var array  = [1,2,3,4,5];

      var output = array.filter(function (item) {
        return item % 2;
    });

      output.should.eql([1,3,5]);
    });
  });


  describe('#map()', function () {
    it('should keep the same length', function () {
      var array = [1,2,3,4,5];

      var length = array.map(function (item) {
        return false;

      }).length;

      length.should.eql(array.length);
    });

    it('should not mutate the original array', function () {
      var array = [1,2,3,4,5];

      array.map(function (item) {
        return false;
      });

      array.should.eql([1,2,3,4,5]);
    });

  });
});
