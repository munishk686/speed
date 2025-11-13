#  Speed – Software Engineering Claims Platform

A full-stack MERN-style project where users can **register, log in, and manage software engineering claims**.  
The app includes secure authentication, a MongoDB backend, and a modern React frontend built with Vite.

---

##  Features

- User registration and login with JWT authentication  
- Add, search, edit, and delete research claims  
- Secure API routes (protected by tokens)  
- React 19 + React Router 7 for smooth navigation  
- Environment-based API configuration (`VITE_API_URL`)  
- MongoDB + Mongoose backend

---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React 19, Vite, React Router DOM |
| Backend | Node.js, Express, JWT, Mongoose |
| Database | MongoDB Atlas |
| Authentication | JSON Web Tokens (JWT) |
| Deployment | Vercel (Frontend), Render / Railway (Backend) |

---

##  Folder Structure


<img width="340" height="502" alt="image" src="https://github.com/user-attachments/assets/96d8508b-2e2a-49f2-b630-11f751013c85" />


---

##  Environment Variables

Create a `.env` file inside `backend/` with the following:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
PORT=5000

VITE_API_URL=http://localhost:5000
```

---

##  Local Setup
git clone https://github.com/munishk686/speed.git
cd speed
cd backend
npm install
npm run dev
cd ../frontend
npm install
npm run dev

---

## API Routes

| Method | Endpoint              | Description                 |
| ------ | --------------------- | --------------------------- |
| POST   | `/api/users/register` | Register new user           |
| POST   | `/api/users/login`    | Login and receive JWT token |

---

##  Speed (Claim) Routes

| Method | Endpoint                  | Protected | Description   |
| ------ | ------------------------- | --------- | ------------- |
| GET    | `/api/speeds?search=term` | ❌         | Search claims |
| POST   | `/api/speeds`             | ✅         | Add new claim |
| PUT    | `/api/speeds/:id`         | ✅         | Update claim  |

---

##  Author

Munish Kumar:
Software Developer | MERN Stack |

email: munishk686@gmail.com

LinkedIn: https://www.linkedin.com/in/munishk686/

portfolio: https://www.techmkumar.com/





