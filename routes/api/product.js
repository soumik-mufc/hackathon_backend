const express = require('express');
const router = express.Router();

//Load Product Model
const Product = require('../../models/Product');

router.get('/test', (req, res) => {
    res.json({msg: "Product Success"});
});

router.post('/addproduct', (req, res) => {
    
    const newProduct = new Product({
      name: req.body.name,
      sourceLocation: req.body.sourceLocation,
      destLocation: req.body.destLocation,
      depTime: req.body.depTime,
      arrTime: req.body.arrTime
    });
    newProduct.save()
      .then(prod => res.json(prod))
      .catch(err => console.log(err)); 
});

router.post('/deleteproduct', (req, res) => {
  Product.deleteOne({_id: req.body.id})
    .then(product => {
      if(!product) {
        return res.status(404).json({msg: "No such Product to delete"})
      }
      console.log(product);
      return res.json({msg: "Successfully deleted", _id: req.body.id})
    })
})

router.get('/getproducts', (req, res) => {
  Product.find({})
    .then(products => {
      if(!products) {
        return res.status(400).json()
      } else {
        return res.json(products)
      }
    });
})
module.exports = router;