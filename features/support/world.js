var World, chai, chaiAsPromised;
chai = require('chai');
chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

World = function World() {
    chai.use(chaiAsPromised);
    this.expect = chai.expect;
};

module.exports.World = World;