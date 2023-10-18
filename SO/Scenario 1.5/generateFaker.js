const { faker } = require('@faker-js/faker');

function createRandomUser(userContext, events, done) {
  userContext.vars.email = faker.internet.email();
  userContext.vars.uuid = faker.datatype.uuid();

  //userContext.vars.date = `${faker.date.recent()}`.slice(0,10)
  //const currentDate = new Date().toJSON().slice(0, 10);
  done();
}

module.exports = { createRandomUser }

