const NameModel = require('../models/NameModel')
const mongoose = require('mongoose');


module.exports.getName = async (req, res) => {
    const Name = await NameModel.find()
    res.send(Name)
}

module.exports.saveName = async (req, res) => {
    const { text } = req.body;

    if (!text || typeof text !== 'string') {
        return res.status(400).send({ error: 'Invalid input: "text" is required and must be a string' });
    }

    try {
        const newName = new NameModel({ text });
        await newName.save();
        console.log('Added Successfully:', newName);
        res.status(201).send(newName);
    } catch (error) {
        console.error('Error saving name:', error);
        res.status(500).send({ error: 'An error occurred while saving the name' });
    }
};

module.exports.UpdateName = async (req, res) => {
    const {_id,text}=req.body
    NameModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated Successfully..."))
    .catch((err)=>console.log(err))
};

module.exports.deleteNameID = async (req, res) => {
    const {_id } = req.body
    NameModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully..."))
    .catch((err)=>console.log(err))
};
