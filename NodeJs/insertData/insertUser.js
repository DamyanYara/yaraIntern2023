// Insert Values for User:
const bcrypt = require('bcrypt');
//const { Pool } = require('pg');
const User = require('../models/user');

module.exports = async(email, password) => {
    await User.create({
        email:email,
        password:password,
    })
};
   /*
    const email = 'user@example.com';
    const password_hash = 'myPassword123';
    const unique_id = 'ABCDEF';
    const rights = 'Admin';

    const salt = 5;
    bcrypt.genSalt(salt, (err, salt) =>{
   if(err){
    console.error('Error generating salt', err);
   }else{
    bcrypt.hash(password_hash, salt, (err,hash) =>{
        if(err){
            console.error('Erorr hashing password');
        }else{
            const query = {
                text: 'INSERT INTO users(email, password_hash, unique_identification, rights) VALUES($1, $2, $3, $4)',
                values: [email, hash, unique_id, rights],
            };
            Pool.query(query, (err, res) =>{
                if(err){
                    console.error('Erorr inserting user data', err);
                }else {
                    console.log('user Data inserted successfuly');
                }
            })
        }
    })
   }
})
**/
