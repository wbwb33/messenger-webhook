const express = require('express');
const service = require('../db_manager/service_external');
const router = express.Router();

/* DELETE message by Id */
router.delete('/:id', (req, res, next) => {
  service.deleteOne(req,res);
});

/* GET message by Id */
router.get('/:id', (req, res, next) => {
  service.readOne(req,res);
});

/* GET all messages */
router.get('/', (req, res, next) => {
  service.readAll(req,res);
});

module.exports = router;
