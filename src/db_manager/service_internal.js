const db = require('./config');

const create = (message, user) => {
  db.serialize(() => {
    db.run('INSERT INTO msg(messages,users) VALUES(?,?)', [message, user], function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log("New messages has been added into the database with user = " + user + " and Message = " + message);
      return ("New messages has been added into the database with user = " + user + " and Message = " + message);
    });
  });
};

module.exports = {
  create
}