"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const shoppingCart_1 = require("./shoppingCart");
class Account {
    constructor(id, billing_address, is_closed, open, closed) {
        this.orders = [];
        this.payments = [];
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
        this.shoppingCart = new shoppingCart_1.ShoppingCart("22-1-2568");
    }
    getId() {
        return this.id;
    }
    getOpen() {
        return this.open;
    }
    getClosed() {
        return this.closed;
    }
    getBilling_address() {
        return this.billing_address;
    }
    getIsclosed() {
        return this.is_closed;
    }
    getShoppingCart() {
        return this.shoppingCart;
    }
    addOrder(order) {
        this.orders.push(order);
    }
    addPayment(payment) {
        this.payments.push(payment);
    }
    getPayments() {
        return this.payments;
    }
    getOrders() {
        return this.orders;
    }
    setOpen(open) {
        this.open = open;
    }
    setClosed(closed) {
        this.closed = closed;
    }
    setBilling_address(billing_address) {
        this.billing_address = billing_address;
    }
    setIsclosed(is_closed) {
        this.is_closed = is_closed;
    }
    setShoppingCart(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    toString() {
        return `Account[id=${this.id}
Billing Address: ${this.billing_address}
Is Closed: ${this.is_closed}
Open: ${this.open}
Closed: ${this.closed}
ShoppingCart: ${this.shoppingCart.toString()}
Orders: ${this.orders.toString()}]`;
    }
}
exports.Account = Account;
