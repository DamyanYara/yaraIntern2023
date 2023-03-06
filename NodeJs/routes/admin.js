const express = require('express');
const { json } = require('sequelize');

const router = express.Router();

const UsersServices = require('../controllers/admin');

function createUsersRoutes(pool){
    const usersServices = new UsersServices(pool);

    //list all users
    router.get('/', (req,res) =>{
        res.setHeader('Content-Type', 'application/json');
        //const users = usersServices.getAllUsers().then(users =>res.end(users))
        //res.json(users);
        console.log('blabalaadasdsadaf11231');
        res.end(156);
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

router.get('/', (req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    UsersServices.getAllUsers().then(users =>{
        console.log(users);
        res.status(200).json(users)});
    //res.json(users);
});

router.get('/:userId', async(req, res) =>{
    const {userId} = req.params;
    const user = await UsersServices.getUserByID(userId)
    if(!user){
        res.status(404).json({error: 'User not found'});
    }else{
        res.status(200).json(user);
    }
});

router.post('/', (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json({error: 'Email and password are required'});

        return;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        res.status(400).json({error: 'Invalid email format'})
        return;
    }

    UsersServices.createUser(email, password).then(user =>{
        res.status(201).json(user);
    }).catch(err=>{
        console.log(err);
    });
   
});



module.exports = router;