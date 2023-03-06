const  Sequelize = require('sequelize');

const sequelize = require('../util/database');


   const getAllUsers = async() =>{
        const query = 'SELECT * FROM users';
        const [rows, x ] = await sequelize.query(query);
        console.log('Enter in the Rout');
        return rows;
    }

    const getUserByID= async(userId) =>{
        const query = `SELECT * FROM users WHERE user_id= ${userId}`;
        const [rows, x] = await sequelize.query(query, [userId]);
        return rows;
    }
    
    const createUser = async(email, password)=>{
        const query = `INSERT INTO users (email, password) VALUES(${email}, ${password})`;
        const values = [email, password];
        const [rows,x] = await sequelize.query(query);
        return rows;
    }
    /*
    async updaterUser(userId, updaterUser){
        const {email, password} = updaterUser;
        const query = 'UPDATE users SET email = $1, password=$2 WHERE id = $3 RETURNING *';
        const values = [email, password, userId];
        const {rows} = await this.pool.query(query, values);
        return rows[0];
    }

    async deleteUser(userId){
        const query = 'DELETE FROM users WHERE id= $1 RETURNING *';
        const {rows} = await this.pool.query(query, [userId]);
        return rows[0];
    }
    **/
module.exports = {getAllUsers, getUserByID, createUser} ;
