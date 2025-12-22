# 🧑‍💻 CRUD Application (Node.js + Express + MongoDB)

A full-stack **CRUD (Create, Read, Update, Delete)** application built using **Node.js, Express, MongoDB, and React**, featuring **SEO-friendly slug-based routing** instead of raw database IDs.

This project demonstrates clean API design, proper separation of concerns, and best practices for handling user-friendly URLs.

---

## 🚀 Features

- Create, Read, Update, and Delete users
- MongoDB integration using Mongoose
- SEO-friendly URLs using **slugify**
- Slug-based routing on frontend
- Internal operations still use MongoDB `_id`
- RESTful API design
- Clean React UI for managing users
- Fully functional edit & delete flows

---

## 🧠 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Slugify
- CORS

### Frontend

- React
- React Router v6
- Fetch API
- Tailwind CSS (UI styling)

---

## 📂 Project Structure

```bash
crud-app/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── Users.js
│   │   ├── requests/
│   │   │   └── userRequests.js
│   │   ├── database.js
│   │
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── components/
│   │   ├── users/
│   │   ├── create-user/
│   │   └── update-user/
│   ├── routes/
│   │   └── AppRoutes.jsx
│   └── App.jsx
│
└── README.md
```

---

## 🔗 URL Design (Slug-Based Routing)

Instead of exposing database IDs in the URL:

❌ Old:

```
/update-user/694904d85a298fdaf5413b52
```

✅ New:

```
/update-user/engr-aqib-javed
```

- Slugs are generated from user names using `slugify`
- Slugs are used only for URLs
- `_id` is still used internally for updates and deletes

---

## 📡 API Endpoints

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/users`           | Get all users     |
| GET    | `/user/:slug`      | Get user by slug  |
| POST   | `/create-user`     | Create a new user |
| PUT    | `/update-user/:id` | Update user by ID |
| DELETE | `/delete-user/:id` | Delete user by ID |

---

## 🖼️ Screenshots

> Add screenshots of the application UI below.

### 📋 Users List

<!-- Screenshot Placeholder -->

```
[ Screenshot coming soon ]
```

### ➕ Create User

<!-- Screenshot Placeholder -->

```
[ Screenshot coming soon ]
```

### ✏️ Update User (Slug-Based URL)

<!-- Screenshot Placeholder -->

```
[ Screenshot coming soon ]
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AqibNiazi/node-express-projects.git
cd node-express-projects/crud-app
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=3000
HOST=localhost
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🧪 Example User Object

```json
{
  "_id": "694904d85a298fdaf5413b52",
  "name": "Engr. Aqib Javed",
  "slug": "engr-aqib-javed",
  "email": "aqib.javed@gmail.com",
  "age": 25
}
```

---

## ✅ Best Practices Implemented

- Slug-based routing for better UX & SEO
- RESTful API structure
- Clean separation of frontend and backend
- Single layout routing in React
- Error handling in API and UI
- Scalable routing architecture

---

## 🔮 Future Improvements

- Slug uniqueness handling
- Redirect old slug → new slug on name update
- Authentication & authorization
- Pagination & search
- Deployment (Vercel + Render)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 👤 Author

**Muhammad Aqib Javed**
🔗 GitHub: [AqibNiazi](https://github.com/AqibNiazi)
📧 Email: aqibjaved5201@gmail.com
