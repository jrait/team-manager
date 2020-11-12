const PlayerController = require('../controllers/teamcontroller')

module.exports = app =>{
    app.get('/api/players',PlayerController.allPlayers);
    app.post('/api/players/create',PlayerController.createPlayer);
    app.delete('/api/players/delete/:id',PlayerController.deletePlayer);
    app.put('/api/players/update/:id',PlayerController.updatePlayer);
}