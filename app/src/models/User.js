"use strict";


const UserStorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id);

        //await promise를 반환하기 때문에 .then으로 접근하여 데이터를 가져올 수 있음
        //await을 사용해준 이유는 "가독성" fs에서도 await으로 가져올 수 있습니다.
        //awiat는 async (비동기)함수 안에서만 사용이 가능하다
        
        if(id) {
         if (id === client.id && psword === client.psword){
            return {success : true};
        }
        return {success : false, msg: "비밀번호가 틀렸습니다."};
    }
    return { success : false, msg : "존재하지 않는 아이디입니다."}
 }

  async register() {
    try{
    const client = this.body;
    const response = await UserStorage.save(client);
    return response;
    } catch (err) {
      return { success : false, msg : err };
    }
  }
}

module.exports = User;