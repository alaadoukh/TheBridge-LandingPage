# Landing Page for the E-Learning Platform with Admin Interface for CRUD Operations


## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Admin Interface](#admin-interface)
- [Illustrations](#illustrations)
  - [Landing Page](#landing-page)
  - [Admin Dashboard](#admin-dashboard)
  - [All Courses Page](#all-courses-page)
- [Code](#code)
  - [Frontend](#frontend)
   - [Backend](#backend)

## Introduction

The goal of this project is to develop a captivating landing page for The Bridge E-Learning Platform. Additionally, the task involves creating an Admin interface equipped with CRUD operations:

- **Create:** Add new courses with titles, prices, and images.
- **Read:** View a list of existing courses with their details.
- **Update:** Modify course information, including titles, prices, and images.
- **Delete:** Remove courses from the platform.

This project is part of the technical test for the Internship position at BeeCoders (9antra.tn).

### Technologies Used

- React JS
- Node JS

## Getting Started

### Prerequisites

- Node.js (Version used in this project: 18.15.0).
- npm (Version used in this project: 9.8.1)
- Code editor (e.g., Visual Studio Code).

### Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/alaadoukh/TheBridge-LandingPage
   ```

2. Navigate to the project directory:

   ```bash
   cd TheBridge-LandingPage
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the **server side** development server:

   ```bash
   cd backend
   npm run dev
   ```

5. Open new terminal and start the **client side** development server:

   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the landing page.

### Admin Interface

To access the Admin interface:

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin).
2. Perform CRUD operations (Create, Read, Update, Delete) to manage course information.
3. paste external image URLs for course images, update titles, and adjust prices as needed.

## Illustrations

Below are visual representations of the key interfaces and functionalities:
* Landing Page
* Admin Dashboard
* All Courses Page

### Landing Page

![Landing Page](./frontend/src/assets/screenshots/Landing%20Page.png)


![Admin Interface](./frontend/src/assets//screenshots/Admin%20Dashboard.png)

### All Courses Interface

![All Courses Interface](./frontend/src/assets/screenshots/All%20Courses.png)

## Code

### Project Structure

The project is organized into two main directories: `frontend` and `backend`. Here's an overview of each:

#### Frontend

The `frontend` directory contains the code for the user-facing part of the application, including the landing page and the Admin interface.

- **`src`**: The main source code directory.

  - **`assets`**: Holds images, logos, and other assets used in the application.

  - **`components`**: Contains React components that are reusable across different parts of the application.
    - `CourseList.js`: This component is responsible for rendering the layout of the first six courses on the landing page. It encapsulates the structure and styling for displaying a preview of these courses.
    - `CourseListAll.js`: This component is dedicated to the layout design of the "All Courses" section. It defines the structure and styling for showcasing a complete list of available courses.

   
  - **`data/courseImages`**: Imports initial data images for reusability across components.

  - **`pages`**: Includes main pages of the application.
    - `Home.js`: Code for the landing page.
    - `Courses.js`: Interface displaying all available courses.
    - `Admin.js`: Implementation of the Admin interface.

  

  - **`App.js`**: Serves as the central component responsible for managing the routing configuration of the application. It defines how different components are navigated and displayed based on the user's interactions.

#### Backend

The `backend` directory handles server-side logic and API endpoints for CRUD operations on course data.

- **`courses.js`**: Encapsulates the server-side logic for managing courses and exposes endpoints that can be consumed by the client-side application.

- **`server.js`**: Configures the Express server, sets up middleware for handling CORS and parsing JSON bodies, defines routing, and starts the server on a specified port.
