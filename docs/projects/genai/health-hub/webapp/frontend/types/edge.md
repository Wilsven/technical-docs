---
updated: 19 July 2024
authors:
  - Ong Tsien Jin
---

# Edge

This edge data type is used in `Cluster`'s to map a bidirectional connection between two `Article`'s.

---

## @label(type) Edge

=== "TypeScript"

    ```typscript
    export interface Edge {
        start: string,
        end: string,
        weight: number
    }
    ```

!!! WARNING "Bidirectional"

    While the `Edge` type has a `start` and `end` attribute, the intended representation is a bidirectional edge between two nodes (`Article`'s). They are given this attributes soley due to how `d3.js` handles edges.

### Attributes

#### @label(attr) Start

`string` representing the ID of an `Article`.

#### @label(attr) End

`string` representing the ID of an `Article`.

#### @label(attr) Weight

`number` weight of the connection between two `Article`'s, whereby `Edge.weight` $\in[0,1]$.
