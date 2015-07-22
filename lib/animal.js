module.exports = Animal;

function Animal(type) {
  this.isAlive = true;
  this.isCute = false;
  this.type = type;
  this.health = 1;
};

Animal.prototype.beCute = function () {
  this.isCute = true;
};

Animal.prototype.updateHealthStats = function (cb) {
  var self = this;

// a setTimeout over 2000 ms won't pass
  setTimeout(function () {
    self.health = Math.random();
    cb();
  }, 2000);
}
