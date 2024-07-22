---
updated: 18 July 2024
authors: Ong Tsien Jin
---

# Job

This service was designed to be a singleton to manage `GroupManager`s across the frontend, allowing components to access the same (and correct) `GroupManager`.

---

## @label(service) JobService

### Attributes

#### @label(attr) groupManagers

`Record<string, GroupManager>` stores `GroupManager`s in a key value object.

### Methods

#### @label(meth) Initialise

    initialise(cluster: Cluster): void

Description
: Method to initialise a `GroupManager` and add it to `JobService.groupManagers`.

Parameters
: cluster(Cluster): `Cluster` data type.

#### @label(meth) Get Group Manager

    getGroupManager(id:string): GroupManager

Description
: Method to get a reference to the `GroupManager` with specified key.

Parameters
: id(string): the "key" that matches the `GroupManager` in `JobService.groupManagers`.

Returns
: `GroupManager`
