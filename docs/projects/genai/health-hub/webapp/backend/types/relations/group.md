---
updated: 17 July 2024
author: Ong Tsien Jin
---

# `Group`

This datatype represents a group of articles and associated metadata within the system.

=== "Python"
    
    
    ```python
    class Group(BaseModel):
        id: str = Field(default="")
    
        name: str = Field(default="")
        edges: List[Edge] = Field(default=[])
    
        articles: List[ArticleMeta] = Field(default=[])  # Articles not reviewed yet
        job: Job = Field(default=None)
    ```

## Attributes

### `attr` id
`string` Unique identifier for the group. 

### `attr` name
`string` Name of the group.

### `attr` edges
`List[Edge]` A list of edges connecting this group to other entities.

### `attr` articles
`List[ArticleMeta]` A list of articles metadata that are part of this group.

### `attr` job
`Job` The job associated with this group.

