---
updated: 16 July 2024
author: Ong Tsien Jin
---

# Database Connector

Database Connector is an interface that has to be implemented by classes dedicated for database interactions.

The general direction for Database Connector is to be a query executor, whereby all necessary queries are handled by 
the implemented class. This means that classes that implement this interface must handle parsing of inputs and outputs 
to match the corresponding `Pydantic` models.

---

## `Interface` for Database Connector

As the backend architecture is intended to be modular (closely following OOP concepts), **all** database interactions
must be abstracted by `DbConnector` interface.


### Overview
The DbConnector interface provides an abstract class for a query engine abstraction, focusing on executing and parsing database queries tailored for specific data manipulation needs. It encapsulates methods for connecting to the database and managing various entities like articles, groups, edges, and jobs.

### Methods

#### Connection
- **connect**

```python
async def connect() -> None
```

Description: Initializes the database connection and completes the setup process.

#### Group Operations
- **create_group_from_articles**

```python
async def create_group_from_articles(group_name: str, article_ids: List[str]) -> str
```

Parameters:
- group_name (str): The name of the group to create.
- article_ids (List[str]): List of article IDs to include in the group.

Returns: ID of the newly created group.

- **get_all_groups**

```python
async def get_all_groups() -> List[Group]
```

Returns: A list of all groups, each populated with their respective ArticleMeta and Edges.

- **get_group**

```python
async def get_group(group_id: str) -> Group
```

Parameters:
- group_id (str): The ID of the group to retrieve.

Returns: The specified group.

#### Article Operations
- **create_articles**

```python
async def create_articles(articles: List[Article]) -> List[str]
```

Parameters:
- articles (List[Article]): List of articles to be created in the database.

Returns: List of IDs for the newly created articles.

- **get_all_articles**

```python
async def get_all_articles() -> List[ArticleMeta]
```

Returns: A list of all articles along with their metadata, excluding article contents to save on memory.

- **get_articles**

```python
async def get_articles(article_ids: List[str]) -> List[Article]
```

Parameters:
- article_ids (List[str]): List of article IDs to fetch.

Returns: List of articles with their content.

#### Edge Operations
- **create_edges**

```python
async def create_edges(edges: List[Edge]) -> List[str]
```

Parameters:
- edges (List[Edge]): List of edges to be created between articles.

Returns: List of IDs for the created edges.

- **get_edges**

```python
async def get_edges(article_ids: List[str]) -> List[Edge]
```

Parameters:
- article_ids (List[str]): List of article IDs to fetch edges for.

Returns: List of edges between the specified articles.

#### Generated Article Operations
- **create_generated_article**

```python
async def create_generated_article(generated_articles: List[GeneratedArticle]) -> List[str]
```

Parameters:
- generated_articles (List[GeneratedArticle]): List of generated articles to be inserted.

Returns: List of IDs for the inserted generated articles.

#### Combine Job Operations
- **create_combine_job**

```python
async def create_combine_job(group_id: str, sub_group_name: str, article_ids: List[str], remarks: str = "", context: str = "") -> str
```

Parameters:
- group_id (str): ID of the parent group.
- sub_group_name (str): Name of the subgroup to be combined.
- article_ids (List[str]): IDs of articles to be combined.
- remarks (str): Optional remarks for the subgroup.
- context (str): Additional context for the subgroup.

Returns: ID of the created combine job.

- **get_all_combine_jobs**

```python
async def get_all_combine_jobs() -> List[JobCombine]
```

Returns: List of all combine job records.
