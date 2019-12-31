require('../data/database');
const express = require('express');
const router = express.Router();
const notesModel = require('../model/note');


// GET All Notes 

router.get('/', (req,res, next) => {
    notesModel.find({}, (err,docs) => {
    err? console.log(err) : res.send(docs);
    })
});

// GET by id 

router.get('/:id', (req,res,next) => {
notesModel.findOne({id:req.params.id}, (err,doc) =>{
err? console.log(err) : res.send(doc)
})
})


router.post('/', (req,res) => {
    console.log('post req')
    var note = new notesModel(req.body);
    note.save().then(() => console.log('Note Saved!'));
})


// router.delete('/', (req,res) => {
//     notesModel.findOneAndDelete({id: req.body.id}, (err) => {
//         err? console.log(err) : console.log(`note ${req.body.id} deleted!`)
//     })
// })



module.exports = router;


