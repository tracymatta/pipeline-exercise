# Simple Node.js CRUD API with Tests

This project is a simple CRUD API built with Node.js and Express. It also includes unit and integration tests using Jest and Supertest.

## **Installation Guide**

### **1. Install Node.js**

If you do not have Node.js installed, download and install it from the official website:

[Download Node.js](https://nodejs.org/)

### **2. Install Dependencies**

Run the following command to install necessary dependencies:

```
npm install
```

---

## **Running the API**

### **1. Start the Server**

Run the following command to start the server:

```
node server.js
```

By default, the server will run on **http://localhost:3000/**.

### **2. Testing the API in the Browser**

Once the server is running, you can test the API using your browser or a tool like Postman.

- **Get all items:**  
  Open [http://localhost:3000/items](http://localhost:3000/items) in your browser.

- **Get a specific item:**  
  Open [http://localhost:3000/items/1](http://localhost:3000/items/1) (Replace `1` with a valid item ID).

- You can also use post men to Create and delete items with POST and DELETE requests.

---

## **Running Tests**

This project includes both unit and integration tests.

### **1. Run All Tests**

To run the test suite, execute:

```
npm test
```

---

## **API Endpoints**

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| GET    | /items        | Retrieve all items       |
| GET    | /items/\<id\> | Retrieve a specific item |
| POST   | /items        | Create a new item        |
| PUT    | /items/\<id\> | Update an existing item  |
| DELETE | /items/\<id\> | Delete an item           |

---
