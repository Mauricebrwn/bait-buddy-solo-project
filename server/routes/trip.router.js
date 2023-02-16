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

router.get('/:id', (req, res) => {
  const idOfTripToGet = req.params.id;
  const sqlText = `
    SELECT * FROM "trip"
      WHERE "id"=$1;
  `
  const sqlValues = [idOfTripToGet];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows[0])
    })
    .catch((dbErr) => {
      console.log('error getting individual trip', dbErr);
      res.sendStatus(500);
    })
})

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

router.delete('/:id', (req, res) => {
  const id = req.params.id
  let sqlQuery = `
  DELETE FROM "trip"
  WHERE id = $1;
  `
  const sqlVal = [id]
  pool.query(sqlQuery, sqlVal)
  .then((dbRes) => {res.sendStatus(200)})
    .catch((error) => {
      console.log('Error making DELETE from trip:', error);
      res.sendStatus(500);
    }); 
});

router.put('/:id', (req, res) => {
  const idToUpdate = req.params.id;
  const sqlText = `
    UPDATE "trip"
      SET "lake_name"=$1, "date"=$2, is_complete=$3
      WHERE id=$4
  `;
  pool.query(sqlText, [req.body.lake_name,req.body.date, req.body.is_complete, idToUpdate])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

  module.exports = router;