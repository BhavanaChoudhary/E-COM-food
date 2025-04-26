
# E-Commerce Food Delivery Project

## Task Objectives
This project is a full-stack E-Commerce Food Delivery application consisting of three main parts:
- **Backend:** Node.js/Express server handling API endpoints, database interactions, authentication, and business logic.
- **Frontend:** React application built with Vite for customers to browse and order food.
- **Admin Panel:** React application built with Vite for administrators to manage food items, orders, and users.

The goal is to provide a seamless food ordering experience with a clean, well-structured, and maintainable codebase.

## Steps to Run the Project

### Backend
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
   The backend server will start and listen for API requests.

### Frontend
1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open the provided local URL (usually `http://localhost:3000`) in your browser to access the customer-facing application.

### Admin Panel
1. Navigate to the `admin` directory:
   ```bash
   cd admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the admin development server:
   ```bash
   npm run dev
   ```
4. Open the provided local URL (usually `http://localhost:3000`) in your browser to access the admin panel.

## Code Quality and Structure
- The project follows a modular structure separating backend, frontend, and admin codebases.
- Backend code is organized into controllers, models, routes, and middleware for maintainability.
- Frontend and admin are built with React and Vite, using component-based architecture.
- Code is well-commented to explain key logic and improve readability.
- ESLint configurations are included in frontend and admin for consistent code style.
- Assets such as images and icons are organized in dedicated folders within each frontend project.

## Additional Notes
- Ensure you have Node.js and npm installed on your system before running the project.
- Environment variables and database configurations should be set up as per backend requirements (not covered in this README).
- For production deployment, build commands and environment-specific configurations should be applied accordingly.

---

This README provides an overview and instructions to get started with the E-Commerce Food Delivery project. For more detailed documentation, please refer to individual folders if available.
