"use strict";

const User = require("../../models/User");


const output = {
    home:  (req, res) =>{
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req,res) => {
        res.render("home/register");
    }
};

const process = {
     
    
    login: async(req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        //async await 함수는 자체적으로 promise를 반환해주도록 되어있습니다 // 따라서 await을 적용해줄 수 있는 것입니다.
        return res.json(response);
    },

    register: (req,res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
 };

module.exports = {
    output,
    process,
}