const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM "trip"
  ORDER BY "trip" DESC;`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all trips', err);
      res.sendStatus(500)
    })

});
router.post('/', (req, res) => {
  console.log(req.body);
  const insertTripQuery= `
  INSERT INTO "trip" ("lake_name", "date", "is_complete")
  VALUES($1, $2, $3);
  `
  pool.query(insertTripQuery, [req.body.lake_name, req.body.date, req.body.is_complete])
  .then(result => {
      res.send(result.rows);
  })
  .catch((err) => {
      console.log('error inserting trip', err);
      res.sendStatus(500);
  });
});

  module.exports = router;