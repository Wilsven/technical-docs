---
updated: 18 July 2024
authors: Ong Tsien Jin
---

# Populater

In order to populate the database with data from the pipeline, a `Populater` class is used.

---

## @label(class) Populater

=== "Python"

    ```python
    class DBPopulater:
        def __init__(
            self,
            mongo_connector: DbConnector,
            articles_file_path: str,
            edges_file_path: str,
            cluster_file_path: str
        )

    ```

=== "Example"

    In this example, we are using `MongoDb` as the database, therefore `MongoConnector` is being passed into the `DBPopulater`. However, as long as the class being passed in implements the methods in `DbConnector` interface, then there should be no issues.

    ```python

    # Create database connector
    conn = MongoConnector(
        username=os.getenv("MONGO_USERNAME"),
        password=os.getenv("MONGO_PASSWORD"),
        host=os.getenv("MONGO_HOST"),
        port=os.getenv("MONGO_PORT"),
        db_name="storage",
    )

    # Defining paths for data files
    articles_file_path = "path/to/merged_data.parquet"
    edges_file_path = "path/to/edges.pkl"
    cluster_file_path = "path/to/cluster.pkl"

    # Instantiate `DBPopulater`
    populater = DBPopulater(
        conn, articles_file_path, edges_file_path, cluster_file_path
    )

    # Run population methods
    await db_populator.populate_articles()
    await db_populator.populate_edges()
    await db_populator.populate_clusters()

    ```

### Initialisation

#### @label(meth) Initialise Connection

    ```python
    async def init_db() -> None
    ```

Description
: Method to initialise database connection. This method does not need to be called explicitly.

### Seeding

#### @label(meth) Populate Articles

    ```python
    async def populate_articles() -> None
    ```

Description
: Method to populate articles into the database.

#### @label(meth) Populate Edges

    ```python
    async def populate_edges() -> None
    ```

Description
: Method to populate edges into the database.

#### @label(meth) Populate Groups

    ```python
    async def populate_clusters() -> None
    ```

!!! WARNING "Must be called after `DBPopulater.populate_articles()"

    With the current implementation, this method must only be called after articles have been populated into the database.

!!! NOTE "Outdated method name"

    This method's name should be updated to `populate_groups()` as the terminology for "clusters" was shifted to "groups" across the project.

Description
: Method to populate groups into the database.
