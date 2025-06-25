# Trade Nexus – Global B2B Wholesale Marketplace (Client)

## 🌐 Live URL

https://trade-nexus-9fee7.web.app

## 📖 Project Overview

**Trade Nexus** is a global B2B wholesale marketplace that connects bulk suppliers (manufacturers, distributors) with retailers, resellers, and institutional buyers. The platform supports multi-category product listings including:

- Electronics & Gadgets   
- Apparel & Fashion  
- Home Appliances  
- Industrial Machinery & Tools
- Health & Beauty
- Automotive Parts & Accessories
- Office Supplies & Stationery
- Home & Kitchen Appliances 

Designed with scalability and user experience in mind, Trade Nexus enables efficient bulk ordering, secure transactions, and streamlined logistics management.

---

## 🚀 Key Features

- 🔐 **Secure Authentication** with Firebase
- 📦 **Multi-category Product Listings**
- 🛒 **Dynamic Cart**
- 📈 **Product Ratings**
- 🎨 **Responsive UI** with Tailwind CSS
- 🔍 **Real-time Filtering**
- 💬 **Interactive UI Animations** using Framer Motion & Lottie
- ⭐ **Star Ratings** with React Stars
- 🌙 **Dark Mode Support**

---

## 📦 NPM Packages Used

| Package                      | Purpose                                      |
|-----------------------------|----------------------------------------------|
| `@tailwindcss/vite`         | Tailwind integration with Vite               |
| `axios`                     | HTTP requests for API integration            |
| `date-fns`                  | Date utility functions                       |
| `firebase`                  | Authentication and real-time data            |
| `framer-motion`             | Smooth UI animations                         |
| `lottie-react`              | JSON-based animated illustrations            |
| `lucide-react`              | Clean and consistent icon set                |
| `motion`                    | Declarative animation system (internal dep)  |
| `react`                     | Core React library                           |
| `react-dom`                 | React DOM rendering                          |
| `react-helmet`              | Managing document head (SEO support)         |
| `react-icons`               | Popular icons (FontAwesome, Material, etc.)  |
| `react-rating-stars-component` | Interactive star rating component        |
| `react-router`              | Core routing functionality                   |
| `react-router-dom`          | DOM bindings for routing                     |
| `react-stars`               | Star rating display                          |
| `sweetalert2`               | Elegant alerts and modals                    |
| `swiper`                    | Touch slider/swiper for featured products    |
| `tailwindcss`               | Utility-first CSS framework                  |

---


---

## 🛠️ Getting Started

```bash

git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-MdMubashirulAhsan/trade-nexus-client.git
cd trade-nexus-client

Create .env in server/:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
Run the backend:

bash
Copy
Edit
npm run dev
🖥️ Frontend Setup
bash
Copy
Edit
cd ../client
npm install
Create .env in client/:

env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
Run the frontend:

bash
Copy
Edit
npm run dev
Now visit: http://localhost:5173




