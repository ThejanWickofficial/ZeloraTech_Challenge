# ZeloraTech Recruitment Pipeline - Full Stack Challenge

A full-stack web application built for the ZeloraTech technical challenge. This project features a responsive, interactive Kanban-style recruitment dashboard designed to manage candidates across different hiring stages seamlessly.

## 🚀 Features

* **Interactive Kanban Board:** Candidates are dynamically sorted into stages ("Applying Period", "Screening", "Interview", "Test").
* **Full CRUD Operations:** * **Create:** Add new candidates via a sleek, responsive modal overlay.
  * **Read:** Fetch candidate data from a custom REST API.
  * **Update:** Move candidates between stages using dropdowns, or edit their details (Name, Date, Score, Referral Status) via an inline editing form.
  * **Delete:** Remove candidates from the pipeline with confirmation prompts.
* **Client-Side Validation:** Form inputs are sanitized in real-time (e.g., overall scores are strictly capped between 0 and 5, retaining proper decimals).
* **Scoped Styling:** Built using modular CSS to ensure styles are contained and maintainable without relying on external UI frameworks.

## 💻 Tech Stack

**Frontend:**
* React.js
* Vite
* CSS Modules (No Tailwind/Bootstrap, as per requirements)

**Backend:**
* Node.js
* Express.js
* CORS

## 🛠️ Setup & Installation

To run this project locally, you will need to start both the backend server and the frontend development server in two separate terminal windows.

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/ThejanWickofficial/ZeloraTech_Challenge.git
cd ZeloraTech_Challenge
\`\`\`

### 2. Start the Backend API
Open a terminal, navigate to the backend directory, install dependencies, and start the server:
\`\`\`bash
cd backend
npm install
node server.js
\`\`\`
*The backend API will run on http://localhost:5001*

### 3. Start the Frontend Application
Open a **new** terminal window, navigate to the frontend directory, install dependencies, and start the Vite development server:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
*The frontend application will run on http://localhost:5173*

## 📝 Architecture Notes

**In-Memory Database:** To prioritize a frictionless setup experience for the reviewer, the backend utilizes an in-memory data store (`data.js`) rather than requiring a dedicated external database instance (like PostgreSQL or MongoDB). 

The API fully supports standard RESTful CRUD operations (`GET`, `POST`, `PUT`, `DELETE`). While the state will reset upon a server restart, the application architecture is designed so that swapping the in-memory array for a real database query in the future would only require updating the controller logic, with zero changes needed on the React frontend.