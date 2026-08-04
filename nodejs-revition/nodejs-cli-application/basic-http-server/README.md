# 🌐 Basic HTTP Server

A command-line project built with **Node.js** using the built-in **`http`** module. This project helps you understand how web servers work before using frameworks like Express.js.

---

# 🎯 Project Goal

Build a basic HTTP server from scratch that can:

* Handle incoming HTTP requests
* Send different types of responses
* Implement routing
* Work with HTTP methods
* Parse request URLs
* Return JSON responses
* Serve static files
* Build a simple REST API without Express

---

# 📚 Learning Objectives

After completing this project, you should understand:

* How Node.js creates an HTTP server
* Request and Response objects
* HTTP methods
* HTTP status codes
* Routing
* Request headers
* Response headers
* Query parameters
* Route parameters
* Request body
* JSON responses
* Serving static files

---

# 🚀 Features

---

## 1. Create HTTP Server

### Route

```http
GET /
```

### Description

Create an HTTP server using Node.js and start listening on a specific port.

### Example

```text
Server running on http://localhost:3000
```

### Skills Learned

* `http.createServer()`
* `server.listen()`

---

## 2. Home Route

### Route

```http
GET /
```

### Description

Return a welcome message.

### Response

```text
Welcome to Basic HTTP Server
```

### Status Code

```text
200 OK
```

---

## 3. About Route

### Routes21`

```http
GET /about
```

### Description

Return information about the application.

### Response

```text
This server is built using Node.js HTTP Module.
```

### Skills Learned

* Basic Routing

---

## 4. Contact Route

### Route

```http
GET /contact
```

### Response

```json
{
    "email":"admin@example.com",
    "phone":"+91-9876543210"
}
```

### Skills Learned

* JSON Response
* Response Headers

---

## 5. 404 Page

### Route

```http
GET /unknown
```

### Response

```text
404 - Page Not Found
```

### Status Code

```text
404 Not Found
```

### Skills Learned

* Error Handling
* Default Route

---

## 6. Return JSON Data

### Route

```http
GET /users
```

### Description

Return a list of users.

### Response
    }
]

```json
[
    {
        "id":1,
        "name":"Alice"
    },
    {
        "id":2,
        "name":"Bob"
```

### Skills Learned

* JSON.stringify()
* Content-Type Header

---

## 7. Route Parameters

### Route

```http
GET /users/10
```

### Response

```json
{
    "id":10
}
```

### Skills Learned

* URL Parsing
* Dynamic Routing

---

## 8. Query Parameters

### Route

```http
GET /search?name=node
```

### Response

```json
{
    "keyword":"node"
}
```

### Skills Learned

* URL Object
* URLSearchParams

---

## 9. Read Request Headers

### Route

```http
GET /headers
```

### Description

Display all request headers sent by the client.

### Example Response

```json
{
    "host":"localhost:3000",
    "user-agent":"PostmanRuntime"
}
```

### Skills Learned

* `req.headers`

---

## 10. Handle POST Request

### Route

```http
POST /notes
```

### Request Body

```json
{
    "title":"Learn Node"
}
```

### Response

```json
{
    "message":"Note created successfully"
}
```

### Status Code

```text
201 Created
```

### Skills Learned

* Reading Request Body
* Streams

---

## 11. Handle PUT Request

### Route

```http
PUT /notes/1
```

### Request Body

```json
{
    "title":"Learn Advanced Node"
}
```

### Response

```json
{
    "message":"Note updated successfully"
}
```

### Skills Learned

* Request Body Parsing
* Route Parameters

---

## 12. Handle DELETE Request

### Route

```http
DELETE /notes/1
```

### Response

```json
{
    "message":"Note deleted successfully"
}
```

### Skills Learned

* DELETE Method
* HTTP Status Codes

---

## 13. Serve HTML File

### Route

```http
GET /
```

### Description

Return an HTML page instead of plain text.

### Skills Learned

* `fs.readFile()`
* Content-Type: `text/html`

---

## 14. Serve CSS File

### Route

```http
GET /style.css
```

### Skills Learned

* Static Files
* MIME Types

---

## 15. Serve Image

### Route

```http
GET /logo.png
```

### Skills Learned

* Image Streaming
* Response Headers

---

## 16. Logging Requests

Display every incoming request.

Example:

```text
GET /users
POST /notes
DELETE /notes/5
```

### Skills Learned

* Request Logging
* Debugging

---

## 17. Custom Response Headers

Example:

```http
X-App-Name: Basic HTTP Server
```

### Skills Learned

* `res.setHeader()`

---

## 18. Basic Notes API

Store notes in a JSON file and implement CRUD operations.

### Routes

```http
GET /notes
GET /notes/:id
POST /notes
PUT /notes/:id
DELETE /notes/:id
```

### Skills Learned

* CRUD Operations
* File System
* HTTP Methods
* JSON APIs

---

# 🗂 Suggested Folder Structure

```text
basic-http-server/
│
├── src/
│   ├── server.js
│   │
│   ├── routes/
│   │   ├── homeRoute.js
│   │   ├── userRoute.js
│   │   ├── noteRoute.js
│   │   └── staticRoute.js
│   │
│   ├── controllers/
│   │   ├── userController.js
│   │   └── noteController.js
│   │
│   ├── services/
│   │   └── noteService.js
│   │
│   ├── utils/
│   │   ├── bodyParser.js
│   │   ├── sendResponse.js
│   │   └── logger.js
│   │
│   ├── data/
│   │   └── notes.json
│   │
│   └── public/
│       ├── index.html
│       ├── style.css
│       └── logo.png
│
├── package.json
├── README.md
└── .gitignore
```

---

# ✅ Recommended Development Order

1. Create HTTP Server
2. Home Route
3. About Route
4. Contact Route
5. 404 Route
6. JSON Response
7. Route Parameters
8. Query Parameters
9. Request Headers
10. POST Request
11. PUT Request
12. DELETE Request
13. Serve HTML
14. Serve CSS
15. Serve Images
16. Request Logging
17. Custom Headers
18. Notes CRUD API

---

# 📖 Concepts Covered

* HTTP Protocol
* Request Object
* Response Object
* Routing
* HTTP Methods
* Status Codes
* Headers
* Query Parameters
* Route Parameters
* Request Body
* JSON APIs
* Static File Serving
* File System Operations
* Error Handling
* Modular Project Structure

---

# 🎯 Outcome

After completing this project, you will have a solid understanding of how web servers work internally and how frameworks like Express.js simplify HTTP server development. You'll also gain practical experience building a small REST API using only Node.js core modules, making the transition to Express much easier.
