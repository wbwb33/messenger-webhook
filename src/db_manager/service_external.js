const db = require('./config');

/** create operation */
const create = (req, res) => {
  db.serialize(() => {
    db.run('INSERT INTO msg(messages,users) VALUES(?,?)', [req.body.message, req.body.user], function (err) {
      if (err) {
        console.error(err.message);
        return res.sendStatus(400);
      }
      return res.send(`{ "id":${this.lastID}, "message":"${req.body.message}", "user":"${req.body.user}"}`);
    });
  });
};

/** Read One operation */
const readOne = (req,res) => {
  db.serialize(()=>{
    db.each('SELECT id, messages message, users user FROM msg WHERE id =?', [req.params.id], function(err,row){     
      if(err){
        console.error(err.message);
        return res.sendStatus(400);
      }
      return res.send(row);
    });
  });
};

/** Read All operation */
const readAll = (req,res) => {
  db.serialize(()=>{
    db.all('SELECT id, messages, users FROM msg', [], function(err,rows){  
      if(err){
        console.error(err.message);
        return res.sendStatus(400);
      }
      return res.send(rows);
    });
  });
};

/** Delete One operation */
const deleteOne = (req,res) => {
  db.serialize(()=>{
    db.run('DELETE FROM msg WHERE id = ?', req.params.id, function(err) {
      if (err) {
        console.error(err.message);
        return res.sendStatus(400);
      }
      return res.send("Entry deleted");
    });
  });
};

module.exports = {
  create,readOne,readAll,deleteOne
}