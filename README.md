# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Lighthouse Labs Week1 project by [Taejin Jung](https://github.com/taejin5314)

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @taejin5314/lotide`

**Require it:**

`const _ = require('@taejin5314/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns a head value of an array (index of 0)
* `tail(array)`: Returns tail values of an array (index after 0)
* `middle(array)`: Returns middle values of an array
* `flatten(array)`: Returns each element of an array (Can be applied to a nested array)
* `countOnly(object)`: Returns a count of the key of an object
* `letterPositions(string)`: Returns an object that contains each count of letters
* `findKeyByValue(object, string)`: Returns key by using value