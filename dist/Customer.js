"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, address, phone, email, webuser, account) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.webuser = webuser;
        this.account = account;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getWebUser() {
        return this.webuser;
    }
    setWebUser(webuser) {
        this.webuser = webuser;
    }
    toString() {
        return "Customer[id=" + this.id + "\nWebUser:" + this.webuser + "\nAddress:" + this.address + "\nPhone:" + this.phone + "\nEmail:" + this.email + "]";
    }
}
exports.Customer = Customer;
