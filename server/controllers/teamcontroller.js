const Player = require('../models/player.model')

module.exports = {
    allPlayers: (req,res) =>{
        Player.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    createPlayer: (req,res) =>{
        Player.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    deletePlayer:(req,res) =>{
        Player.findOneAndDelete({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    updatePlayer:(req,res) =>{
        Player.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    }

}