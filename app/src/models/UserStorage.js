"use strict";

class UserStorage {
    static #users = {
        id: ["erictomi", "최제원", "제원"],
        psword: ["1234", "1234", "1234"],
        name: ["토미", "발렌띤", "최사원"]
    };

    static getUsers(...fields) {
     const users = this.#users;
     const newUsers = fields.reduce((newUsers, field) =>{
         if (users.hasOwnProperty(field)) {
             newUsers[field] = users[field];
         }
         return newUsers;
     }, {});
     return newUsers;
    }
    
    static getUserInfo(id) {
      const users = this.#users;
      const idx = users.id.indexOf(id);
      const userKeys = Object.keys(users);
      const userInfo = userKeys.reduce((newUser, info) =>{
          newUser[info] = users[info][idx];
          return newUser;
      }, {});

      return userInfo;
    }
}
 
module.exports = UserStorage;