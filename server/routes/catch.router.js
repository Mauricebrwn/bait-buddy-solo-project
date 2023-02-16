const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "catch"
    ORDER BY "catch" DESC;`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all catches', err);
        res.sendStatus(500)
      })
  
  });
  router.get('/:id', (req, res) => {
    const idOfCatchToGet = req.params.id;
    const sqlText = `
      SELECT * FROM "catch"
        WHERE "id"=$1;
    `
    const sqlValues = [idOfCatchToGet];
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        res.send(dbRes.rows[0])
      })
      .catch((dbErr) => {
        console.log('error getting individual catch', dbErr);
        res.sendStatus(500);
      })
  })
router.post('/', (req, res) => {
    console.log(req.body);
    const insertCatchQuery= `
    INSERT INTO "catch" ("fish_type", "fish_length", "fish_weight", "lure_bait", "time")
    VALUES($1, $2, $3, $4, $5);
    `
    pool.query(insertCatchQuery, [req.body.fish_type, req.body.fish_length, req.body.fish_weight, req.body.lure_bait, req.body.time])
    .then(result => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('error inserting catch', err);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  let sqlQuery = `
  DELETE FROM "catch"
  WHERE id = $1;
  `
  const sqlVal = [id]
  pool.query(sqlQuery, sqlVal)
  .then((dbRes) => {res.sendStatus(200)})
    .catch((error) => {
      console.log('Error making DELETE from catch:', error);
      res.sendStatus(500);
    }); 
});

router.put('/:id', (req, res) => {
  const idToUpdate = req.params.id;
  const sqlText = `
    UPDATE "catch"
      SET fish_type=$1, fish_length=$2, fish_weight=$3, lure_bait=$4, time=$5
      WHERE id=$6
  `;
  pool.query(sqlText, [req.body.fish_type, req.body.fish_length, req.body.fish_weight, req.body.lure_bait, req.body.time, idToUpdate])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});



module.exports = router;