const express = require('express');
const router = express.Router();

const Driver = require('../../models/Driver');
router.get('/test', (req, res) => {
    res.json({msg: "driver Success"});
});


router.post('/adddriver', (req, res) => {
    
    const newDriver = new Driver({
      name: req.body.name,
      sourceLocation: req.body.sourceLocation,
      destLocation: req.body.destLocation,
      depTime: req.body.depTime,
      arrTime: req.body.arrTime
    });
    newDriver.save()
      .then(prod => res.json(prod))
      .catch(err => console.log(err)); 
});

router.post('/deleteDriver', (req, res) => {
  Driver.deleteOne({_id: req.body.id})
    .then(driver => {
      if(!driver) {
        return res.status(404).json({msg: "No such Driver to delete"})
      }
      console.log(driver);
      return res.json({msg: "Successfully deleted", _id: req.body.id})
    })
})

router.get('/getdrivers', (req, res) => {
  Driver.find({})
    .then(drivers => {
      if(!drivers) {
        return res.status(400).json()
      } else {
        return res.json(drivers)
      }
    });
})
module.exports = router;