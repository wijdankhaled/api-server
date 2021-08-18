'use strict';

const express = require('express');
const router = express.Router();
const {Clothes}=require ('../models/index');

router.get("/clothes", getClothes);
router.get('/clothes',getAll);
router.post('/clothes',create);
router.put("/clothes/:id", updateClothes);
router.delete("/clothes/:id", deleteClothes);

async function getAll(req, res) {
    let clothes = await Clothes.getAll();
    res.status(200).json(clothes);
}

async function getClothes(req, res) {
    const id = req.params.id;
    const clothesInfo = await Clothes.read(id);
    res.json({ clothesInfo });
  }

async function create(req, res) {
    let clothes = req.body;
    

    let clothesSet = await Clothes.create(clothes);
    res.status(201).json(clothesSet);
}

async function updateClothes(req, res) {
    const id = req.params.id;
    const data = req.body;
    const newClothes = await Clothes.update(id, data);
    res.json(newClothes);
  }
  
  async function deleteClothes(req, res) {
    const id = req.params.id;
    const deletedClothes = await Clothes.delete(id);
    res.json(deletedClothes);
  }

module.exports = router;