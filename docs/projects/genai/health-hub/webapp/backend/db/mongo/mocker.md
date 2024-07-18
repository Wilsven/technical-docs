---
updated: 18 July 2024
author: Lyndon Lim
---

# Mocker

## Overview

Mocker is a utility module that provides functions to generate mock data for testing purposes. It is used to create dummy data that can be used to simulate real-world scenarios in the absence of actual data. The module generates random data based on predefined schemas and can be customized to suit specific testing requirements.

## Functions

### `Create Article IDs`

```python
def __create_article_ids(self) -> List[str]
```

Description: Generates a list of unique article IDs.

Returns: A list of unique article IDs.

### `Create Date`

```python
def _create_date(self) -> str
```

Description: Generates a random date.

Returns: A string representing a random date in the format 'YYYY-MM-DD'.

### `Generate article status`

```python
    def __generate_article_status(self, group_size: int) -> List[str]
```

Description: Generates a list of article statuses based on the number of articles in a group.

- **For Groups with More Than One Article**:

  The possible statuses for articles include `Combined`, `Removed`, `Ignored`, or `Optimised`. It is a requirement for groups of this size to have a minimum of two articles labeled as `Combined`.

- **For Single-Article Groups**:

  When a group consists of only one article, the article may be assigned any of the following statuses: `Removed`, `Ignored`, or `Optimised`. The `Combined` status is excluded in this scenario as it implies the presence of multiple articles.

Parameters:

- `group_size` (int): The number of articles in the group.

Returns: A list of article statuses for the articles in the group (str).

### `Create Combine Article`

```python
 async def __create_combine_articles(
        self, group_id: str, combine_ids: List[str]
    ) -> None
```

Description: Creates a new Combine Job with articles in the same group and subgroup, and then insert into the database.

This function also ensures that every subgroup created contains at least two articles.

### `Create Article`

```python
    def __create_article(self, article_id: str, status: str) -> Article
```

Description: Creates an `Article` with the specified ID and status. Other attributes are generated randomly or set to default values.

Returns: An `Article` object.

### `Create Articles`

```python
    async def create_articles(self, article_ids: List[str]) -> List[Article]
```

Description: Creates a list of `Article` objects with the specified IDs.

This function also assigns statuses from `__generate_article_status()` randomly to the articles by keeping track of which Article ID is assigned to which status.

Parameters:

- `article_ids` (List[str]): A list of article IDs.

Returns: A list of `Article`

### `Mock`

```python
async def mock(self) -> None:
```

Description: This is the main function that generates mock data for the database by creating `Documents` and inserting them into the database.

> **_NOTE:_** A `Group` can either be reviewed or not reviewed. Only if a `Group` is reviewed, it will have a `Job` associated with it and all the articles in the group will have a status.
