const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
// const multer = require('multer')
const OrchidModel = require('../models/orchidModel');
module.exports = router;

// TODO: upload images to db

// POST method
router.post('/post', async (req, res) => {
    const orchidData = new OrchidModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        isSpecies: req.body.isSpecies,
        isHybrid: req.body.isHybrid,
        distribution: req.body.distribution,
        temperature: req.body.temperature,
        light: req.body.light,
        waterAndHumid: req.body.waterAndHumid,
        fertilizer: req.body.fertilizer,
        potting: req.body.potting,
        author: req.body.author
    })
    try {
        const dataToSave = await orchidData.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// GET all orchids
router.get('/getAll', async (req, res) => {
    try {
        const data = await OrchidModel.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// GET by id
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await OrchidModel.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Update by id
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await OrchidModel.findByIdAndUpdate(id, updatedData, options)
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update by name
router.patch('/update/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const updatedData = req.body;
        const options = { new: true };
    
        const result = await OrchidModel.findOneAndUpdate(name, updatedData, options);
        res.send(result); 
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

// Delete by id
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await OrchidModel.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted.`);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete by name
router.delete('/delete/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const data = await OrchidModel.findOneAndDelete(name);
        res.send(`Document with ${data.name} has been deleted.`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})