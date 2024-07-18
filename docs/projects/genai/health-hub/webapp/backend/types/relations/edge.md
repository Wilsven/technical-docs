---
updated: 17 July 2024
author: Ong Tsien Jin
---

# `Edge`

This datatype represents a connection between two nodes in a graph, typically used to represent relationships in a network.

=== "Python"

    ```python
    class Edge(BaseModel):
        start: str = Field()
        end: str = Field()
        weight: float = Field(default=-1.0)
    ```

## Attributes

### `attr` start

`string` The starting node of the edge, this will be the `id` of an `Article` or `ArticleMeta`.

### `attr` end

`string` The ending node of the edge, this will be the `id` of an `Article` or `ArticleMeta`.

### `attr` weight

`float` The weight of the edge, which can represent the strength of the connection or cost associated with the edge. Default is -1.0, indicating an unspecified weight.
