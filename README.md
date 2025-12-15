

# Kambaz Frontend (Next.js)

Frontend application for **Kambaz**, a Canvas-inspired learning management system with an integrated **Pazza-style discussion platform**. It allows instructors and students at university to enroll and unenroll from courses. It lets instructors add,edit,read and delete assignments,modules in a course. 
This frontend also consists of a platform called **Pazza** that lets students post their doubts and allows instructors to answer those questions and solve doubts. 
Built using **Next.js 15 and React 19**, this repository consumes the Kambaz Node backend and provides a modern, role-aware UI for courses, assignments, and collaborative discussions.

---

## 🚀 Tech Stack

* **Framework:** Next.js 15 (App Router)
* **UI Library:** React 19
* **Language:** TypeScript
* **State Management:** Redux Toolkit
* **Styling:** Bootstrap + custom CSS
* **Icons:** React Icons
* **Deployment:** Vercel
* **Backend:** Kambaz Node Server (Express + MongoDB)

---

## 🧠 Core Concepts

* **Server-Side Rendering (SSR) & Client Components**
* **Session-based authentication** with cookies
* **Role-aware UI** (Student / Instructor)
* **Course-scoped routing**
* **Integrated discussion system (Pazza)**
* **Redux-driven global state**
* **Production-ready builds**

---

## 📂 Project Structure

```
kambaz-next-js/
│
├── app/
│   ├── (Kambaz)/            # Core LMS routes
│   │   ├── Account/
│   │   ├── Courses/
│   │   ├── Modules/
│   │   └── Assignments/
│   │
│   ├── Pazza/               # Integrated discussion system

```

---

## 🔐 Authentication & Sessions

* Uses **server-managed sessions** from the backend
* Cookies shared across domains (`Vercel ↔ Render`)
* Automatic login persistence
* Role-based rendering and route protection

---

## 📘 Features

### 👤 Account

* Login / Logout / Register
* Profile management
* Session persistence across refreshes

### 📚 Courses

* Course dashboard
* Instructor-only course management
* Student enrollments
* Module and assignment navigation

### 📝 Assignments

* Assignment creation and updates
* Due dates and metadata
* Course-scoped visibility

### 💬 Pazza (Integrated)

* Question / Note / Poll posts
* Nested follow-ups
* Nested replies
* Resolve / unresolve follow-ups
* Folder-based organization
* Instructor vs student controls
* Real-time UI updates via state management

---

## 🌐 Routing Model

* Built using **Next.js App Router**
* Dynamic routes:

  ```
  /Courses/[cid]
  /Assignments/[aid]
  /Pazza/Class/[cid]
  ```
* Client components used where interactivity is required
* Server components leveraged for initial data fetches

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
```

For production (Vercel):

```env
NEXT_PUBLIC_HTTP_SERVER=https://your-render-backend.onrender.com
```

---

## 🏃 Running Locally

```bash
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

Ensure the backend server is running and accessible.

---

## 🚢 Deployment

* Deployed on **Vercel**
* Automatic builds on push to `main`
* Configured for cross-origin session cookies
* Production-ready SSR output

---

## 🔗 Backend Repository

* **Kambaz Node Server App**
  Handles authentication, data persistence, and business logic.

---

## 🛠️ Design Philosophy

* Frontend focuses on **UI + state**
* Backend owns **auth and data integrity**
* Pazza deeply integrated, not a bolt-on feature
* Clean separation between presentation and API clients
* Built to mirror real-world LMS systems

---

## 📌 Status
## Finished Product!!
This app is **deployed** on vercel.

---

## 👨‍💻 Author

**Arth Sindekar**
M.S. in Computer Science
Northeastern University

---

