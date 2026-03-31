# 🏬 Cemall – Community Enterprise Mall

**Cemall** is a hyperlocal digital mall that enables physical shops to digitize operations, sell products and services online, and receive payments via mobile money or bank transfers — all from a single, unified platform.

🌐 **Live Platform:** [https://cemall.vercel.app](https://cemall.vercel.app)

Cemall brings together multiple independent shops into one unified online mall, allowing customers to browse, order, and pay conveniently while shopkeepers manage inventory, staff, and payments seamlessly.

---

# 🌍 Vision

Empower African small and medium businesses to embrace digital commerce **without high technical complexity**, connecting local communities to convenient online shopping experiences and enhancing business visibility.

---

# ❗ Problem Cemall Solves

Many local businesses rely solely on walk-in customers and manual record-keeping, limiting growth and revenue. Cemall solves this by providing a **cost-effective, community-focused platform** to digitize sales, deliveries, and payments.

---

# 🚀 Key Features

- 🏪 **Shop Registration:** Create digital storefronts for physical shops  
- 🧭 **Branch Management:** Manage multiple branches from a single dashboard  
- 🛒 **Online Sales:** Sell products or services online  
- 🚚 **Delivery Support:** Customers can order from nearby branches  
- 🙈 **Hidden Pricing:** Hide per-item prices while showing total checkout amount  
- 👥 **Staff Management:** Role-based permissions for employees  
- 💳 **Multi-Payment Support:** Accept M-Pesa, Airtel Money, and bank transfers  
- 🏬 **Community Mall:** Join a hyperlocal mall for increased visibility  

---

# 👥 User Roles

| Role | Description |
|------|-------------|
| **Customer** | Browse shops, add items to cart, pay, and track deliveries |
| **Shop Admin** | Manage products, branches, staff, and orders |
| **Staff** | Process orders and update delivery status |
| **Super Admin** | Approve shops, manage categories, monitor platform |

---

# ⚙️ How Cemall Works

## Shopkeeper Flow

1. Register shop on Cemall  
2. Add products and services  
3. Optionally hide item prices  
4. Connect mobile money or bank accounts  
5. Add staff with appropriate roles  
6. Start receiving online orders  

## Customer Flow

1. Open Cemall in a web browser  
2. Search for shops, products, or services  
3. Select a nearby branch  
4. Add items to cart  
5. Pay via mobile money or bank transfer  
6. Track order status and receive delivery  

---

# 🧾 Example Use Cases

## Grocery Shop
Lists fruits, vegetables, and essentials; delivers locally.

## Barbershop
Accepts appointments and mobile payments.

## Chemist / Pharmacy
Hides per-item prices while displaying total bill at checkout.

## Hardware Store
Manages inventory across multiple branches and sells online.

---

# 💰 Payment Model

Cemall does **not** hold customer funds.  

Payments go **directly to shopkeepers**:

- M-Pesa Till / Paybill  
- Airtel Money number  
- Bank account  

Cemall records:
- Transaction reference  
- Payment status  
- Order completion  

**Benefits:**
- Faster settlements  
- Reduced platform liability  
- Increased trust for merchants  

---

# 🏗 System Architecture

```
Customers (Browser)
        │
        ▼
Cemall Frontend (Next.js)
        │
        ▼
Rust API Server (Axum)
        │
        ├── Authentication & Roles
        ├── Shop Management
        ├── Orders & Delivery
        ├── Payment Recording
        │
        ▼
PostgreSQL Database
```

---

# 🧰 Tech Stack

## Frontend
- Next.js
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion

## Backend
- Rust
- Axum
- PostgreSQL

## Infrastructure
- Dockerized services
- Deployed frontend on Vercel

---

# 🏬 Hyperlocal Mall Concept

Cemall groups multiple shops in a location into one digital mall:

```
Town → Cemall → All shops in one platform
```

Example:

- 3 groceries
- 2 chemists
- 5 barbershops
- 4 hardware stores
- 6 fruit vendors

Customers browse them all in one place while each shop keeps its own identity.

---

# 🔒 Security

- Role-based access control
- Shop-level data isolation
- Secure storage of payment details
- Audit logging for staff actions

---

# 📦 Core Modules

- Shop Management
- Branch Management
- Product Catalog
- Order Processing
- Delivery Tracking
- Payment Recording
- User Authentication

---

# 🚀 Future Roadmap

- Loyalty and rewards system
- Business analytics dashboards
- AI-powered product recommendations
- Shop-to-shop wholesale marketplace
- Inventory and supplier integrations

---

# 🎯 Target Users

- Small retail shops
- Informal market vendors
- Community shopping centers
- African towns with strong mobile money adoption

---

# 🌐 Live Demo

Visit the live platform:

https://cemall.vercel.app

---

# 🧑‍💻 Developed By

**Neza**

Building digital infrastructure for African commerce, logistics, and community ecosystems.

---

# 📄 License

© 2026 Cemall – Community Enterprise Mall
All rights reserved.
