---
updated: 19 July 2024
authors:
  - Ong Tsien Jin
---

# Article

!!! WARNING "Outdated"

    This type has yet to be updated to follow the changed required in V2.

---

## @label(type) Article

=== "TypeScript"

    ```text
    export enum ArticleStatus {
        Default = "",
        Combined = "COMBINED",
        Ignored = "IGNORED"
    }

    export interface Article {
        id: string,
        title: string,
        description: string,
        pr_name: string,
        content_category: string,
        url: string,
        date_modified: string,
        status: ArticleStatus,
        keywords: string[],
        cover_image_url: string,
        engagement_rate: number,
        number_of_views: number
    }
    ```

!!! WARNING "Deprecation of `ArticleStatus`

    Article status has been deprecated in favour of organising articles into "sub-group" arrays. See `Group` Pydantic type.

### Attributes

#### @label(attr) Id

`string` Unique identifier for the article.

#### @label(attr) Title

`string` Title of the article.

#### @label(attr) Description

`string` Brief description of the article.

#### @label(attr) PR Name

`string` Name of the public relations contact or the author.

#### @label(attr) Content Category

`string` Category under which the article falls.

#### @label(attr) URL

`string` Web address where the article can be accessed.

#### @label(attr) Date Modified

`string` Last modification date of the article.

#### @label(attr) Status

`ArticleStatus` Status of the article, which can be Default, Combined, or Ignored.

#### @label(attr) Keywords

`string[]` List of keywords associated with the article.

#### @label(attr) Cover Image URL

`string` URL of the cover image for the article.

#### @label(attr) Engagement Rate

`number` Rate of engagement that the article has received.

#### @label(attr) Number of Views

`number` Total number of views that the article has accumulated.
