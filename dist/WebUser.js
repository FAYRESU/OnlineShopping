"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    constructor(login_Id, password, state = UserState_1.UserState.NEW, shoppingCart) {
        this.login_Id = login_Id;
        this.password = password;
        this.state = state;
        this.shoppingCart = shoppingCart;
    }
    getLoginId() {
        return this.login_Id;
    }
    getPassword() {
        return this.password;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    getShoppingCart() {
        return this.shoppingCart;
    }
    toString() {
        return `WebUser[ 
        loginId= ${this.login_Id},  
        password= ${this.password},  
        state= ${this.state},
        shoppingCart= ${this.shoppingCart.toString()}
    ]`;
    }
}
exports.WebUser = WebUser;
