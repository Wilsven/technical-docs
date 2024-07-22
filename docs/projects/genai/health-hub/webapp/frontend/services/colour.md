---
updated: 18 July 2024
authors: Ong Tsien Jin
---

# Colour

This service was implemented to generate colour attributes for styling of components. The typical use case would be to use this for labels that are difficult to define by a type.

---

## @label(service) ColourService

### Attributes

#### @label(private) @label(attr) memoizedLabelColours

`Record<string, string>` to store memoized calculated `hsla()` strings when hashing strings.

### Methods

#### @label(private) @label(meth) String Hash

    private stringHash(label:string): number

Description
: Method to hash a string into a number. This number will be used for the `hue` in `hsla`.

Parameters
: label(string): This will typically be the string that we are trying to create a colour for.

Returns
: A number in the range of $[1, 360]$ corresponding to the `hue` in `hsla`.

#### @label(meth) String HSL

    stringHSL(label:string): string

Description
: Method to convert a string payload into a `hsla` string for CSS.

Parameters
: label(string): This will typically be the string that we are trying to create a colour for.

Returns
: String that is to be used in CSS. E.g. `hsla(252, 20%, 60%, 20%)`.

#### @label(meth) Intensity HSL

    intensityHSL(val:number, lower:number=0, upper:number=1): string

Description
: Method to create a `hsl` string based on a numeric value, on a range of $h\in[0, 120]$ which corresponds to a range of red to green hues.

Parameters
: val(number): The number that we are trying to generate a `hsla` for.
: lower(number=0): Lower bound value on the scale.
: upper(number=0): Upper bound value on the scale.

Returns
: String that is to be used in CSS. E.g. `hsla(252, 20%, 60%, 20%)`.
