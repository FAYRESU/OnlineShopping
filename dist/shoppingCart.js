"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.lineItems = [];
        this.created = created;
    }
    addItem(item) {
        this.lineItems.push(item);
    }
    getItems() {
        return this.lineItems;
    }
    toString() {
        return `ShoppingCart[created= ${this.created}, items= [${this.lineItems.toString()}]]`;
    }
}
exports.ShoppingCart = ShoppingCart;
