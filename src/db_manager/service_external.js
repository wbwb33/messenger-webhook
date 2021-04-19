const db = require('./config');

const create = (req, res) => {
  db.serialize(() => {
    db.run('INSERT INTO msg(id,messages) VALUES(?,?)', [req.params.id, req.params.message], function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log("New messages has been added into the database with ID = " + req.params.id + " and Message = " + req.params.message);
      return res.send("New messages has been added into the database with ID = " + req.params.id + " and Message = " + req.params.message);
    });
  });
};

const readOne = (req,res) => {
  db.serialize(()=>{
    db.each('SELECT id, messages, users FROM msg WHERE id =?', [req.params.id], function(err,row){     
      if(err){
        return console.error(err.message);
      }
      return res.send(row);
    });
  });
};

const readAll = (req,res) => {
  db.serialize(()=>{
    db.all('SELECT id, messages, users FROM msg', [], function(err,rows){  
      if(err){
        return console.error(err.message);
      }
      return res.send(rows);
    });
  });
};

const updateOne = (req,res) => {
  db.serialize(()=>{
    db.run('UPDATE msg SET messages = ? WHERE id = ?', [req.params.message,req.params.id], function(err){
      if(err){
        return console.error(err.message);
      }
      return res.send("Entry updated successfully");
    });
  });
};

const deleteOne = (req,res) => {
  db.serialize(()=>{
    db.run('DELETE FROM msg WHERE id = ?', req.params.id, function(err) {
      if (err) {
        return console.error(err.message);
      }
      return res.send("Entry deleted");
    });
  });
};

module.exports = {
  create,readOne,readAll,updateOne,deleteOne
}