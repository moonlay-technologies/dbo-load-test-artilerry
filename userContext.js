const { faker } = require('@faker-js/faker');

function createRandomUser(userContext, events, done) {
  userContext.vars.email = faker.internet.email();
  userContext.vars.uuid = faker.datatype.uuid();
  done();
}

module.exports = { createRandomUser }

