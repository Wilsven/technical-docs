---
updated: 18 July 2024
author: Ong Tsien Jin
---

# Cluster

This service was designed to handle data between the frontend and the backend, as well as managing data for frontend consumption.

!!! NOTE "Outdated naming convention"

    Some of the terminology used in this service is outdated (e.g. `Clusters` should be refered to as `Groups`). This document will refer to them in the correct names, but methods currently retain the legacy terminology.

---

## @label(service) ClusterService

### Group Methods

#### @label(meth) Fetch Data

    async fetchData():Promise<void>

Description
: This method instructs the service to make an API call to the backend, and updates an internal `BehaviorSubject`, which can be referenced by calling `CluserService.getClusters()`.

#### @label(meth) Get Groups

    getClusters(): BehaviorSubject<Cluster[]>

Description
: Calling this method will return a reference to a private `BehaviorSubject` that keeps track of all `Groups` stored in memory. The returned `BehaviorSubject` is subject to filters that has been applied.

#### @label(meth) Get Group by ID

    getCluster(id:string): BehaviorSubject<Cluster>

Description
: Fetch a group from memory, by its ID.

Parameters
: id (string): ID of the cluster.

!!! WARNING "One way binding"

    While this method returns a `BehaviorSubject`, it does not update the global state of this cluster. A `BehaviorSubject` is used in this case so that it will hold a value.

### Filter Methods

#### @label(meth) Add Filter

    addFilter(name:string, filter:Filter):void

Description
: Adds a filter to a private `BehaviorSubject` to filter clusters being displayed.

Parameters:
: name(string): Name of the filter. This will be the filter "key."
: filter(Filter): Filter anonymous function.

!!! WARNING "Not fully implemented"

    While the filter will be updated in its private attribute, the current implementation does not implement the filtering of `Group`s being retrieved.

#### @label(meth) Remove Filter

    removeFilter(name:string):void

Description
: Removes a filter by name.

Parameters
: name(string): Name of the filter, the "key."

### Sort Methods

#### @label(meth) Update Sort

    updateSort(sorter:Sorter):void

Description
: Replaces the sorter for the service.

Parameters
: sorter(Sorter): Sorter anonymous function to order clusters.

!!! WARNING "Not fully implemented"

    This method (and related methods) do not appear to be fully implemented.
