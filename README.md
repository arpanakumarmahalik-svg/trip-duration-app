# 🧭 Trip Duration App (ML + Full Stack)

**🔗 Live Demo:** https://trip-duration-app.netlify.app/

---

## 📌 Overview

Trip Duration App is a **full-stack web application powered by Machine Learning** that helps users estimate and plan their trips efficiently.

It combines a **React-based frontend**, a **FastAPI backend**, and a **custom-trained ML model** to deliver intelligent trip duration predictions.

---

## 🤖 Key Highlights

* 🔥 Full-stack project (Frontend + Backend + ML)
* 🤖 Machine Learning model for trip prediction
* ⚡ FastAPI backend for API handling
* 🎨 Modern UI using React + Tailwind CSS
* 🌐 Deployed frontend for real-world access

---

## 🚀 Features

* 🗺️ User-friendly travel planning interface
* 🤖 ML-based trip duration prediction
* 🔗 API integration between frontend & backend
* 📊 Data-driven results
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React (with TypeScript)
* Tailwind CSS
* Vite

### 🔹 Backend

* FastAPI (Python)
* REST API architecture

### 🔹 Machine Learning

* Scikit-learn
* Pandas, NumPy
* Custom dataset (`train.csv`)

### 🔹 Deployment

* Frontend: Netlify
* Backend: Render

---

## 🧠 How It Works

1. User enters trip-related inputs on frontend
2. Data is sent to FastAPI backend
3. Backend processes input using ML model
4. Model predicts trip duration
5. Result is returned and displayed on UI

---

## 📂 Project Structure

```
TRIP-DURATION-APP/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── schemas.py
│   │
│   ├── model/
│   ├── requirements.txt
│
├── data/
│   ├── generate_data.py
│   ├── train.csv
│
├── ml_model/
│   ├── train_model.py
│
├── frontend/
│   ├── dist/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── eslint.config.js
│   ├── tsconfig.json
│
├── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 Clone Repository

```bash
git clone https://github.com/your-username/trip-duration-app.git
cd trip-duration-app
```

---

### 🔹 Backend Setup (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

👉 Backend runs at: http://127.0.0.1:8000

---

### 🔹 Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

👉 Frontend runs at: http://localhost:5173

---


## 🌍 Deployment

* 🔗 Frontend: https://trip-duration-app.netlify.app
* 🔗 Backend: https://trip-duration-api.onrender.com

---

## ✨ Future Improvements

* Improve ML model accuracy with real-world dataset
* Add user authentication & saved trips
* Integrate real-time travel APIs
* Deploy full-stack together (Docker / Cloud)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is open-source under the MIT License.

---

## 👩‍💻 Author

**Arpana Kumar Mahalik**
Diploma in IT | Odisha

---

⭐ If you like this project, don’t forget to star the repository!
