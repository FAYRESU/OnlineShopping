"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to, total, status = OrderStatus_1.OrderStatus.NEW) {
        this.lineItems = [];
        this.payment = null;
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status;
        this.total = total;
    }
    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            total += this.lineItems[i].calTotal(); // ใช้ calTotal() ใน lineitem
        }
        return total;
    }
    setPayment(payment) {
        this.payment = payment;
        // ตั้งค่าการชำระเงินให้ตรงกับยอดรวมของคำสั่งซื้อ
        payment.setTotal(this.total);
    }
    getNumber() {
        return this.number;
    }
    getOrderedDate() {
        return this.ordered;
    }
    setOrderedDate(ordered) {
        this.ordered = ordered;
    }
    getShippedDate() {
        return this.shipped;
    }
    setShippedDate(shipped) {
        this.shipped = shipped;
    }
    getShipToAddress() {
        return this.ship_to;
    }
    setShipToAddress(ship_to) {
        this.ship_to = ship_to;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
        // คำนวณยอดรวมของคำสั่งซื้อใหม่เมื่อเพิ่มรายการสินค้า
        this.total = this.calculateTotal();
    }
    toString() {
        return `Order[
            number=${this.number},
            ordered=${this.ordered},
            shipped=${this.shipped},
            ship_to=${this.ship_to},
            status=${this.status},
            total=${this.total},
            ${this.lineItems.toString()},
            ${this.payment ? this.payment.toString() : "undefined"}
        ]`;
    }
}
exports.Order = Order;
