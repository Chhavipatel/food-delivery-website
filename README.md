# 🍕 Food Delivery Website

## 📋 Overview
This is a full-stack **food delivery website** built using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack. The platform allows customers to browse various food items, add them to the cart, place orders, and track their delivery status.


Check out the **live demo** here: [https://fooddelivery-frontend-r65g.onrender.com/](#) _()_
---

## 🚀 Features
### 🛒 Client-Side Features
- **User Registration & Login**: Users can create an account, log in, and manage their profiles.
- **Restaurant Listings**: Displays available restaurants with categorized food items.
- **Add to Cart & Checkout**: Users can add items to their cart, customize orders, and proceed with secure checkout.
- **Order Tracking**: Real-time tracking of order status.

### ⚙️ Backend Features
- **RESTful APIs**: Robust APIs to handle client and admin requests with routes for user authentication, product management, and order processing.
- **User Authentication & Authorization**: Implemented using JSON Web Tokens (JWT) to secure API endpoints.
- **Order Management**: Endpoints to create, retrieve, update, and delete orders. Separate logic for tracking the order status.
- **Product & Category Management**: Allows admins to dynamically manage food items and categories.
- **Error Handling & Logging**: Centralized error handling and logging for easy debugging and maintenance.
- **Database Management with MongoDB**: Uses Mongoose to handle complex data models, schema validation, and database operations.
- **Session Management**: Middleware to manage user sessions, ensuring secure and reliable interactions.

---

## 🛠️ Tech Stack
### **Frontend:**
- **React.js**: For building a responsive and dynamic user interface.

### **Backend:**
- **Node.js & Express.js**: RESTful APIs for handling server-side logic and routes.
- **MongoDB & Mongoose**: Database and ORM for managing data and schema.

### **Additional Tools:**
- **JWT**: For secure authentication.
- **Bcrypt.js**: Password hashing for enhanced security.

---

## ⚙️ Installation
### 1. **Clone the Repository:**
```bash
git clone https://github.com/Chhavipatel/fooddelivery.git
```

### 2. **Install Dependencies:**
Navigate to the project directory and install frontend and backend dependencies:

```bash
cd food-delivery-website
npm install
```
```bash
# Move to the frontend directory
cd frontend
npm install
```
### 3. Set Up Environment Variables:
Create a .env file in the root directory and add the following keys:
```bash
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=8080
```
### 4. Run the Application:
Start both the frontend and backend servers:
```bash
cd fooddelivery
cd frontend
npm run dev
cd backend
npm run server
```


Check out the **live demo** here: [https://fooddelivery-frontend-r65g.onrender.com/](#) _()_





