'use strict';

const express = require('express');
const router = express.Router();
const { Food } = require('../models/index');

router.get('/food', getOne);

// router.get('/food', getFood);
router.get('/food', getAllfood);
router.post('/order', createfood);
router.put("/food/:id", uptadeFood);
router.delete("/food/:id", deleteFood);

async function getAllfood(req, res) {
    let foods = await Food.getAll();
    res.status(200).json(foods);
}

async function createfood(req, res) {
    let food = req.body;
    //must have an email

    let foods = await Food.create(food);
    res.status(201).json(foods);
}



//   async function getFood(req, res) {
//     const id = parseInt(req.params.id);
//     let person = await Food.findOne({ where: { id: id } });
//     res.status(200).json(person);
// }

async function getOne(req, res){
  let id = parseInt(req.params.id);

  let food = await Food.getOne(id);
  res.status(200).json(food);
}


  async function uptadeFood(req,res){
      const id=req.params.id;
      const info=req.body;
      const newFood =await Food.update(id,info);
      res.json(newFood);
  }

  async function deleteFood(req, res) {
    const id = req.params.id;
    const deletedFood = await foodCollection.delete(id);
    res.json(deletedFood);
  }


module.exports = router;