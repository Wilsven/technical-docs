---
updated: 19 July 2024
author:
  - Ong Tsien Jin
---

# Sorter

This type is used to define a method to sort clusters.

---

## @label(type) Sorter

Sorter is a `type` for an anonymous function to reorder clusters.

=== "TypeScript"

    ```typescript
    export type sorter = (arg0:Cluster[]) => Cluster[]
    ```
