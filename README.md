# Campus Hiring Evaluation – Frontend

## Project Overview

This project implements a Campus Notifications System where users can view and prioritize notifications such as placements, events, and results.

The project is divided into two stages:

* Stage 1: Fetch and process notifications using Node.js
* Stage 2: Build a frontend UI using React

---

## Tech Stack

* Frontend: React.js
* API Calls: Axios
* Backend API: Provided evaluation service
* Logging: Custom logging middleware

---

## Features

### Stage 1

* Fetch notifications from API
* Sort notifications based on:

  * Priority (Placement > Project Review > Event > Result)
  * Timestamp (latest first)
* Extract Top 10 priority notifications
* Implement logging using API

---

### Stage 2

* Display all notifications
* Show Top 10 priority notifications
* Filter notifications by type:

  * Event
  * Result
  * Placement
* Mark notifications as read/unread
* Responsive UI

---

## Priority Logic

| Type           | Priority |
| -------------- | -------- |
| Placement      | 5        |
| Project Review | 4        |
| Event          | 3        |
| Result         | 2        |

---

## Authentication

* API uses Bearer Token
* Token is generated using `/auth` endpoint

---

## Project Structure

```
frontend/
│
├── campus-notifications   # Stage 1 (Node.js)
│   ├── main.js
│   ├── api.js
│   └── logger.js
│
├── campus-frontend        # Stage 2 (React)
│   ├── src/
│   │   ├── App.js
│   │   ├── api/
│   │   └── utils/
│
└── README.md
```

---

## How to Run

### Stage 1

```
cd campus-notifications
node main.js
```

### Stage 2

```
cd campus-frontend
npm install
npm start
```

---

## Output

The React app runs at:

```
http://localhost:3000
```

(or another port if 3000 is occupied)

---

## Logging

Logging is implemented using:

```
await Log("frontend", "info", "api", "Fetching notifications", token);
```

---

## Notes

* node_modules is excluded using `.gitignore`
* API calls require a valid token
* No external UI frameworks used, as per instructions

---

## Author

Name: MANNAVA YASHASWINI
Roll No: RA2311056010067

---

## Status

Stage 1 Completed
Stage 2 Completed
Ready for Submission
