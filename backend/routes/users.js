const router = require('express').Router() 
let User = require('../models/user.model') 

//first router for get request
router.route('/').get((req, res) => {
    User.find() //gets all the users on the db and returns results in json format
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err)) // catching error
})

//second router for post request
router.route('/add').post((req, res) => {
    const username = req.body.username; // fetching the filled data from schema

    const newUser = new User({ username }) //creating new user instance
    
    newUser.save() //saving the new user to the db
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;