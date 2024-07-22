---
updated: 18 July 2024
authors: Ong Tsien Jin
---

# Date

This pipe was introduced to format date strings using `Moment.js` within the component itself.

---

## @label(pipe) DatePipe

=== "Declaration"

    ```
    @Pipe({
        name: 'date',
        standalone: true
    })
    ```

=== "Usage (Default)"

    ```
    <span>{{ data.dateTimeAttribute | date }}</span>
    ```

=== "Usage (Defined Format)"

    ```
    <span>{{ data.dateTimeAttribute | date:'YYYY-MM-DD' }}</span>
    ```

### Methods

#### @label(meth) Transform

    transform(
        value: Date | moment.Moment | string,
        dateFormat: string="DD-MM-YYYY"
    ): string

Description
: This method converts any datetime format string into a specified format using `Momemnt.js`.

Parameters
: value(Date|moment.Moment|string): string that contains the original date information
: dateFormat(string="DD-MM-YYYY"): format for `Moment.js` to follow for the output.

Returns
: `string` of date that has been formatted.
