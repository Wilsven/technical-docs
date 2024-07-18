---
updated: 17 July 2024
author: Ong Tsien Jin
---

# `Job`

=== "Python"

    ```python
    class Job(BaseModel):
        group_id: str
        created_at: str
        remove_articles: List[JobRemove] = Field(default=[])
        ignore_articles: List[JobIgnore] = Field(default=[])
        optimise_articles: List[JobOptimise] = Field(default=[])
        combine_articles: List[JobCombine] = Field(default=[])

    ```


## Attributes

### `attr` group_id
`str` The unique identifier for the group associated with the job.

### `attr` created_at
`str` The timestamp when the job was created.

### `attr` remove_articles
`List[JobRemove]` A list of articles to be removed from the job.

### `attr` ignore_articles
`List[JobIgnore]` A list of articles to be ignored during the job processing.

### `attr` optimise_articles
`List[JobOptimise]` A list of articles to be optimised as part of the job.

### `attr` combine_articles
`List[JobCombine]` A list of articles to be combined during the job processing.
