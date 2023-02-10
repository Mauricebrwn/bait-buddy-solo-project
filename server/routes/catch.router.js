const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/catch', (req, res) => {
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


module.exports = router;