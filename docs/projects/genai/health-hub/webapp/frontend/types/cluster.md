---
updated: 19 July 2024
author:
  - Ong Tsien Jin
---

# Cluster

!!! NOTE "Outdated terminology"

    This should instead be named "group" but has yet to be renamed.

!!! WARNING "Not updated"

    This should mirror the `Group` Pydantic model from the backend, since that is the response model.

---

## @label(type) Cluster

=== "TypeScript"

    ```text
    export interface Cluster {
        id: string,
        name: string,
        articles: Article[],
        edges: Edge[]
    }
    ```

### Attributes

#### @label(attr) Id

`string` identifier for the cluster.

#### @label(attr) Name

`stirng` given name for the cluster.

#### @label(attr) Articles

`Article[]` array of `Article`'s that are found in the cluster.

#### @label(attr) Edges

`Edge[]` array of `Edge`'s that connect the `Article`'s within the cluster.
