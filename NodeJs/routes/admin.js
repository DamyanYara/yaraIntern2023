const express = require('express');
const { json } = require('sequelize');

const router = express.Router();

const UsersServices = require('../controllers/admin');

function createUsersRoutes(pool){
    const usersServices = new UsersServices(pool);

    //list all users
    router.get('/', async(req,res) =>{
        const users = await usersServices.getAllUsers()
        res.json(users);
    });
    // list user based on its id
    router.get('/userId', async(req, res) =>{
        const {userId} = req.params;
        const user = await usersServices.getUserByID(userId)
        if(!user){
            res.status(404).json({error: 'User not found'});
        }else{
            res.json(user);
        }
    });
    //create user
    router.post('/', async(req, res) =>{
        const {email, password} = req.body;

        if(!email || !password){
            res.status(400).json({error: 'Email and password are required'});
            return;
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            res.status(400).json({error: 'Invalid email format'})
            return;
        }

        const user = await usersServices.createUser({email, password});
        res.status(201).json(user);
    });
    // update user
    router.put('/:userId', async(req, res) =>{
        const {userId} = req.params;
        const {email, password} = req.body;

        if(!email || !password){
            res.status(400).json({error: 'Email and password are required'});
            return;
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            res.status(400).json({error: 'Invalid email format'});
            return
        }

        const updaterUser = await usersServices.updaterUser(userId, {email, password});
        if(!updaterUser){
            res.status(404).json({error: 'User not found'});

        }else{
            res.json(updaterUser);
        }
    });

    //delete user
    router.delete('/:userId', async(req, res) =>{
        const {userId} = req.params;
        const deletedUser = await usersServices.deletedUser(userId);
        if(!deletedUser){
            res.status(404).json({error:'User not found'});
        }else{
            res.json(deletedUser);
        }
    });
    return router;

}


module.exports = createUsersRoutes;