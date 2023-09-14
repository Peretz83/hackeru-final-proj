# E-Commerce App

# Dynamic E-commerce Buisness Application

This is a dynamic application for shopping that provides full CRUD functionality and a RESTful API. It is built using ReactJS Template with Bootstrap for the frontend, Node.js with Express for the backend, and MongoDB as the database.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB
- Installation:
  - 1 Clone the repository:
  - 2 Install the dependencies:
  - Please make sure to clear local storage
- run: npm Install at both Root directory and client folder directories
  - Server port at 4600
  - React development port at 3000
- Start the development server by running npm run dev in the root folder.

## Features

- Create, read, update, and delete (CRUD) operations for store products
- RESTful API for accessing and manipulating product data
- User-friendly interface with a modern and responsive design by Bootstrap
- Integration with MongoDB for data storage
- Multi-users Favorite functionality and add product abilities
- BackEnd and FrontEnd RouteGuard , Adapted to two types of users : User , Admin
- Admin Area with users console
- Login limited to 3 failed attempts, if limit reached users account will be blocked for 24 hours

---

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Bootstrap: A popular design framework that provides pre-designed components and styling.
- Node.js: A runtime environment for executing JavaScript code on the server-side.
- Express: A minimalist web application framework for Node.js.
- MongoDB: A document-oriented NoSQL database for storing application data.

## Project Restrictions: (As of the time of writing)

- Running the server initializes the project by providing a hardcoded product/category json to the database, reprovides only when no data exist.
