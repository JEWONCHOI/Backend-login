"use strict";

const fs = require("fs").promises;
//promise가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 아주 효과적

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    
    static getUsers(...fields) {
     /* const users = this.#users; */

     const newUsers = fields.reduce((newUsers, field) =>{
         if (users.hasOwnProperty(field)) {
             newUsers[field] = users[field];
         }
         return newUsers;
     }, {});
     return newUsers;
    }
    
    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error); //=fetch
    }

    static save(userInfo) {
        /* const users = this.#users; */
        users.id.push(userInfo. id);
        users.name.push(userInfo. name);
        users.psword.push(userInfo. psword);
        return { success: true };
    }
}
 
module.exports = UserStorage;