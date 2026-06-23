const { act } = require("react");

const notes = [
    {
        id: 1,
        title: "Learn Node.js",
        content: "Study Node.js core modules like fs, path, and http.",
        tags: ["nodejs", "backend"],
        archived: false
    },
    {
        id: 2,
        title: "MongoDB CRUD",
        content: "Practice create, read, update, and delete operations.",
        tags: ["mongodb", "database"],
        archived: false
    },
    {
        id: 3,
        title: "Express Middleware",
        content: "Understand how middleware works in Express applications.",
        tags: ["express", "backend"],
        archived: false
    },
    {
        id: 4,
        title: "JWT Authentication",
        content: "Implement login and protected routes using JWT.",
        tags: ["auth", "jwt"],
        archived: true
    },
    {
        id: 5,
        title: "JavaScript Promises",
        content: "Learn promise chaining and async/await.",
        tags: ["javascript", "async"],
        archived: false
    },
    {
        id: 6,
        title: "SQL Joins",
        content: "Practice INNER JOIN, LEFT JOIN, and RIGHT JOIN queries.",
        tags: ["sql", "database"],
        archived: true
    },
    {
        id: 7,
        title: "Git Commands",
        content: "Review common Git commands for daily development.",
        tags: ["git", "tools"],
        archived: false
    },
    {
        id: 8,
        title: "REST API Design",
        content: "Follow best practices for designing RESTful APIs.",
        tags: ["api", "backend"],
        archived: false
    },
    {
        id: 9,
        title: "Docker Basics",
        content: "Learn how to containerize a Node.js application.",
        tags: ["docker", "devops"],
        archived: false
    },
    {
        id: 10,
        title: "System Design",
        content: "Study scalability, load balancing, and caching concepts.",
        tags: ["system-design", "architecture"],
        archived: true
    }
];