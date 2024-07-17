

# Introduction

The backend for this webapp has been built with [FastAPI](https://fastapi.tiangolo.com/) as the foundation.
Flexibility of the backend was a key criteria for the software architecture. This is done by adhering to Object-Oriented Principles (OOP) for loose coupling. 

```mermaid
sequenceDiagram
    participant FE as Frontend
    participant FA as FastAPI
    participant DBC as Database Connector
    participant DB as Database
    
    FE ->> FA: Makes API request
    activate FE
    activate FA
    FA ->> DBC: Method call
    activate DBC
    DBC ->> DB: Database query
    DB -->> DBC: 
    DBC -->> FA: 
    deactivate DBC
    FA -->> FE: 
    deactivate FA
    deactivate FE
    
```

The diagram above is a very high level overview of how database interactions should be made -- by using the [DbConnector](db/db_connector.md) interface to build database connectors. This allows all database queries to be abstracted.