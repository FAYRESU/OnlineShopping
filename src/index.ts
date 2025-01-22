
const { WebUser } = require("./WebUser");
const { UserState } = require("./UserState");
const { Customer } = require("./Customer");
const { Account } = require("./Account");
const { Product } = require("./Product");
const { Order } = require("./Order");
const { LineItem } = require("./LineItem");
const { Payment } = require("./Payment");
const { ShoppingCart } = require("./shoppingCart");
const { OrderStatus } = require("./OrderStatus");


// console.log("############# Shopping Cart ###############")
// const cart1 = new ShoppingCart(new Date("2025-01-19"));
// console.log(cart1.toString());
// console.log("############# ข้อที่ 1 ###############")
// const user1 = new WebUser("Nat", "Fay5678", UserState.NEW,cart1);
// const user2 = new WebUser("Boon", "BL67899", UserState.ACTIVE,cart1);
// console.log(user1.toString());
// console.log(user2.toString());

// console.log("############# Customer ###############")

// const customer1= new Customer("C002", "Nakhon Pathom", "089-123-4567", "664259036@webmail.npru.ac.th", user2);

// console.log("############# Account ###############")
// const account = new Account("005", "Credit", true, new Date("2025-01-13"), new Date("2025-01-14"), 
// );
// console.log(account.toString());

console.log("############# ข้อที่ 2 Product 5 ชิ้น ###############")
const product1 = new Product("C300", "ยางลบ", "นายอินทร์");
const product2 = new Product("C301", "สมุด", "นายจัน");
const product3 = new Product("C302", "ไม้บรรทัด", "นายพราน");
const product4 = new Product("C303", "ดินสอ", "นายแช่ม");
const product5 = new Product("C304", "ปากกา", "นายแป้น");
console.log(product1.toString());
console.log(product2.toString());
console.log(product3.toString());
console.log(product4.toString());
console.log(product5.toString());

console.log("############# LineItem ###############")
const item1 = new LineItem(2, 10, product1); //2 * 10 = 20
const item2 = new LineItem(3, 50, product2); //3 * 50 = 150
const item3 = new LineItem(1, 15, product3); //1 * 15 = 15
const item4 = new LineItem(4, 20, product4); //4 * 20 = 80
const item5 = new LineItem(12, 60, product5); //12 * 60 = 720

console.log("############# USER 1  ###############")
const cart3 = new ShoppingCart("22/01/2567");
const user3 = new WebUser("Natthakan", "Fay5678", UserState.NEW,cart3);
const order = new Order("O01", "2024-01-15", "2024-01-18", "Nakhonpathom", 0, OrderStatus.NEW);
order.addLineItem(item2);
order.addLineItem(item4);
order.setTotal(order.calculateTotal());
console.log(user3.toString());
console.log(order.toString());
console.log("############# USER 2  ###############")
const cart4 = new ShoppingCart("22/01/2567");
const user4 = new WebUser("Boon", "BL67899", UserState.ACTIVE,cart4);
const order2 = new Order("O02", "2024-01-15", "2024-01-18", "Nakhonpathom", 0, OrderStatus.NEW);
order2.addLineItem(item5);
order2.addLineItem(item4);
order2.setTotal(order2.calculateTotal());
console.log(user4.toString());
console.log(order2.toString());

// console.log("############# ข้อ 4 บิล ###############");
// console.log("############# รายละเอียดตะกร้าสินค้า และ คำสั่งซื้อ ###############");

// const cart5 = new ShoppingCart(new Date("22/01/2568"));

// const user1 = new WebUser("Nat", "Fay5678", UserState.NEW, cart5);

// const customer = new Customer("C001", "123 Main Street", "099-123-4567", "natthakan@email.com", user1);

// const account1 = new Account("005", "Credit", true, new Date("2025-01-13"), new Date("2025-01-14"), customer);
// console.log(account1.toString());

// const product1 = new Product("C300", "ยางลบ", "นายอินทร์");
// const product2 = new Product("C301", "สมุด", "นายจัน");

// const item1 = new LineItem(2, 10, product1);
// const item2 = new LineItem(1, 15, product2);

// cart5.addItem(item1);
// cart5.addItem(item2);

// console.log(cart5.toString());

// const order1 = new Order("O01", "2024-01-15", "2024-01-18", "Nakhonpathom", 0, OrderStatus.NEW);
// order1.addLineItem(item1);
// order1.addLineItem(item2);
// order1.setTotal(order1.calculateTotal());

// account1.addOrder(order1);
// console.log(order1.toString());

// const payment1 = new Payment("P001", "2025-01-15", order1.getTotal(), "Credit Card");
// order1.setPayment(payment1);
// console.log(payment1.toString());


