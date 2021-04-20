const db = require('./config');

/** Create operation */
const create = (message, user) => {
  db.serialize(() => {
    db.run('INSERT INTO msg(messages,users) VALUES(?,?)', [message, user], function (err) {
      if (err) {
        return console.error(err.message);
      }
    });
  });
};

module.exports = {
  create
}