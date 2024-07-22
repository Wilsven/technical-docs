---
updated: 19 July 2024
authors:
  - Ong Tsien Jin
---

# Groups

This is a data type to hold articles in sub-groups, with wildcard names for user defined sub-groups.

!!! WARNING "Outdated"

    Following the direction in V2, this should be named `SubGroups` instead. Furthermore, the requirement set out by V2 required this type to be updated to facilitate the new features and expected functions.

---

## @label(type) Groups

=== "TypeScript"

    ```typescript
    export interface Groups {
      default: Article[],
      combine: Article[],
      ignore: Article[],
      [key:string]: Article[]
    }
    ```

### Attributes

#### @label(attr) Default

`Article[]` articles that are to be combined by default.

#### @label(attr) Combine

`Article[]` articles that have already been combined.

!!! WARNING "Deprecate"

    This should be deprecated, as the intended implementation in V2 should have `Article`'s loaded into their own respective subgroups, this is to allow the user to submit a new `Job` after editing.

#### @label(attr) Ignore

`Article[]` articles that should not be combined.

#### @label(attr) [key:string]

`Article[]` articles that belong to a user defined subgroup.
