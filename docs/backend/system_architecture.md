---
date: 15 July 2024
author: Ong Tsien Jin
---

# System Architecture

This document outlines the general strategy of API interaction between the Frontend and Backend.

The overall system of the web application comprises three main systems.

- Frontend (Angular)
- Backend (FastAPI)
- Database (MongoDB)

---

## Local Development

```mermaid
block-beta
    columns 6
    Frontend
    space
    Backend
    space
    block:Docker
        MongoDb[("MongoDb")]
    end
    
    Frontend --> Backend
    Backend --> MongoDb
```

Docker is utilised to containerise `MongoDb` for local development.