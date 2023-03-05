const  Sequelize = require('sequelize');

//const db = require('../util/database');

class UsersServie{
    constructor(pool){
        this.pool = pool
    }

    async getAllUsers(){
        const query = 'SELECT * FROM users';
        const {rows} = await this.pool.query(query);
        return rows;
    }

    async getUserByID(userId) {
        const query = 'SELECT * FROM users WHERE id= $1';
        const {rows} = await this.pool.query(query, [userId]);
        return rows[0];
    }

    async createUser(user){
        const {email, password} = user;
        const query = 'SELECT * FROM users (email, password) VALUES($1, $2) RETURNING *';
        const values = [email, password];
        const {rows} = await this.pool.query(query, values);
        return rows[0];
    }

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
}

module.exports = UsersServices;
