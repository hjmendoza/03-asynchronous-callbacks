![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 03: Asynchronous Callbacks - Lab - Haley Mendoza
===

## Testing
##### File Reader Module Tests
* Use `describe` and `it` (or `test`) methods to define descriptive tests and increase readability
* Each `it` callback should aim to test a small, well defined, feature of a function
* Write tests to ensure that the reader function rejects errors with invalid file paths
* Write tests to ensure that the reader function correctly resolves mapped string data for an array of file paths

## 
##### File Reader Module
`reader.js` , a module in the  the lib/ directory that exports a single function. The reader module has an airty of two that takes an array of three file paths and resolves a mapped array of strings loaded from each file using an error-first callback. The string data is returned in the same order as the file path data. If an error occurs, it immediately rejects the error using the callback and stop execution. Tested to ensure reader functions correctly. 

* The file reader has the function signature `(paths, callback) => undefined`
* On failure, the file reader invokes the callback with an error `callback(error)`
* On success, the file reader module invokes the callback with `null` as the first parameter and the result as the second parameter - `callback(null, result)`

