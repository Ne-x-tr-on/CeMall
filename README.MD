
# 🏬 Cemall – Community Enterprise Mall

**Cemall** is a virtual community mall developed by **Neza**, designed to help **physical shops** digitize operations, sell online, manage branches, staff, and receive payments via **M-Pesa, Airtel Money, or bank transfers**—all without requiring customers to install any app.  

Cemall brings together multiple shops in one **hyperlocal digital mall**, giving small business owners access to new customers, delivery options, and online sales opportunities.  

---

## 🌟 Key Features

- **Shop Creation**: Register physical shops (grocery, hardware, chemist, barber, clothing, electronics, etc.)  
- **Branch Management**: Add multiple branches and manage them from a single dashboard  
- **Online Sales**: Select which products/services to sell online  
- **Delivery Options**: Customers can choose a nearby shop and request delivery  
- **Hidden Pricing**: Shopkeepers can hide per-item prices while showing total checkout amount  
- **Employee Roles**: Add staff to manage sales, deliveries, or cashier duties  
- **Multi-Payment Integration**: Supports **M-Pesa, Airtel Money, and bank transfers**  
- **Community Mall**: Multiple shops in a location form one unified mall, enhancing visibility  

---

## 📖 User Roles

| Role           | Capabilities                                                                 |
|----------------|----------------------------------------------------------------------------|
| Customer       | Browse shops/products, select branch, add to cart, choose delivery, pay, track orders |
| Shop Admin     | Manage branches, products, staff, hide prices, view orders, connect payment channels |
| Staff          | Limited access to process orders, update delivery status                    |
| Super Admin    | Approve shops, manage categories, moderate content, view analytics         |

---

## 📌 How It Works

### Shopkeeper
1. Registers their shop under Cemall.  
2. Adds products and optionally hides per-item prices.  
3. Connects their **M-Pesa, Airtel Money, or bank account**.  
4. Adds staff for order processing and deliveries.  
5. Manages branches and online/offline products.  

### Customer
1. Opens Cemall (web/mobile-friendly).  
2. Searches for a shop or category.  
3. Chooses a nearby shop branch.  
4. Adds products/services to cart.  
5. Pays via mobile money or bank.  
6. Tracks order and receives delivery.  

---

## 📌 Example Use Cases

- **Grocery Shop**: Lists fruits, vegetables, milk; delivers within 2 km; accepts mobile payments.  
- **Barbershop**: Allows customers to book appointments; payment via mobile money or cash.  
- **Chemist**: Hides individual product prices; total bill displayed at checkout.  
- **Hardware Shop**: Sells online and in-store; manages multiple branches.  

---

## 🔐 Payments Flow

- Shopkeeper enters their **Till Number**, **Paybill**, or **Bank Account**.  
- Customer pays via **M-Pesa/Airtel Money/Bank** directly to the shopkeeper.  
- Cemall only records the transaction and updates order status.  

---

## 🏗 Tech Stack

- **Frontend**: Next.js + TypeScript + TailwindCSS + shadcn/ui + lucide-react icons  
- **Animations**: Framer Motion  
- **Backend**: Rust (Axum) + PostgreSQL  
- **Payments**: M-Pesa, Airtel Money, Banks  
- **Hosting**: Dockerized microservices  

---

## 📌 Future Plans

- Loyalty programs for frequent customers  
- Shop-to-shop trade within Cemall  
- AI-powered product recommendations  
- Data analytics for shop performance  

---

## 📌 Example Scenario

Imagine 20 shops in a town:
- 3 groceries  
- 2 chemists  
- 5 barbershops  
- 4 hardware stores  
- 6 fruit stalls  

When they register under Cemall, they form a **hyperlocal digital mall**, allowing customers to browse multiple shops in one platform while maintaining their individual shop identity.  

---

# ✨ Cemall = The Future of Community Shopping

Cemall empowers small business owners in Africa to go digital **without the high cost of building separate apps**, and gives customers **a convenient, unified shopping experience** in their local area.
