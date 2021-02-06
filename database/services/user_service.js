var env = require('../config/env');

function user_service(db, indexRouter) {
    
    /**
     * Get all users
     */
    indexRouter.get('/users', function(req, res, next) {
        db.users.findAll()
            .then(users => {
                console.log(JSON.stringify(users));  // Print out all users in database to the console in JSON format
                res.send(JSON.stringify(users));     // Print out all users in database to the specified URL in JSON format
            })
    });
    
    
    /**
     * Get one user by ID
     */
    indexRouter.get('/users/:id', function(req, res, next) {
        const id = req.params.id;       // Assigns id parameter taken from the HTTP request and assigns it to const id
        db.users.findOne({
            where: {id: id}             // Find the user that matches the given id
        }).then(users => {
            res.send(JSON.stringify(users));              // Print out the user to the specified URL in JSON format
        })
    });
    
    
    /**
     * TASK 1: Create a new handler that returns a user given a first and last name
     */
    
    
    
    /**
     * TASK 2: Follow along the slides and write POST request:
     * Curl command to test POST
     * curl -d '{"firstName":"POSTFirstName", "lastName": "POSTLastName"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user
     * curl -d firstName=POSTFirstName -d lastName=POSTLastName -H "Content-Type: application/json" -X POST http://localhost:3000/user
     */
    
    
    
    /**
     * Update user given ID
     * Curl command to test PUT
     * curl -d '{"firstName":"PUTFirstName", "lastName": "PUTLastName"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/user/update/1
     * curl -d firstName=PUTFirstName -d lastName=PUTLastName -X PUT http://localhost:3000/user/update/1
     */
    indexRouter.put('/user/update/:id', function(req, res, next){
        const id = req.params.id;
        db.users.findOne({
            where: {id: id}
        }).then(user => {
            user.update(req.body)
        }).then(updated_user => res.send(updated_user))
    });
    
    
    
    /**
     * TASK 3: Create a new handler that updates a user given a first and last name
     * Construct your own curl command to test!
     */
    
    
    
    /**
     * TASK 4: Create a new handler that deletes a user given an ID
     * Curl command to test DELETE
     * curl -X DELETE http://localhost:3000/user/1
     */
}

module.exports = user_service;
