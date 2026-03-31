# 🏬 Cemall – Community Enterprise Mall

**Cemall** is a hyperlocal digital mall that enables physical shops to go online, manage operations, and receive mobile payments without requiring customers to install an app.

🌐 **Live Platform:** https://cemall.vercel.app

Cemall brings together multiple independent shops into one unified online mall where customers can browse, order, and pay using mobile money or bank transfers.

---

# 🌍 Vision

To digitize local African commerce by providing small and medium businesses with an affordable, unified platform that connects them to online customers without technical complexity.

---

# 🚀 Key Features

- 🏪 Register physical shops and create digital storefronts
- 🧭 Manage multiple shop branches from one dashboard
- 🛒 Sell products and services online
- 🚚 Enable delivery from nearby branches
- 🙈 Hide individual product prices if needed
- 👥 Add staff accounts with role-based permissions
- 💳 Accept M-Pesa, Airtel Money, and bank payments
- 🏬 Operate inside a shared **community mall** for better visibility

---

# 👥 User Roles

| Role | Description |
|------|-------------|
| **Customer** | Browse shops, add items to cart, pay, and track deliveries |
| **Shop Admin** | Manage products, branches, staff, and orders |
| **Staff** | Process orders and update delivery status |
| **Super Admin** | Approve shops, manage categories, and monitor platform |

---

# ⚙️ How Cemall Works

## Shopkeeper Flow

1. Register shop on Cemall
2. Add products and services
3. Optionally hide item prices
4. Connect payment channels
5. Add staff accounts
6. Start receiving online orders

## Customer Flow

1. Open Cemall in browser
2. Search for shops or products
3. Select nearby branch
4. Add items to cart
5. Pay via mobile money or bank
6. Track order and receive delivery

---

# 🧾 Example Use Cases

## Grocery Shop
Lists fruits, vegetables, and daily essentials and delivers locally.

## Barbershop
Allows appointment booking and mobile payment.

## Chemist / Pharmacy
Hides individual medicine prices while showing total bill.

## Hardware Store
Manages inventory across multiple branches and sells online.

---

# 💰 Payment Model

Cemall does **not** hold customer funds.

Payments go **directly to the shopkeeper**:

- M-Pesa Till or Paybill
- Airtel Money number
- Bank account

Cemall only records:
- transaction reference
- payment status
- order completion

This ensures:
- faster settlements
- reduced platform liability
- increased trust for merchants

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
